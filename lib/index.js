const inquirer = require('inquirer');
const { LogoMaker } = require('./lib/shapes');

const logoMaker = new LogoMaker();

async function main() {
  try {
    const userInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the text:',
        validate: (input) => input.length > 0 && input.length <= 3,
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color keyword (OR a hexadecimal number) for the text:',
        default: 'black',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color keyword (OR a hexadecimal number) for the shape:',
        default: 'white',
      },
    ]);

    await logoMaker.generate(userInput);
    console.log('Generated logo.svg');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();