// questions
// write the code necessary to do the following
// 1. Select the section with an id of container without using querySelector 
// 2. Select the section with an id of container using querySelector.
// 3. Select all of the list items with class of "second"
// 4. Select a list item with a class of third, but only the list item inside of the ol tag
// 5. Give the section with an id of container the text "Hello"
// 6. Add the class main to the div with a class of footer.
// 7. Remove the class main on the div with a class of footer
// 8. Create a new li element.
// 9. Give the li the text "four".
// 10. Append the li to the ul element.
// 11. Loop over all of the li's inside the ol tag and give them a background colour of "green".
// 12. Remove the div a class of footer.


//alert("great");
//solutions
// No 1.Select the section with an id of container without using querySelector,

const user = document.getElementById("container");
console.log(user)


// 2. Select the section with an id of container using querySelector.
// const user = document.querySelector("#container");
// console.log(user)

// 3. Select all of the list items with class of "second"
//   const user = document.getElementsByClassName("second");
//    console.log(user)
//   for(let i=0;i<user; i++){
//        //console(user[i])
// console.log(i)
//   }

//No 4. Select a list item with a class of third, but only the list item inside of the ol tag

// 5. Give the section with an id of container the text "Hello"
// const user = document.querySelector("#container");
// user.text="Hello"
// console.log(user)

// 6. Add the class main to the div with a class of footer.
// const user = document.querySelector(".footer")
// user.classList.add("main")
// console.log(user)

// 7. Remove the class main on the div with a class of footer
// const user = document.querySelectorAll("footer")
// user.classList.remove('main')
// console.log(user)

//  //No 8. Create a new li element.
 let valB = document.createElement("li");
 console.log(valB)

 

//  //NO 9. Give the li the text "four".
  valB.innerHTML ="four"


 // 10. Append the li to the ul element.
 let forma = document.querySelector("ul")
 forma.appendChild(valB)

 // 11. Loop over all of the li's inside the ol tag and give them a background colour of "green".
 let valm = document.getElementsByTagName("ol")
 for(let i=0;i<valm.length;i++){
   //console.log(valm[i])
   valm[i].style.backgroundColor="green"
 }

// 12. Remove the div a class of footer.
