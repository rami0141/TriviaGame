$(document).ready(function() {
    $(".container").hide();
    $("#timer").hide()


    $(".btn").click(function() {
        $(".container").fadeIn();
        $(this).hide()

    var number = 120;
    var intervalId;  

    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
      number--;

      //  Show the number in the #show-number tag.
      $(".timer").html("<h2> Remaining Time: " + number + "</h2>");

      //  Once number hits zero...
      if (number === 0) {
        stop();

        //  Alert the user that time is up.
        alert("Time Up!");
      }
    }

    //  The stop function
    function stop() {
      clearInterval(intervalId);
    }

    //  Execute the run function.
    run();

    
});
 
});    