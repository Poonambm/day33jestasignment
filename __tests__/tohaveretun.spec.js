
test('this checks for mock function call has return succesfully atleat one time and didnt throw error',() =>{
   
    const num1 = jest.fn(() => true);
    num1();
    expect(num1).toHaveReturned();
});