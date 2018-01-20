var snakeCase = require("./snakeCase");


describe("Snake Case", function() {
  it("converts a basic two word phrase into snake case", function() {
    expect(snakeCase('Hello, World!')).toEqual("hello_world");
  });

  it("converts a compound camelCase word into snake case", function() {
    expect(snakeCase("snakeCase")).toEqual("snake_case");
  });

  it('works with Caps and punctuation', function() {
    expect(snakeCase('Hello, World???')).toEqual('hello_world');
  });

  it('works with longer phrases', function() {
    expect(snakeCase('This is the song that never ends....')).toEqual('this_is_the_song_that_never_ends');
  });
});