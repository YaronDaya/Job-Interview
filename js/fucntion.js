/* check input not empty and check if email is ok
if not alert msg */

function validateForm() {
  var fields = ["name", "email", "message"];
  var i,
    l = fields.length;
  var fieldname;
  for (i = 0; i < l; i++) {
    fieldname = fields[i];
    var element = document.getElementById(fieldname);
    console.log(element);
    if (!element) {
      alert(" Error : the field Does not exist");
      return false;
    } else if (document.getElementById(fieldname).value === "") {
      alert(fieldname + " Error : Can't be empty");
      return false;
    }
  }
  var email = document.getElementById("email").value;
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (re.test(email)) {
    return true;
  } else {
    alert("Please check that email is good");
    return false;
  }
}

/* scroll the side panel */
window.onscroll = function() {
  myFunction();
};

function myFunction() {
  var x = document.body.scrollTop;
  console.log(x);
  if (
    document.body.scrollBottom > 150 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("right").className = "sticky";
  } else {
    document.getElementById("right").className = "rightMain";
  }
}
