//@ts-nocheck

const contactForm = document.getElementById('contactForm');

if (contactForm) {
  const fields = {
    name: contactForm?.querySelector('#name'),
    email: contactForm?.querySelector('#email'),
    message: contactForm?.querySelector('#message'),
  };
  const errors = {
    name: contactForm?.querySelector('#nameError'),
    email: contactForm?.querySelector('#emailError'),
    message: contactForm?.querySelector('#messageError'),
  };

  const feedbackElement = document.querySelector('#feedback');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Attach event listener
  contactForm?.addEventListener('submit', handleSubmit);
  fields.name.addEventListener('input', validateName);
  fields.email.addEventListener('input', validateEmail);
  fields.message.addEventListener('input', validateMessage);

  function validateName() {
    const value = fields.name.value.trim();
    if (value === '') {
      errors.name.textContent = 'Name is required';
      return false;
    } else {
      errors.name.textContent = '';
      return true;
    }
  }
  function validateEmail() {
    const value = fields.email.value.trim();
    if (!emailPattern.test(value)) {
      errors.email.textContent = 'Please enter a valid email.';
      return false;
    } else {
      errors.email.textContent = '';
      return true;
    }
  }
  function validateMessage() {
    const value = fields.message.value.trim();

    if (value.length < 10) {
      errors.message.textContent = 'Message should be atleast 10 characters.';
      return false;
    } else {
      errors.message.textContent = '';
      return true;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    let isNameValid = validateName();
    let isEmailValid = validateEmail();
    let isMessageValid = validateMessage();

    const isValid = isNameValid && isEmailValid && isMessageValid;

    // validation
    if (isValid) {
      const userInfo = {
        name: fields.name.value,
        email: fields.email.value,
        message: fields.message.value,
      };
      console.log(userInfo);

      // if all the validation pass
      feedbackElement.textContent = `Thank you, ${userInfo.name}! Your message has been sent.`;
      feedbackElement.style.color = '#388e3c';
      contactForm?.reset();
    } else {
      feedbackElement.style.color = '#d32f2f';
      feedbackElement.textContent = 'Please fix the errors above';
    }
  }
}
