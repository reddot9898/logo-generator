const { LogoMaker } = require('./shapes');

describe('Shape rendering', () => {
  it('should render a circle SVG element', () => {
    const circle = new LogoMaker().getShapeInstance('circle');
    circle.setColor('blue');
    const expected = '<circle cx="150" cy="100" r="80" fill="blue" />';
    expect(circle.render()).toEqual(expected);
  });

  it('should render a triangle SVG element', () => {
    const triangle = new LogoMaker().getShapeInstance('triangle');
    triangle.setColor('red');
    const expected = '<polygon points="150,30 75,150 225,150" fill="red" />';
    expect(triangle.render()).toEqual(expected);
  });

  it('should render a square SVG element', () => {
    const square = new LogoMaker().getShapeInstance('square');
    square.setColor('green');
    const expected = '<rect x="50" y="50" width="200" height="200" fill="green" />';
    expect(square.render()).toEqual(expected);
  });
});
