var simonSays = require("./simonSays");

describe("echo", function() {
  it("echos a string value", function() {
    expect(simonSays.echo("hello")).toEqual("hello");
  });
});

describe("shout", function() {
  it("returns a capitalized string", function() {
    expect(simonSays.shout("hello")).toEqual("HELLO");
  });

  it("works on a phrase with punctuation", function() {
    expect(simonSays.shout("is anyone home?!")).toEqual("IS ANYONE HOME?!");
  });
});

describe("repeat", function() {
  it("repeats a given string twice with no number specified", function() {
    expect(simonSays.repeat("hello")).toEqual("hello hello");
  });

  it("repeats a given string n times with n specified", function() {
    expect(simonSays.repeat("hello", 4)).toEqual("hello hello hello hello");
  });
});

describe("piece of word", function() {
  it("returns the first letter", function() {
    expect(simonSays.pieceOfWord("technology", 1)).toEqual("t");
  });

  it("returns the first three letters", function() {
    expect(simonSays.pieceOfWord("technology", 4)).toEqual("tech");
  });
});

describe("first word", function() {
  it("returns the word hello if hello is given", function() {
    expect(simonSays.firstWord("hello")).toEqual("hello");
  });

  it("returns how if the phrase how are you is given", function() {
    expect(simonSays.firstWord("how are you")).toEqual("how");
  });
});

describe("capitalize", function() {
  it("capitalizes a single word", function() {
    expect(simonSays.capitalize("hello")).toEqual("Hello");
  });
});

describe('titleCreator', function() {
    it('capitalizes a word', function() {
      expect(simonSays.titleCreator("jaws")).toEqual("Jaws");
    });

    it('capitalizes every word (aka title case)', function() {
      expect(simonSays.titleCreator("david copperfield")).toEqual("David Copperfield");
    });

    it("doesn't capitalize 'little words' in a title", function() {
      expect(simonSays.titleCreator("war and peace")).toEqual("War and Peace");
    });

    it('does capitalize "little words" at the start of a title', function() {
      expect(simonSays.titleCreator("the bridge over the river kwai")).toEqual("The Bridge over the River Kwai");
    });
  });