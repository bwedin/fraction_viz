function validateForm() {
    var numer = document.forms["myForm"]["numer"].value;
  	var denom = document.forms["myForm"]["denom"].value;
  	var mod = document.forms["myForm"]["mod"].value;
    if (numer == (null || "") || numer < 1 ||
         denom == (null || "") || denom < 1 ||
         mod == (null || "") || mod < 1) {
        alert("All fields must be filled out with positive integers");
        return false;
    }
  	if (denom <= numer) {
        alert("Please make numerator less than the denominator (for aesthetic reasons)");
        return false;
    }
    return true;
}
