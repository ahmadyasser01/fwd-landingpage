/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * highlights section in viewport upon scrolling.
 *  and scroll to top upon clicking on top button
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * 
 *
*/

/**
 * Define Global Variables
 *  
*/
var navBarList = document.getElementById('navbar__list');
let sections = document.querySelectorAll('section');
let newFrag = document.createDocumentFragment();
var isScrolling;
const backToTop = document.getElementById('back-top');



/**
 * End Global Variables
 * Start Helper Functions
 *
*/

sections[0].classList.remove('your-active-class') // remove the active class from first section 

let createLi = (section, frag) => {
    const secName = section.getAttribute('data-nav');
    const newLi = document.createElement('li');
    const newAnchor = document.createElement('a');
    const secNameNode = document.createTextNode(secName);

    newAnchor.classList.add('menu__link');
    newAnchor.style.cursor = "pointer";
    // listener to click on the links of nav bar to scroll to the target sec
    newAnchor.addEventListener('click', () => {
        section.scrollIntoView({ behavior: 'smooth' });
    });


    newAnchor.appendChild(secNameNode);
    newLi.appendChild(newAnchor);
    frag.appendChild(newLi); // append to frag
}

//helper method to check if this section currently in the view or not
let isInView = (section) => {
    const domRect = section.getBoundingClientRect();
    return (domRect.top <= 250 && domRect.top >= -50)
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
let buildNav = () => {
    sections.forEach(section => createLi(section, newFrag));
    navBarList.appendChild(newFrag);
}


buildNav();

// Add class 'active' to section when near top of viewport
function addActiveClass() {

    window.clearTimeout(isScrolling);

    for (let i = 0; i < sections.length; ++i) {
        const activeLink = navBarList.getElementsByTagName('li')[i].getElementsByTagName('a')[0];
        if (isInView(sections[i])) {
            sections[i].classList.add("your-active-class");
            const secNumber = sections[i].getAttribute('data-nav');
            activeLink.classList.add('active-link');
            console.log(secNumber);

        }
        else {
            sections[i].classList.remove("your-active-class");
            activeLink.classList.remove('active-link');

        }
    }
}

/**
 * End Main Functions
 * Begin Events
 *
*/


// scrolling event to trigger active class
window.addEventListener('scroll', () => {
    window.clearTimeout(isScrolling);
    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(addActiveClass(), 50);
});

// back to top button functionality 
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
        backToTop.style.display = "block";
    else
        backToTop.style.display = "none";
})

//adding function of scroll to top button
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
})



