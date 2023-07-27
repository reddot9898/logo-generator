const fs = require('fs');

class Shape {
  constructor(shapeType) {
    this.shapeType = shapeType;
    this.color = 'white';
  }

  setColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150,30 75,150 225,150" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
  }
}

class LogoMaker {
  async generate(userInput) {
    const { text, textColor, shape, shapeColor } = userInput;

    const shapeInstance = this.getShapeInstance(shape);
    shapeInstance.setColor(shapeColor);

    const svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeInstance.render()}
      <text x="50%" y="50%" fill="${textColor}" font-size="40" font-family="Arial" dominant-baseline="middle" text-anchor="middle">${text}</text>
    </svg>`;

    await this.saveToFile('logo.svg', svgContent);
  }

  getShapeInstance(shape) {
    switch (shape) {
      case 'circle':
        return new Circle();
      case 'triangle':
        return new Triangle();
      case 'square':
        return new Square();
      default:
        throw new Error('Invalid shape selected.');
    }
  }

  async saveToFile(filename, content) {
    try {
      await fs.promises.writeFile(filename, content);
    } catch (error) {
      throw new Error('Error writing to file:', error);
    }
  }
}

module.exports = { LogoMaker };
