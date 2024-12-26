document.getElementById('ContactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.querySelector('input[name="name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const phone = document.querySelector('input[name="phone"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d+$/;

    if (!name) {
        alert("Παρακαλώ εισάγετε το Ονοματεπώνυμό σας.");
        return;
    }

    if (!email) {
        alert("Παρακαλώ εισάγετε τη διεύθυνση email σας.");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Παρακαλώ εισάγετε μια έγκυρη διεύθυνση email.");
        return;
    }

    if (!phone) {
        alert("Παρακαλώ εισάγετε τον αριθμό τηλεφώνου σας.");
        return;
    }

    if (!phonePattern.test(phone)) {
        alert("Παρακαλώ εισάγετε έναν έγκυρο αριθμό τηλεφώνου.");
        return;
    }

    if (!message) {
        alert("Παρακαλώ εισάγετε το μήνυμά σας.");
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