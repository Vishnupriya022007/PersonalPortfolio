
// ABOUT SECTION TABS

function opentab(tabname, event) {

    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    // Remove active class from all tabs
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }

    for (var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
    }

    // Activate selected tab
    event.currentTarget.classList.add("active-link");

    document.getElementById(tabname).classList.add("active-tab");
}


// MOBILE MENU

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}


// CLOSE MENU AFTER CLICKING A LINK

var menuLinks = document.querySelectorAll("#sidemenu a");

menuLinks.forEach(function(link) {

    link.addEventListener("click", function() {
        closemenu();
    });

});



// CONTACT FORM (BACKEND CONNECTION)

var contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    var name = document.querySelector(
        "input[name='name']"
    ).value;

    var email = document.querySelector(
        "input[name='email']"
    ).value;

    var message = document.querySelector(
        "textarea[name='message']"
    ).value;

    var formMessage = document.getElementById("form-message");

    try {

        const response = await fetch("http://localhost:5000/contact", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })

        });

        const result = await response.json();

        formMessage.innerText = result.message;

        if (response.ok) {
            contactForm.reset();
        }

    } catch (error) {

        formMessage.innerText =
            "Unable to connect to the server. Please try again.";

        console.log(error);

    }

});

