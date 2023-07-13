/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from 'qr-image';
import fs, { createWriteStream } from 'fs';

inquirer
.prompt([                               //inquirer.prompt
    /* Pass your questions in here */
    {
        message: "Type in Your URL!",
        name: "URL",
    },
  ])
  .then((answers) => {                  //inquirer.then
    // Use user feedback for... whatever!!
    // console.log(answers);
    const url = answers.URL;
    var qr_img = qr.image(url);             //.image("text or url", type of file default .png)
    qr_img.pipe(fs.createWriteStream('qr_img.png'));            //createWriteStream(qr file name)

  })
  .catch((error) => {                   //inquirer.catch
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
