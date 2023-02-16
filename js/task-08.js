const form = document.querySelector(".login-form");

// form.addEventListener("submit", handleSubmitWithFormData);

// function handleSubmitWithFormData(event) {
//   event.preventDefault();

//   const { elements } = event.currentTarget;
//   //   console.dir(elements);

//   const emailInput = elements.email;
//   const passwordInput = elements.password;

//   if (emailInput.value === "" || passwordInput.value === "") {
//     alert("Fill all fields");
//     return;
//   }
//   const data = {
//     [emailInput.name]: emailInput.value,
//     [passwordInput.name]: passwordInput.value,
//   };

//   console.log(data);

//   form.reset();
// }
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  const submittedData = {};
  let formInputIsEmpty = false;
  formData.forEach((value, key) => {
    // console.log("value: ", value);
    // console.log("key: ", key);
    if (value === "") {
      formInputIsEmpty = true;
    }
    submittedData[key] = value;
  });
  if (formInputIsEmpty) {
    alert("Fill all fields");
    return;
  }
  console.log(submittedData);
  form.reset();
  // console.log(form.elements);
});
