// Selectors -  .class, #id, tagname

// Get an element by id
const title = document.getElementById("chem");
console.log(title);

//Get element by classname
const titles = document.getElementsByClassName("title");
console.log(titles);

// Get element by tagname
const navbar = document.getElementsByTagName("nav");
console.log(navbar);

// Query Selector
const query = document.querySelector(".title");
console.log(query);

//Query Selector ALL
const queries = document.querySelectorAll(".title");
console.log(queries);

title.style.backgroundColor = 'yellow';
for(i=0; i<queries.length; i++){
    queries[i].style.fontSize = '30px';
}

const ul = document.querySelector('ul');
const li = document.createElement('li');
ul.append(li);

li.innerText="Computer Science";
li.setAttribute("class","title");
li.style.fontSize = '30px';
li.removeAttribute("class");
title.getAttribute("class");
li.classList.add("title");
li.classList.remove("title");
console.log(li.classList.contains("title"));
li.remove();

//Parents, Children, Siblings

console.log(ul.parentNode);
console.log(ul.parentElement);
console.log(ul.childNodes);
console.log(ul.children);
console.log(ul.firstChild);
console.log(ul.firstElementChild);
console.log(ul.lastChild);
console.log(ul.lastElementChild);

ul.childNodes[1].style.backgroundColor = 'rgb(166, 231, 242)';

console.log(ul.previousSibling);
console.log(ul.previousElementSibling);
console.log(ul.nextSibling);
console.log(ul.nextElementSibling);

// Event Listeners
const phyButton = document.querySelector('#phy');

const alertBtn = () => alert('Physics selected!');

phyButton.addEventListener("click",alertBtn);

const bioButton = document.querySelector('#bio');

const changeBG = () => bioButton.style.backgroundColor = 'rgb(252, 252, 141)';

bioButton.addEventListener("mouseover",changeBG);

const showChem = document.querySelector('.chem-more');

const hidChem = document.querySelector('.Chemistry');

const showContent = () => {
    if(hidChem.style.display == 'none') hidChem.style.display = 'flex';
    else hidChem.style.display = 'none'
}

showChem.addEventListener("click",showContent);