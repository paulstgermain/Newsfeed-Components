// This is the data we will be using, study it but don't change anything, yet.
import { gsap } from 'gsap';

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/




function menuMaker(arr){
  let menu = document.createElement('div');
  menu.classList.add('menu');

  let menuOptions = document.createElement('ul');

  arr.forEach(item => {
    let option = document.createElement('li');
    option.innerText = item;
    menuOptions.appendChild(option);
  })

  let menuButton = document.querySelector('.menu-button');
  let tl = gsap.timeline({ paused: true, reversed: true });
  tl.fromTo(menu, { position: 'relative', right: '350px', display: 'none' }, { position: 'fixed', left: '0', display: 'block', duration: 1});
  
  function toggleTween(tween){
    tween.reversed() ? tween.play() : tween.reverse();
  }


  menuButton.addEventListener('click', () => {
    // menu.classList.toggle('menu--open');
    toggleTween(tl);
  })

  menu.appendChild(menuOptions);

  return menu;
}

let header = document.querySelector('.header');
header.appendChild(menuMaker(menuItems));