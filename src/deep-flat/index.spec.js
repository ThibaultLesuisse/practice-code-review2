import { deepflat } from './index.js';

describe('What is the type of array', () => {
  it('Should return array', () => {
    const expected = ['a', 'b', ['c']];
    expect(deepflat(expected)).toEqual(['a', 'b', 'c']);
  });
  it('Should return a dubbely nested array', () => {
    const expected = ['a', ['b', ['c']]];
    expect(deepflat(expected)).toEqual(['a', 'b', 'c']);
  });
  it('Should return a tripple nested array', () => {
    const expected = ['a', ['b', ['c', ['d']]]];
    expect(deepflat(expected)).toEqual(['a', 'b', 'c', 'd']);
  });
  it('Should return a dubbely nested array', () => {
    const expected = [1, [2, [3]]];
    expect(deepflat(expected)).toEqual([1, 2, 3]);
  });
  it('Should return empty when empty is passed', () => {
    expect(deepflat()).toEqual([]);
  });
});
