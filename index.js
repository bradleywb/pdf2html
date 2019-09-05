const args = require('yargs').argv;
const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const pdf2html = require('pdftohtmljs');

const DEST_DIR = './dist';

mkdirp(DEST_DIR, (err) => {
  if (err) return console.log(err);

  if (args.file) {
    convert(args.file);
  } else if (args.dir) {
    fs.readdir(args.dir, (err, files) => {
      if (err) return console.log(`Cannot read directory: ${err}`);

      files.forEach((file) => {
        convert(`${args.dir}/${file}`);
      });
    });
  } else {
    console.log('No files provided');
  }
});

// ----------------------
// function defs
// ----------------------

// fn: convert()
// takes a single pdf file name
function convert(src = null) {
  if (!src) return console.log('No file provided');

  let srcInfo = path.parse(src);

  if (srcInfo.ext.toLowerCase() !== '.pdf') return console.log(`Invalid file type: ${src}`);

  console.log(`converting file: ${src}`);

  // pdf2htmlEX doesn't allow absolute paths for some reason,
  // so to mitigate any risk of invalid paths, we'll always build
  // resulting files to the './dist' directory (relative to index.js)
  let dest = `${DEST_DIR}/${srcInfo.name}.html`;

  const converter = new pdf2html(path.normalize(src), path.normalize(dest));

  converter.convert().then((ret) => {
    console.log(`created: ${dest}`);
  }).catch((err) => {
    console.log(`${err}`);
  });
}
