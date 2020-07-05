import {objectChecker} from './index';

describe('should have object checker function', () => {
  it('should check of object exists', () => {
    expect(typeof objectChecker === 'function').toBeTruthy();
  });

  it('should return true or falsw', () => {
    expect(objectChecker()).toBeFalsy();
  });
});
