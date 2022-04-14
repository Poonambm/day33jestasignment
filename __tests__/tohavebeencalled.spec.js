describe('drinkAll', () => {
    test('drinks something lemon-flavored', () => {
      let drink = jest.fn();
      drinkAll(drink, 'lemon');
      expect(drink).toHaveBeenCalled();
    });
  
     });