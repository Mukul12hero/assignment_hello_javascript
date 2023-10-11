function isJavaScriptFile(fileName) {

  if (typeof fileName === 'string') {
    if (fileName.endsWith('.js')) {
      return true;
    }
    else {
      return false;
    }
  }
  else {
    return 'please type a string';
  }
}

const fileName = 'oilPrice.js';
const checkFile = isJavaScriptFile(fileName);
console.log(checkFile);


// advanced method

// function isJavaScriptFile(filePath) {
//   // Extract the file extension from the file path
//   const fileExtension = filePath.split('.').pop().toLowerCase();

//   // Check if the file extension is one of the JavaScript extensions
//   return ['.js', '.mjs', '.jsx'].includes(`.${fileExtension}`);
// }

// // Example usage:
// const filePath = 'path/to/your/file.js';

// if (isJavaScriptFile(filePath)) {
//   console.log('The file is a JavaScript file.');
// } else {
//   console.log('The file is not a JavaScript file.');
// }


