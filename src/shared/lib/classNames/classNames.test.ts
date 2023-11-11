import { classNames } from './classNames';

describe('classNames', () => {
  test('one argument', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('two argument', () => {
    expect(classNames('someClass', {}, ['someClass2', 'someClass3'])).toBe('someClass someClass2 someClass3');
  });

  test('three argument', () => {
    expect(classNames('someClass', { someClass4: true }, ['someClass2', 'someClass3'])).toBe('someClass someClass2 someClass3 someClass4');
  });

  test('false argument', () => {
    expect(classNames('someClass', { someClass4: false }, ['someClass2', 'someClass3'])).toBe('someClass someClass2 someClass3');
  });

  test('undefined argument', () => {
    expect(classNames('someClass', { someClass4: undefined }, ['someClass2', 'someClass3'])).toBe('someClass someClass2 someClass3');
  });
});
