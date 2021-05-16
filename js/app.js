/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *  
*/
const navBarList = document.getElementById('navbar__list');
let sections = document.querySelectorAll('section');
let newFrag = document.createDocumentFragment();
var isScrolling;



/**
 * End Global Variables
 * Start Helper Functions
 *
*/
sections[0].classList.remove('your-active-class') // remove the active class from first section 

let createLi = (section, frag) => {
    const secName = section.getAttribute('data-nav');
    const secId = section.getAttribute('id');
    const newLi = document.createElement('li');
    const newAnchor = document.createElement('a');
    const secNameNode = document.createTextNode(secName);

    newAnchor.classList.add('menu__link');
    newAnchor.setAttribute('href', `#${secId}`);
    newAnchor.appendChild(secNameNode);
    newLi.appendChild(newAnchor);
    frag.appendChild(newLi);
}

let isInView = (section) => {
    const domRect = section.getBoundingClientRect();
    return (domRect.top >= 0 && domRect.top <= 150 || domRect.top <= 0 && domRect.top >= -200)



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

    for (section of sections) {
        if (isInView(section)) {
            section.classList.add("your-active-class");
            console.log(section.getAttribute('id'));

        }
        else
            section.classList.remove("your-active-class");
    }
}

// Scroll to anchor ID using scrollTO event

//window.scrollTo({ top: 400, behavior: 'smooth' })

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

document.addEventListener('scroll', () => {
    window.clearTimeout(isScrolling);
    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(addActiveClass(), 100);
});




