
// 1// accessing Element
// getElemntById();
// querySelector();
// getElemntByClassName();


// // modify the element.
// .textContain
// .innerHtml

// //change the attribute
// // we can modiy src, href and alt using
// .setAttribut() 
// .style


// // creating and removing elemnt
// createElemnt();
// appendChild();
// removeChild()

// document.setAttribute(nameOfAttribute, value)


document.getElementById('colorButton').addEventListener('click',function(){
  const colorBox = document.getElementById('colorBox')
  colorBox.style.backgroundColor = colorBox.style.backgroundColor === "lightblue" ? "red" : "lightblue"
})
