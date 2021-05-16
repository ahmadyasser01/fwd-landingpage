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


/**
 * End Global Variables
 * Start Helper Functions
 *
*/

let createLi = (section, frag) => {
    const secName = section.getAttribute('data-nav');
    const newLi = document.createElement('li');
    const newAnchor = document.createElement('a');
    const secNameNode = document.createTextNode(secName);

    newAnchor.classList.add('menu__link');
    newAnchor.appendChild(secNameNode);
    newLi.appendChild(newAnchor);
    frag.appendChild(newLi);
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


