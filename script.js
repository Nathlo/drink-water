 const smallCups = document.querySelectorAll(".cup-small");
 const liters = document.getElementById("remained");
 const liters = document.getElementById("liters");
 const percentage = document.getElementById("percentage");

 smallCups.forEach( (cup, idx) => {
     cup.addEventListener("click", () => highlightCups(idx))
 });
 
 