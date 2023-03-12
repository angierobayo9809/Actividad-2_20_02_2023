let myToggle = document.querySelector(".toggle");
 let myNavigation = document.querySelector(".navigation");
let myStarbucks =  document.querySelector(".starbucks");
let myCircle =  document.querySelector(".circle");
let myThumb = document.querySelector(".thumb");

myToggle.addEventListener("click", (e) =>{
    e.target.classList.toggle('active');
    myNavigation.classList.toggle('active');
})

myThumb.addEventListener("click", (e) =>{
    let myEtiqueta =e.target;
    if (myEtiqueta.localName == "img"){
        let myStyle = JSON.parse(myEtiqueta.dataset.toggle);
        myStarbucks.src = myStyle.img;
        myCircle.style.background = myStyle.color;
    }
})