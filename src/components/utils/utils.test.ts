import {
  heightPercentageToDP,
  objectChecker,
  truncate,
  urlChecker,
} from './index';

describe('should have object checker function', () => {
  it('should check of object exists', () => {
    expect(typeof objectChecker === 'function').toBeTruthy();
  });

  it('should return true or false', () => {
    expect(objectChecker(0)).toBeFalsy();
  });
});

describe('should have heightToDp', () => {
  it('should check if function exists', () => {
    expect(typeof heightPercentageToDP === 'function').toBeTruthy();
  });

  it('should check if function returns number', () => {
    expect(typeof heightPercentageToDP(9) === 'number').toBeTruthy();
  });
});

describe('should have truncate function', () => {
  it('should check if function exists', () => {
    expect(typeof truncate === 'function').toBeTruthy();
  });

  it('should check if function returns string', () => {
    expect(typeof truncate('got') === 'string').toBeTruthy();
  });
});

describe('should have urlChecker function', () => {
  it('should check if function exists', () => {
    expect(typeof urlChecker === 'function').toBeTruthy();
  });

  it('should check if function returns boolean', () => {
    expect(typeof urlChecker('got') === 'boolean').toBeTruthy();
  });
});
