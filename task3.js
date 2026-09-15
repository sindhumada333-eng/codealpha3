```javascript
// Mobile Menu

function toggleMenu() {

    let nav = document.getElementById("navLinks");

    nav.classList.toggle("active");

}


// Close mobile menu after clicking a link

let links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .getElementById("navLinks")
            .classList.remove("active");

    });

});
```
