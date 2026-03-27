// Select the form
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    // Show confirmation before submitting
    const name = form.querySelector('input[name="Full Name"]').value;
    const workshop = form.querySelector('select[name="Workshop"]').value;

    if (!confirm(`Hello ${name}! Are you sure you want to register for the ${workshop} workshop?`)) {
        e.preventDefault(); // Stop submission if canceled
    }
});
