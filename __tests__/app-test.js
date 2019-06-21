'use strict';

let alter = require('../mod/alter');

jest.mock('fs');

describe('Read File Function', () => {
  it('should read a text file', () => {
    let file = 'file.txt';

    return alter.readFile(file)
      .then(data => {
        expect(data).toBeDefined();
      });
  });
});


describe('upper', () => {
  it('should take in text data and return it back all in caps', () => {
    let txt = 'thisisbutatest';
    let result = alter.upper(txt);
    expect(result).toBe('THISISBUTATEST');
  });
});

//  Need to double check on how to properly write a test for write
// describe('write', () => {
//   it('should write a text file', () => {
//     let file = 'file.txt';

//     return alter.writeFile(file)
//       .then(data => {
//         expect(data).toBeDefined();
//       });
//   });
// });

describe('Write File Function', () => {

  it('Should reject the error if given bad file name', () => {
  // arrange
    let file = 'bad.txt';
    let str = 'string';
    let buffer = Buffer.from(str);

    // act
    alter.writeFile(file, buffer)
      .then(data => {
        expect(data).toBeUndefined();
      })
      .catch(err => {
      // assert
        expect(err).toBeDefined();
      });
  });

  describe('caps()', () => {
    it('Should take data and return that data all caps', () => {
    // arrange
      let data = 'abcd';
    
      // act
      let result = alter.upper(data);

      // assert
      expect(result).toEqual('ABCD');
    });
  });
});