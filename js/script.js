

// question 1

const cat = { complain: "Meow!"};
console.log(cat.complain);

// question 2

const heading = document.querySelector("h3");
heading.innerText = "Updated heading";

// question 3

heading.style.fontSize = "2em";

// question 4

heading.className = "subheading";


// question 5

const paragraphs = document.querySelectorAll("p");

console.dir(paragraphs);

for (let i = 0; i < paragraphs.length; i++){
    console.dir(paragraphs[i].innerHTML);
    paragraphs[i].style.color = "red";
}

// question 6

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = `<p> New Paragraph </p>`;
resultsContainer.style.backgroundColor = "yellow";

// question 7

const cats = [
    {
        name: "Blob",
        age: 10,
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21,
    },
];

function animals(list){

    console.log(list);

}

animals();
// Sorry, didn't understand the question fully and ran out of time. 
// An explanation would be nice.

// question 8

let catValue = document.querySelector(".cat-container");

console.log(catValue);

let html = "";

for (let i = 0; i < cats.length; i++){

let age = "Age unknown";

if (cats[i].age) {
   age = cats[i].age;
}


html += `<div>
        <h5> ${cats[i].name}</h5>
        <p> ${cats[i].age}</p>
        </div>`;

console.log(html);
}

catValue.innerHTML = html;



 
