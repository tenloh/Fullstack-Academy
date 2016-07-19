describe('renameFiles', function(){

  it('returns an array', function(){
    expect(Array.isArray(renameFiles(['file','fileTwo', 'fileThree', 'fileFour']))).toEqual(true);
  });

  it('does not rename files if duplicates are not present', function(){
    expect(renameFiles(['FullstackTestFirst', 'GuessingGame', 'FileWatcher'])).toEqual(['FullstackTestFirst', 'GuessingGame', 'FileWatcher']);
  });

  it('Renames files if there are duplicates by adding `(num)` to the end of the filename where `num` is the smallest positive integer that the obtained name did not use.', function(){
    expect(renameFiles(['hello', 'world', 'hello'])).toEqual(['hello', 'world', 'hello(1)']);
    expect(renameFiles(["a(1)","a(6)","a","a","a","a","a","a","a","a","a","a"])).toEqual(["a(1)","a(6)","a","a(2)","a(3)","a(4)","a(5)","a(7)","a(8)","a(9)","a(10)","a(11)"]);
  });

});
