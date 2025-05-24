//@ts-nocheck

const contactForm = document.getElementById('contactForm');
const nameElement = contactForm?.querySelector('#name');
const email = contactForm?.querySelector('#email');
const message = contactForm?.querySelector('#message');
const feedback = document.querySelector('#feedback');

// Simple email pattern
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

contactForm?.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const nameValue = nameElement.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  // const userInfo = {
  //   name: nameValue,
  //   email: emailValue,
  //   message: messageValue,
  // };

  // validation
  if (nameValue === '' || emailValue === '' || messageValue === '') {
    feedback.textContent = 'Please fill in all fields.';
    feedback.style.color = '#d32f2f';
    return;
  }

  if (!emailPattern.test(emailValue)) {
    feedback.textContent = 'Please enter a valid email.';
    feedback.style.color = '#d32f2f';
    return;
  }

  if (messageValue.length < 10) {
    feedback.textContent = 'Message should be atleast 10 characters.';
    feedback.style.color = '#d32f2f';
    return;
  }

  // if all the validation pass
  feedback.textContent = `Thank you, ${nameValue}! Your message has been sent.`;
  feedback.style.color = '#388e3c';

  contactForm?.reset();
}
