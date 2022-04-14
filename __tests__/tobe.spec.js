
const num1 = require('../index.js');
test('this checks for reverse number to be same',() =>{
    expect(num1("349")).toEqual("943");
});