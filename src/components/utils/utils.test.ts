import {
  Layout,
  Misc,
} from './index';

describe('should have object checker function', () => {
  it('should check of object exists', () => {
    expect(typeof Misc.objectChecker === 'function').toBeTruthy();
  });

  it('should return true or false', () => {
    expect(Misc.objectChecker(0)).toBeFalsy();
  });
});

describe('should have heightToDp', () => {
  it('should check if function exists', () => {
    expect(typeof Layout.heightPercentageToDP === 'function').toBeTruthy();
  });

  it('should check if function returns number', () => {
    expect(typeof Layout.heightPercentageToDP(9) === 'number').toBeTruthy();
  });
});

describe('should have truncate function', () => {
  it('should check if function exists', () => {
    expect(typeof Misc.truncate === 'function').toBeTruthy();
  });

  it('should check if function returns string', () => {
    expect(typeof Misc.truncate('got') === 'string').toBeTruthy();
  });
});

describe('should have urlChecker function', () => {
  it('should check if function exists', () => {
    expect(typeof Misc.urlChecker === 'function').toBeTruthy();
  });

  it('should check if function returns boolean', () => {
    expect(typeof Misc.urlChecker('got') === 'boolean').toBeTruthy();
  });
});
