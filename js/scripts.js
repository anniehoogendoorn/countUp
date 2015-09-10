var countUp = function(toNumber, byNumber) {
  var returnedArray = [];
  for (var i = byNumber; i <= toNumber; i += byNumber) {
    returnedArray.push(' ' + i);
  }
  return returnedArray ;
};

$(document).ready(function() {
  $("form#counter").submit(function(event) {
    var toNumber = parseInt($("input#toNumber").val());
    var byNumber = parseInt($("input#byNumber").val());
    var result = countUp(toNumber, byNumber);

    $("#result").text(result);
    $("#results").show();
    event.preventDefault();
  });
});
