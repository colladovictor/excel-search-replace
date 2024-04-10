document.addEventListener("DOMContentLoaded", function() {
    const directoryPath = document.getElementById('directory-path');
    const searchText = document.getElementById('search-text');
    const replaceText = document.getElementById('replace-text');
    const resultsDiv = document.getElementById('results');
    const searchButton = document.getElementById('search-button');
    const replaceButton = document.getElementById('replace-button');

    const performAction = (isReplace) => {
        resultsDiv.innerHTML = ''; // Clear previous results
        const actionPath = isReplace ? '/replace' : '/search';
        const payload = {
            directoryPath: directoryPath.value,
            searchText: searchText.value,
            replaceText: isReplace ? replaceText.value : undefined
        };

        fetch(actionPath, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then(data => {
            if (data.length === 0) {
                resultsDiv.innerHTML = '<p>No data found.</p>';
            } else {
                displayResults(data);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            resultsDiv.innerHTML = '<p>Error performing the action.</p>';
        });
    };

    searchButton.addEventListener('click', () => performAction(false));
    replaceButton.addEventListener('click', () => performAction(true));

    function displayResults(results) {
        results.forEach(result => {
            const resultEl = document.createElement('div');
            resultEl.innerHTML = `
                <p>File: <strong>${result.file}</strong></p>
                <p>Sheet: <strong>${result.sheet}</strong>, Row: <strong>${result.row}</strong>, Content: <strong>${result.content}</strong></p>
            `;
            resultsDiv.appendChild(resultEl);
        });
    }
});
