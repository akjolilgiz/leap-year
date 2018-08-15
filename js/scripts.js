var learYear = function(inputYear) {
  return false;

}




$(document).ready(function(){
  $("form#leap-year").submit(function(event){
    event.preventDefault();

    var userInput = ("input#year").val();
    var output = learYear(userInput);
    alert(output);
  });
});
