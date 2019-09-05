# Pdf2Html Converter
A small script to convert PDF files into HTML

## Requirements
- [pdf2htmlEX](https://github.com/coolwanglu/pdf2htmlEX)
- [Node/NPM](https://nodejs.org/en/)

## Usage
1. Clone this repository
2. `cd` into the cloned repository
3. Run `$ npm install`
4. Run `$ node index.js [options]`

## Available Options
- File: `--file={path/to/file.pdf}`
- Directory: '--dir={path/to/files}'

When the file option is used, this program will convert only a single PDF file. The directory option can be used to batch process all PDF files within a directory (not recusively).

All resulting HTML files are built to `./dist`.
