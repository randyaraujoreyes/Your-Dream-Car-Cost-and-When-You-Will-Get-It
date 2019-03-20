$("button").click(function() {
    var color= $(".AnswerOne").val();
     var brand= $(".AnswerTwo").val();
    var number=$(".AnswerThree").val(); 
   number= 10 + parseInt(number);
   $("h1").text("You'll be able to get a " + color + " "+ brand + " when you're " + number + " years old" );
   
});
