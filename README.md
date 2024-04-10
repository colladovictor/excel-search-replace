# Excel Search and Replace Web Application

This project is a Flask-based web application that allows users to search for and replace text within Excel (.xlsx) files. It utilizes a simple web interface for inputting search queries and replacement text, displaying the files containing the search query, and allowing text replacements directly through the browser.

## Getting Started

These instructions will guide you through setting up and running the application on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have Python installed on your system. This application was developed with Python 3.8, but it should be compatible with any Python 3.x version. You will also need pip for installing Python packages.

### Installation

1. Clone the repository to your local machine:
2. Navigate to the project root directory:
3. Create a virtual environment:
4. Activate the virtual environment:
- On Windows:
  ```
  venv\Scripts\activate
  ```
- On Unix or MacOS:
  ```
  source venv/bin/activate
  ```
5. Install the required packages:

### Running the Application

1. Start the Flask application:
2. Open your web browser and navigate to `http://127.0.0.1:5000/` to access the application.

3. Use the web interface to search for text within Excel files located in the project directory, replace text, and view the files that contain the specified text.

## Features

- Search for specific text across Excel (.xlsx) files within a specified directory.
- Replace found text with new text within the Excel files directly from the web interface.
- Display a list of files containing the search text, with options to replace text individually or in bulk.

## Built With

* [Flask](http://flask.pocoo.org/) - The web framework used.
* [openpyxl](https://openpyxl.readthedocs.io/en/stable/) - A Python library to read/write Excel 2010 xlsx/xlsm/xltx/xltm files.

if errors with python 3.10, do: pip install --upgrade Flask Werkzeug


## Authors

* **colladovictor** - *Initial work* - [colladovictor](https://github.com/colladovictor)

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
