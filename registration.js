$(document).ready(function () {
    $("form").submit(function (event) {
        $(".form-group").removeClass("has-error");
        $(".help-block").remove();
        var formData = {
            name: $("#name").val(),
            email: $("#email").val(),
            password: $("#password").val(),
            password2: $("#password2").val(),
        };
        let is_valid = validate(formData);
        if (is_valid){
            $.ajax({
                type: "POST",
                url: "registration.php",
                data: formData,
                dataType: "json",
                encode: true,
            }).done(function (data) {
                console.log(data);
                if (!data.success) { // Error

                    if (data.errors.email) { // If email already exists
                        $("#email-group").addClass("has-error");
                        $("#email-group").append('<div class="help-block">' + data.errors.email + "</div>");
                    }

                } else { // Success
                    $("form").html('<script></script>'+'<div class="alert alert-success">' + data.message + "</div>");
                    window.location.href = '/Registration_and_Login/Welcome_page.php';
                 }
            })
                .fail(function (data) {
                    $("#message-group").html('<div class="alert alert-danger">Could not reach server, please try again later.</div>');
                });
        }
        event.preventDefault();

    });

});

function validate(formData){
    let valid = true;
    if (formData["name"] === ''){
        $("#name-group").addClass("has-error");
        $("#name-group").append('<div class="help-block">' + "Please Enter your Name" + "</div>");
        valid = false;
    }
    if (formData["email"] === ''){
        $("#email-group").addClass("has-error");
        $("#email-group").append('<div class="help-block">' + "Please Enter your Email" + "</div>");
        valid = false;
    }
    if (formData["password"] === ''){
        $("#password-group").addClass("has-error");
        $("#password-group").append('<div class="help-block">' + "Please Enter your Password" + "</div>");
        valid = false;
    }
    if (formData["password2"] === '' || formData["password2"].localeCompare(formData["password"]) ){
        $("#password2-group").addClass("has-error");
        $("#password2-group").append('<div class="help-block">' + "Please Enter your Password agian to confirm" + "</div>");
        valid = false;
    }
    return valid
}
