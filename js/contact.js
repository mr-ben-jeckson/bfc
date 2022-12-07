// Sending Email with Email.js
function sendMail() {
    const serviceID = "service_txk4gri";
    const templateID = "template_uoajl6e";
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    emailjs
        .send(serviceID, templateID, params)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                alert("message was successfully sent");
            }
        ).catch((err) => console.log(err));
};

