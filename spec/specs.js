describe("wordOrder", function() {
  it("will return a word one time that is used once", function() {
    expect(wordOrder("pizza")).to.eql(["pizza"]);
  });

  it("will return a word one time that is used more than once", function() {
    expect(wordOrder("pizza pizza")).to.eql(["pizza"]);
  });

  it("will return both words used in a phrase, once each in order of repetition", function() {
    expect(wordOrder("oh my my")).to.eql(["my", "oh"]);
  });

});
