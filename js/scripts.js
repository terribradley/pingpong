

var pingpong = function(userInput) {
  var answerArray = [];

  for (index = 1; index <= userInput; index ++) {
    answerArray.push(index);
  }
  for (index = 0; index <= answerArray.length; index ++) {
      if ((answerArray[index] % 15) === 0) {
      answerArray[index] = "PingPong";
    } else if ((answerArray[index] % 5) === 0) {
      answerArray[index] = "Pong";
    } else if ((answerArray[index] % 3) === 0) {
      answerArray[index] = "Ping";
      // debugger;
    } else {
      answerArray[index] = index;
    }
  };
  return answerArray;
};


$(document).ready(function() {
  $(".ping-pong").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#user-input").val());
    var answerArray = pingpong(input);
    $("ul#result-list").empty()
    answerArray.forEach(function(number) {
      $("ul#result-list").append("<li>" + number + "</li>");
    });
  });
});
