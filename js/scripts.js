var leapYear = function(inputYear) {

  if (inputYear % 4 === 0) {
    return true;
  } else {
  return false;
  }
}




$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#year").val();

    var output = leapYear(userInput);
    alert(output);
  });
});
