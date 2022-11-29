function validate(inputText) {
  if (document.getElementById("email").value == "")
    alert("The input field is empty");

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (inputText.value.match(mailformat)) {
    alert("Valid email address!");
    document.form1.emailForm.focus();
    returntrue;
  } else {
    alert("Invalid email address!");
    document.form1.emailForm.focus();
    returnfalse;
  }
}
