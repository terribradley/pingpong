
var pingPongFunction = function(userInput) {
  var numbers = []

  for (index = 0; index < userInput; index ++) {
    numbers.push(index)
      debugger;
  };

  for (index = 0; index <= numbers.length; index ++)
    if (index%15 === 0) {
      result = numbers.splice(i,1).push("PingPong");
     debugger;
   } else if (index%5 === 0) {
        result = numberList.push("Pong");
    } else if (index %3 === 0) {
      result = numberList.push("Ping");
    } else {
      result = numberList.push(i);
 console.log();
  }
};

 };


$(document).ready(function() {
  $(".ping-pong").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#user-input").val());
    Numbers = pingPongFunction(input);
});
});
