
function changeMessage() {
    var messageElement = document.getElementById("message");
    messageElement.textContent = "Audi R8 one of the best";
  }

 
  function changeSliderBackground() {
    var colors = ["#b4132b", "#966f04", "#045f0c", "#0d248b"];
    var slider = document.querySelector(".slider");
    var newColor = colors[Math.floor(Math.random() * colors.length)];
    slider.style.backgroundImage = `linear-gradient(45deg, #222, ${newColor})`;
  }


  function toggleInfo() {
    var infoElement = document.getElementById("extraInfo");
    infoElement.style.display =
      infoElement.style.display === "none" ? "block" : "none";
  }

  document.getElementById("changeMessageBtn").onclick = changeMessage;
  document.getElementById("changeBackgroundBtn").onclick = changeSliderBackground;
  document.getElementById("toggleInfoBtn").onclick = toggleInfo;

 
  document
    .getElementById("registrationForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); 
      let isValid = true;

    
      document.querySelectorAll(".form-group").forEach((group) => {
        let input = group.querySelector("input");
        let error = group.querySelector(".error-message");
        if (!input || !error) return; 

   
        if (
          (input.name === "firstName" || input.name === "lastName") &&
          input.value.trim().length < 2
        ) {
          input.classList.add("error");
          error.style.display = "block";
          isValid = false;
          return;
        }

        if (input.type === "email") {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(input.value.trim())) {
            input.classList.add("error");
            error.style.display = "block";
            isValid = false;
            return;
          }
        }

        if (input.name === "phone") {
          const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
          if (!phoneRegex.test(input.value)) {
            input.classList.add("error");
            error.style.display = "block";
            isValid = false;
            return;
          }
        }

        if (input.name === "password") {
          const hasNumber = /\d/;
          if (
            input.value.length < 6 ||
            !hasNumber.test(input.value)
          ) {
            input.classList.add("error");
            error.style.display = "block";
            isValid = false;
            return;
          }
        }

      
        if (input.name === "age") {
          let ageVal = parseInt(input.value, 10);
          if (isNaN(ageVal) || ageVal < 18 || ageVal > 100) {
            input.classList.add("error");
            error.style.display = "block";
            isValid = false;
            return;
          }
        }

        if (
          input.type !== "radio" &&
          input.type !== "checkbox" &&
          input.value.trim() === ""
        ) {
          input.classList.add("error");
          error.style.display = "block";
          isValid = false;
          return;
        }

        input.classList.remove("error");
        error.style.display = "none";
      });

      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      if (password !== confirmPassword) {
        let group = document.getElementById("confirmPassword").parentElement;
        let error = group.querySelector(".error-message");
        document.getElementById("confirmPassword").classList.add("error");
        error.style.display = "block";
        isValid = false;
      }


      const maleRadio = document.querySelector('input[name="gender"][value="male"]');
      const femaleRadio = document.querySelector('input[name="gender"][value="female"]');
      if (!maleRadio.checked && !femaleRadio.checked) {
        let genderGroup = maleRadio.closest(".form-group");
        let genderError = genderGroup.querySelector(".error-message");
        genderError.style.display = "block";
        isValid = false;
      }

      const termsCheckbox = document.getElementById("terms");
      if (!termsCheckbox.checked) {
        let termsGroup = termsCheckbox.closest(".form-group");
        let termsError = termsGroup.querySelector(".error-message");
        termsError.style.display = "block";
        isValid = false;
      }


      if (isValid) {
        alert("Регистрация успешна!");
        document.getElementById("registrationForm").reset();
      }
    });


  const phoneInput = document.getElementById("phone");
  phoneInput.addEventListener("input", function () {

    let value = phoneInput.value.replace(/\D/g, "");


    if (value.startsWith("7")) {
      value = value.substring(1);
    }

    let formattedValue = "+7 ";

    if (value.length > 0) {
      formattedValue += "(" + value.substring(0, 3);
    }
    if (value.length >= 3) {
      formattedValue += ") " + value.substring(3, 6);
    }
    if (value.length >= 6) {
      formattedValue += "-" + value.substring(6, 8);
    }
    if (value.length >= 8) {
      formattedValue += "-" + value.substring(8, 10);
    }

    phoneInput.value = formattedValue;
  });