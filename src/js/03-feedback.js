import _ from 'lodash.throttle';

var email = document.querySelector("[name='email']");
var message = document.querySelector("[name='message']");
var form = document.getElementsByClassName('feedback-form')[0];

var object = {
  email: '',
  message: '',
};

const updateObject = function (event) {
  if (event.target == email) {
    object.email = event.target.value;
    object.message = message.value;
  } else if (event.target == message) {
    object.email = email.value;
    object.message = event.target.value;
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(object));
};

if (localStorage.getItem('feedback-form-state') != null) {
  email.value = JSON.parse(localStorage.getItem('feedback-form-state')).email;
  message.value = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).message;
} else {
  email.value = '';
  message.value = '';
}

const removeData = function (event) {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  email.value = '';
  message.value = '';
};

form.addEventListener('input', _(updateObject, 500));
form.addEventListener('submit', removeData);
