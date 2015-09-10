describe('countUp', function () {
  it("will count up to 10 by 2", function() {
    expect(countUp(10, 2)).to.eql([2, 4, 6, 8, 10])
  });

  it("will count up to user input by user chosen increments", function() {
    expect(countUp(10, 2)).to.eql([2, 4, 6, 8, 10])
  });

  it("will count up to user input by user chosen increments where user input % user increment !== 0", function() {
    expect(countUp(22, 7)).to.eql([7, 14, 21])
  });
});
