    //run document,ready
$(document).ready(function(){

      //hide questions and results untill player start game
        $("#result").hide();
        $(".questions").hide();
        $("#image").hide();
        //start game 
        $("#start").click(function(){
                $(".questions").show();
                $("h1").hide();
                $("h5").hide();
                $('.container').css("background-color","white")
            });
            $("#start2").click(function(){
               location.reload();

            })
     
            $("#start").click( function(){
                $("#start").hide();
            // Game timer count down 


        var counter =30;
              // set timer for 30 min
     setInterval(function() {
                  counter--;
                   if (counter >= 0) {
                     $("#timer").text("Time Remaining:"+counter)
                                      }

                        //Game results 
                   if (counter === 0) {
                        $("#result").show();
                        $("h1").show();
                        $("h1").css("color","yellowgreen");
                        $("h1").css("text-align","left")
                        $("body").css("background-color","black");
                        $('.jambotron').css("background-color","black");
                        $("body").css("background-image","none");
                        $('.main-container').css("background-color","black");
                        $("#timer").hide();
                         $("#start2").show();
                      $(".questions").hide();
                      clearInterval(counter);
                    }
                  }, 1000);
             });


             correct=0;
             wrong=0;
             $(function () {
                $('input[name="q1"]').on('click', function() {

                    unanswered=10-(correct+wrong)-1;

                    if(unanswered>=0){
                      unanswered=unanswered;
                    }
                    else{unanswered=0}


                    $(".unanswered").text("Unanswered:"+unanswered)
                    if ($(this).val() == 'ans') {
                        correct++;
                        $(".exp").text("Correct Answers:"+correct);
                    } else {
                        wrong++;
                        $('.red').text("Incorrect Answers:"+wrong);
                        console.log(correct)
                        
                    }
                    
                })
                
                });
                // When the user scrolls the page, execute myFunction 
        window.onscroll = function() {myFunction()};

        function myFunction() {
          var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
          var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          var scrolled = (winScroll / height) * 100;
          document.getElementById("myBar").style.width = scrolled + "%";
        }

    });