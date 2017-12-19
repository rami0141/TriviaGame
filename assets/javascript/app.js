$(document).ready(function() {
    $(".container").hide();
    $("#timer").hide();
    $("#results").hide();
    $("footer").hide();


//CLICK START BUTTON -- CONTAINER SHOWS AND COUNTER STARTS
    $(".btn").click(function() {
        $(".container").fadeIn();
        $("footer").fadeIn();
        $(".dogs").hide();
        $(this).hide();

            var number = 100;
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
                    $(".container").hide();
                    result();
                    $("#results").fadeIn();

                    }
                  }

                 //  The stop function
                function stop() {
                    clearInterval(intervalId);
                }

               //  Execute the run function.
                run();
  
    });

    $("#done").click(function() {
        result();
        $(".container").hide();
        $("#results").fadeIn();
        $("footer").hide();

    })

//QUESTIONS AND ANSWERS 
    var answers = ["c", "d", "a", "d", "b", "a", "d", "b", "c", "a"];
    var correct = 0;
    var incorrect = 0;
    var notAnswered = 0;

    function getCheckedValue( radioName ) {
        var radios = document.getElementsByName( radioName ); // Get radio group by-name
        
        for(var y = 0; y < radios.length; y++) {
            if(radios[y].checked) return radios[y].value; // return the checked value
        }
    }


    function result() {

            for (var i = 0; i < answers.length; i++) {
                if (getCheckedValue("q" +i) === answers[i]) {
                    correct++;

                } else if (getCheckedValue("q" +i) !== answers[i]) {
                    incorrect++;
                    

                } else {
                    notAnswered++;
                }
            }
        }

        $("#results").html("Correct Answers: " + correct + "<br>");
        $("#results").append("Incorrect Answers: " + incorrect + "<br>");
        $("#results").append("Unanswered: " + notAnswered + "<br>");
});

   
   