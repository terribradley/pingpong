
var pingPongFunction = function(userInput) {
  var numbers = []

  for (index = 1; index <= userInput; index ++) {
    numbers.push(index);
  }

  for (index = 0; index <= numbers.length; index ++) {
    var divisiableNum = numbers.length;
    for (i = divisiableNum; i > index; i--) {
      if (numbers[i] %15 === 0) {
      numbers.splice(i,1);
    } else if (numbers[i] %5 === 0) {
      numbers.splice (i,1);
      debugger;
    }
  }
};
};
      // .push("PingPong")
    //  debugger;

      // } else if (numbers[i] %3 === 0) {
      // result = numberList.push("Ping");
      // } else {
      // result = numberList.push(i);
 // console.log();



 // };


$(document).ready(function() {
  $(".ping-pong").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#user-input").val());
    numbers = pingPongFunction(input);
  });
});