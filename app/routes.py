from flask import render_template, request, jsonify
from . import create_app

app = create_app()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/search', methods=['POST'])
def search():
    data = request.get_json()
    search_text = data['searchText']
    results = [{'file': 'example.xlsx'}]  # Example result, replace with actual search logic
    return jsonify(results)

@app.route('/replace', methods=['POST'])
def replace():
    data = request.get_json()
    file_path = data['file']
    search_text = data['searchText']
    replace_text = data['replaceText']
    
    # Implement actual replacement logic here
    
    print(f"Replacing '{search_text}' with '{replace_text}' in {file_path}")
    return jsonify({"success": True, "file": file_path})
