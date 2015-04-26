function validateForm() {
    var numer = parseInt(document.forms["myForm"]["numer"].value);
  	var denom = parseInt(document.forms["myForm"]["denom"].value);
  	var mod = parseInt(document.forms["myForm"]["mod"].value);
    if (numer == (null || "") || numer < 1 ||
         denom == (null || "") || denom < 1 ||
         mod == (null || "") || mod < 1) {
        alert("All fields must be filled out with positive integers");
        return 0;
    }
  	if (denom <= numer) {
        alert("Please make numerator less than the denominator (for aesthetic reasons)");
        return 0;
    }
    return 1;
}
