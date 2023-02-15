const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmitWithFormData);

function handleSubmitWithFormData(event) {
  event.preventDefault();

  const { elements } = event.currentTarget;
  //   console.dir(elements);

  const emailInput = elements.email;
  const passwordInput = elements.password;

  if (emailInput.value === "" || passwordInput.value === "") {
    alert("Fill all fields");
    return;
  }
  const data = {
    [emailInput.name]: emailInput.value,
    [passwordInput.name]: passwordInput.value,
  };

  console.log(data);

  form.reset();
}
