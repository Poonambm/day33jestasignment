
const num1 = require('../index3.js');
test('this checks for object has length property and is set to numeric value',() =>{
    expect(num1('the brown fox')).toHaveLength(13);
});
