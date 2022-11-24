import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  it('create an instance', () => {
    const pipe = new TruncatePipe();
    expect(pipe).toBeTruthy();
  });
});

it ('should truncate a string to 10 characters plus an ellipsis', () => {
  // create instance
  const pipe = new TruncatePipe();
  // pass params
  const ret: any = pipe.transform ('abcdefghijklmnopq', 10, '...');
  // assert
  expect (ret).toEqual ('abcdefghij...');
});
