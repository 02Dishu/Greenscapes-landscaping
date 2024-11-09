
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting immediately

  // Get form field values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Basic validation
  if (name && email && message) {
    alert('Thank you for your message, ' + name + '! We will get back to you soon.');
    // Here you would normally send the data to the server or email system
    // Reset form fields
    document.getElementById('contact-form').reset();
  } else {
    alert('Please fill in all fields.');
  }
});