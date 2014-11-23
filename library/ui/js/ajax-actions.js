//contact form
$(document).ready(function () {
    $(function () {
        $("#send-btn").click(function () {
        	var has_error = 0 ;
            var name = $("#name").val();
            var subject = $("#subject").val();
            var message = $("#message").val();
            var email = $("#email").val();
            var atpos = email.indexOf("@");
            var dotpos = email.lastIndexOf(".");
            var dataString = '&name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;

            $('input').focus(function () {
                $(this).css({
                    "background-color": "#fff"
                });
            });
            $('textarea').focus(function () {
                $(this).css({
                    "background-color": "#fff"
                });
            });

            if ($("#name").val().length == 0) {
           		has_error = 1 ;
                $('#name').css({
                    "background-color": "#ffd6d6"
                });
            }
            if($("#email").val().length == 0) {
            has_error = 1 ;
                $('#email').css({
                    "background-color": "#ffd6d6"
                });
            }
            if(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
            has_error = 1 ;
                $('#email').css({
                    "background-color": "#ffd6d6"
                });
            }
            if($("#subject").val().length == 0) {
            has_error = 1 ;
                $('#subject').css({
                    "background-color": "#ffd6d6"
                });
            }
            if($("#message").val().length == 0) {
            has_error = 1 ;
                $('#message').css({
                    "background-color": "#ffd6d6"
                });
            } 
            if(has_error == 0 ) {
               $.ajax({
                   type: "POST",
                    url: "contact.php",
                    data: dataString,
                    success: function () {
                        $('.success').css({
                            "display": "inline-block"
                        });
                        $('input[type=text],textarea').val('');
                    }
                });
            }
            return false;
        });
    });
});