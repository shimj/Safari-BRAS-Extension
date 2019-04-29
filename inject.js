//document.getElementsByClassName("systemTitle").innerHTML = "New text!"

//document.getElementById('username').value="MG1722012"
$('#username').attr("placeholder", "Username");
$('#password').attr("placeholder", "Password");
$('#loginBtn').html("Login");
$('#savepwd').html("Remember Password");
$('.systemTitle').html("Authentication System");
$('.systemENTitle').html("网络接入认证系统");
$('.inputdiv').keypress(function (e) {
  if (e.which == 13) {
    $('#loginBtn').trigger('click');
    return false;    //<---- Add this line
  }
});
