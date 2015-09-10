describe('countUp', function () {
  it("will count up to user input number incrementally", function() {
    expect(countUp('10')).to.eql([2, 4, 6, 8, 10])
  });
});
