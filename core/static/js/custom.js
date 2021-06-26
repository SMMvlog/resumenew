console.log("its working")
function check(){
$("#error_name").hide();
$("#error_email").hide();
$("#error_subject").hide();
$("#error_message").hide();
var name = $("#name").val();
var email = $("#email").val();
var subject = $("#subject").val();
var message = $("#message").val();
           if(name==""){
                  $("#error_name").css("color","red");
                  $("#error_name").text("Pleas enter Full Name!!");
                  $("#name").focus();
                  $("#error_name").show();
                  return false;
           }else{
              var pattern = /^[A-Z]+[a-z]+\s[A-Z]+[a-z]+$/;
              if (!pattern.test(name)){
                  $("#error_name b").css("color","red");
                  $("#error_name").text("Please enter full name in formate like: Mehboob Shaikh");
                  $("#name").focus();
                  $("#error_name").show();
                     return false;
              }
           }
           if(email==""){
                  $("#error_email").css("color","red");
                  $("#error_email").text("Please enter email!!");
                  $("#error_email").show();
                  $("#email").focus();
              return false;
       }else{
          var pattern = /^[a-zA-Z0-9_\.\-]{2,}@[a-z]{3,15}\.[a-z\.]{2,5}$/;
          if (!pattern.test(email)){
              $("#error_email").css("color","red");
              $("#error_email").text("Please enter correct email");
              $("#error_email").show();
              $("#email").focus();
            return false;
          }
       }

       if(subject==""){
         $("#error_subject").css("color","red");
         $("#error_subject").text("Please enter subject!!");
         $("#error_subject").show();
         $("#subject").focus();
     return false;
}else{
 var pattern = /[a-zA-Z0-9_\.\-@&*%$#\s]{10,}/;
 if (!pattern.test(subject)){
     $("#error_subject").css("color","red");
     $("#error_subject").text("ensure that length should be minimum 10");
     $("#error_subject").show();
     $("#subject").focus();
   return false;
 }
}

if(message==""){
   $("#error_message").css("color","red");
   $("#error_message").text("Please enter message!!");
   $("#error_message").show();
   $("#message").focus();
return false;
}else{
var pattern = /[a-zA-Z0-9_\.\-@&*%$#\s]{15,}/;
if (!pattern.test(message)){
$("#error_message").css("color","red");
$("#error_message").text("ensure that length should be minimum 15");
$("#error_message").show();
$("#message").focus();
return false;
}
}
return true;
       }  
