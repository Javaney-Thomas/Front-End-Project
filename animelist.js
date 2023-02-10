const body = document.body//method to add elements to the body
const div = document.createElement("div")
//terms.setAttribute('id','div');
div.textContent = "Launch To WeebDom"
body.append(div)

const button = document.getElementById('button')
console.log(button)
button.addEventListener("click", () => {
console.log("search")
})

const userAction = async () => {
  const response = await fetch('http://example.com/movies.json');
  const myJson = await response.json(); //extract JSON from the http response
  // do something with myJson
}
document.getElementById("content").setAttribute("align", "center");
document.getElementById("buttonwrap").setAttribute("align", "center");
document.getElementById("button").setAttribute("align", "center");

//I want to add a searchbar in the middle of the page
//Use a click event on it
//Put in my api
//Should pull up suggesstions, so thats a library
//Show a preview of the animes
//Should load the selected anime on the page without refreshing 
// document.querySelectorAll('content').firstElementChild;
// firstElementChild.classList.add('yes')
//let elements = document.getElementsByClassName('formList');
//const div = document.querySelector('div')
//div.classList.add("new-class")

//const collection = document.getElementsByClassName("minorP");
//collection[0].innerHTML = ;




// const conTenty = document.querySelector('.content')
// const heroIc = document.querySelector('.hero')
// // //const hero = document.querySelector('.hero')
// div.innerText = "We gonna find the one piece"
// // //console.log(div.innerText)



