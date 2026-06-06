function validateForm() {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let conformPassword = document.getElementById("conform-password").value;
  let genderChecked = document.querySelector('input[name="gender"]:checked');
  let buttonType = document.getElementById("submit").type;

  if (name === "" || email === "" || password === "" || conformPassword === "" || !genderChecked || buttonType === "") {
    swal("Error!", "Sab fields fill karo!", "error");
    return false;
  }
  if (password !== conformPassword) {
    swal("Error!", "Password match nahi ho raha!", "error");
    return false;
  }
  if (password.length < 8) {
    swal("Error!", "Password kam se kam 8 characters ka hona chahiye!", "error");
    return false;
  }

  if (buttonType === "submit") {
    swal("Success!", "Registration ho gaya!", "success");
    return false;
  }
}

