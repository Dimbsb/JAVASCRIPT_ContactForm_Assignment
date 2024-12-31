document.getElementById('ContactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.querySelector('input[name="name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const phone = document.querySelector('input[name="phone"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d+$/;

    if (!name) {
        alert("Please enter your name.");
        return;
    }

    if (!email) {
        alert("Please enter your email address.");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (phone && !phonePattern.test(phone)) {
        alert("Please enter a valid phone number.");
        return;
    }

    if (!message) {
        alert("Please enter your message.");
        return;
    }

    document.getElementById("confirmName").textContent = name;
    document.getElementById("confirmEmail").textContent = email;
    document.getElementById("confirmPhone").textContent = phone;
    document.getElementById("confirmMessage").textContent = message;
    
    document.getElementById("confirmationModal").style.display = "flex";

    document.getElementById("confirmSend").addEventListener("click", function() {
        const mailtoLink = `mailto:${email}?subject=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0APhone:%20${encodeURIComponent(phone)}%0AMessage:%20${encodeURIComponent(message)}`;
        window.location.href = mailtoLink;
        document.getElementById("confirmationModal").style.display = "none";
    });

    document.getElementById("cancelSend").addEventListener("click", function() {
        document.getElementById("confirmationModal").style.display = "none";
        alert("You canceled the email submission.");
    });
});