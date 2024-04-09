document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.getElementById('search-form');
    const searchText = document.getElementById('search-text');
    const replaceText = document.getElementById('replace-text'); 
    const resultsDiv = document.getElementById('results');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        fetch('/search', {
            method: 'POST',
            body: JSON.stringify({ searchText: searchText.value }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            displayResults(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });

    function displayResults(results) {
        resultsDiv.innerHTML = '';

        if (results.length === 0) {
            resultsDiv.innerHTML = 'No results found.';
            return;
        }

        results.forEach((result, index) => {
            const resultElement = document.createElement('div');
            resultElement.innerHTML = `<strong>${result.file}</strong>: contains searchable text <button onclick="replaceTextInFile('${result.file}', ${index})">Replace Text</button>`;
            resultsDiv.appendChild(resultElement);
        });
    }

    window.replaceTextInFile = function(file, index) {
        fetch('/replace', {
            method: 'POST',
            body: JSON.stringify({ file: file, searchText: searchText.value, replaceText: replaceText.value }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert(`Text replaced in ${file}`);
            } else {
                alert(`Failed to replace text in ${file}`);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };
});
