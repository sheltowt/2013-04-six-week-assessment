// Create your tests for the hashTable here...

var hashExample = new makeHash();

describe("makeHash", function() {
  it("contains a function", function() {
    expect(true).toBe(true);
  });
});

console.log(hashExample);

describe("hashExample", function() {
  it("contains the function insert", function() {
    expect(hashExample.insert("a","hello"));
  });
});

describe("makeHash", function() {
  it("is able to insert a value into hashTable", function() {
    hashExample.insert("b","dog");
    expect(hashExample.retrieve("b").val).toBe('dog');
  });
});

describe("makeHash", function() {
  it("is able to retrieve a value from a hashTable", function() {
    hashExample.insert("b","dog");
    hashExample.insert("a","apple");
    expect(hashExample.retrieve('b').val).toBe('dog');
  });
});

describe("hash", function() {
  it("creates a hash", function() {
    hashExample.insert("b","dog");
    hashExample.insert("a","apple");
    hashExample.insert("c","cat");
    expect(hashExample.retrieve('c').val).toBe('cat');
  });
});