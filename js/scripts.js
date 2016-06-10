
var pingPongFunction = function(userInput) {
  var answerArray = [];

  for (index = 1; index <= userInput; index ++) {
    answerArray.push(index);
  }

  for (index = 0; index <= answerArray.length; index ++) {
    var divisiableNum = answerArray.length;
    for (i = divisiableNum; i > index; i--) {
      if (answerArray[i] %15 === 0) {
      answerArray.splice(i, 1, "PingPong");
    } else if (answerArray[i] %5 === 0) {
      answerArray.splice (i, 1, "Pong");
    } else if (answerArray[i] %3 === 0) {
      answerArray.splice (i, 1, "Ping");
    }
    }
    return answerArray;
  };
};


$(document).ready(function() {
  $(".ping-pong").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#user-input").val());
    answerArray = pingPongFunction(input);
    answerArray.forEach (function(number){
      $("ul#result-list").append("<li>" + number + "</li>");
    });
  });
});
