document.addEventListener("DOMContentLoaded", function(){
    
    const inputname = document.getElementById("name");
    const inputemail = document.getElementById("email");
    const inputmessage = document.getElementById("message");
    const errorMessage = document.getElementById("errormessage");
    const submitbtn = document.getElementById("btn");

    const contactbtn = document.getElementById("contactbtn");
    const contactme = document.getElementById("contactme");
    const contact2 = document.getElementById("contact2");
    const main = document.getElementById("main");
    const aboutme = document.getElementById("aboutme");
    const aboutmebtn = document.getElementById("aboutmebtn")

      function showError(message){
        errorMessage.textContent = message;
        errorMessage.style.color ="red";

        setTimeout(() => {
            errorMessage.textContent="";
        }, 2000);
      }

  function isValidEmail(email) {
     return email.includes("@") && (email.endsWith(".com") || email.endsWith(".net"));
  }
  
  submitbtn.addEventListener("click", function (event) {
    event.preventDefault();

    const email = inputemail.value.trim();
    const name = inputname.value.trim();
    const message = inputmessage.value.trim();

    if(!email || !name || !message){
        showError("please fill all fields!");
    }
    else if(!isValidEmail(email)){
        showError("Enter a valid email!");
    }
    else {
        errorMessage.textContent = "Sent Successful";
        errorMessage.style.color="green";
    }
  });


  contactbtn.addEventListener("click", function(event) {
    event.preventDefault(); // Stop page refresh

    if (main.style.display === "block") {
      main.style.display = "none";
      contactme.style.display = "block";
      contactbtn.textContent = "Home";
    }

  else {
      main.style.display = "block";
      contactme.style.display = "none";
      contactbtn.textContent = "ContactMe";
    }
  });
  

    contact2.addEventListener("click", function(e) {
    e.preventDefault(); // Stop page refresh

    if (getComputedStyle(main).display === "block") {
      main.style.display = "none";
      contactme.style.display = "block";
      contact2.textContent = "Home";
    } else {
      main.style.display = "block";
      contactme.style.display = "none";
      contact2.textContent = "ContactMe";
    }
  });

  aboutmebtn.addEventListener("click", function (event){
   event.preventDefault();

  // If Main is shown, hide it and show About Me
  if (getComputedStyle(main).display === "block") {
    main.style.display = "none";
    aboutme.style.display = "block";
    aboutmebtn.textContent = "Back"
  }
   else {
    main.style.display = "block";
    aboutme.style.display = "none";
    aboutmebtn.textContent = "AboutMe"
   }
  });

});
