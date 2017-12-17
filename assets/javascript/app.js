$(document).ready(function() {
    $(".container").hide();
    $("#timer").hide();


//CLICK START BUTTON -- CONTAINER SHOWS AND COUNTER STARTS
    $(".btn").click(function() {
        $(".container").fadeIn();
        $(this).hide();

            var number = 12;
            var intervalId;  

                function run() {
                    intervalId = setInterval(decrement, 1000);
                }

                function decrement() {
                    number--;

                $(".timer").html("<h3> Remaining Time: " + number + "</h3>");

                //  Once number hits zero...
                if (number === 0) {
                    stop();

                 //  Alert the user that time is up.
                    $(".container").hide();
                    result();

                    }
                  }

                 //  The stop function
                function stop() {
                    clearInterval(intervalId);
                }

               //  Execute the run function.
                run();
  
    });

//QUESTIONS AND ANSWERS 
    var answers = ["c", "d", "a", "d", "b", "a", "d", "b", "c", "a"];
    var tot = answers.length;
    var correct = 0;
    var incorrect = 0;
    var notAnswered = 0;

    function getCheckedValue( radioName ) {
        var radios = document.getElementsByName( radioName ); // Get radio group by-name
        
        for(var y=0; y<radios.length; y++)
            if(radios[y].checked) return radios[y].value; // return the checked value
        }


    function result() {

            for (var i = 0; i < tot; i++) {
                if (getCheckedValue("q" +i) === answers[i]) {
                    correct++;
                    $("#results").html("Correct Answers: " + correct);

                } else if (getCheckedValue("q" +i) !== answers[i]) {
                    incorrect++;
                    $("#results").html("Incorrect Answers: " + incorrect);

                } else {
                    notAnswered++;
                     $("#results").html("Unanswered: " + notAnswered);
                }
            }
        }
});
   