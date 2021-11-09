$(document).ready(function () {
    $("form").submit(function (event) {
        $(".form-group").removeClass("has-error");
        $(".help-block").remove();
        var formData = {
            email: $("#email").val(),
            password: $("#password").val(),
        };
        let is_valid = validate(formData);
        if (is_valid){
            $.ajax({
                type: "POST",
                url: "Login.php",
                data: formData,
                dataType: "json",
                encode: true,
            }).done(function (data) {
                if (!data.success) { // Error

                    if (data.errors.email) {
                        $("#email-group").addClass("has-error");
                        $("#email-group").append('<div class="help-block">' + data.errors.email + "</div>");
                    }

                    if (data.errors.password) {
                        $("#password-group").addClass("has-error");
                        $("#password-group").append('<div class="help-block">' + data.errors.password + "</div>");
                    }
                } else { // Success
                    $("form").html('<script></script>'+'<div class="alert alert-success">' + data.message + "</div>");
                    window.location.href = '/lab1_registration/Welcome_page.php';
                }
            })
                .fail(function (data) {
                    $("#message-group").html('<div class="alert alert-danger">Could not reach server, please try again later.</div>');
                });
        }
        event.preventDefault();

    });

});

function validate(formData) {
    let valid = true;

    if (formData["email"] === '') {
        $("#email-group").addClass("has-error");
        $("#email-group").append('<div class="help-block">' + "Please Enter your Email" + "</div>");
        valid = false;
    }
    if (formData["password"] === '') {
        $("#password-group").addClass("has-error");
        $("#password-group").append('<div class="help-block">' + "Please Enter your Password" + "</div>");
        valid = false;
    }

    return valid
}