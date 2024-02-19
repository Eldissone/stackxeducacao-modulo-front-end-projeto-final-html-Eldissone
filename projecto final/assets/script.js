
let C = document.querySelector("#box");
let C1 = document.querySelector("#box1");
let C2 = document.querySelector("#box2");
let C3 = document.querySelector("#box3");

let link = document.querySelector("#link")
let link1 = document.querySelector("#link1")
let link2 = document.querySelector("#link2")
let link3 = document.querySelector("#link3")



const screenWidth = window.screen.width;

if (screenWidth > 1024) {
    console.log('oi')
    
    C.addEventListener('mouseover', minhaFuncao)

    function minhaFuncao (event) {
        link.classList.add('active')
    }

    C.addEventListener('mouseout', function (){
        link.classList.remove('active')
    })

    C1.addEventListener('mouseover', minhaFuncao1)
    function minhaFuncao1 (event) {
        link1.classList.add('active')
    }

    C1.addEventListener('mouseout', function (){
        link1.classList.remove('active')
    })

    C2.addEventListener('mouseover', minhaFuncao2)
    function minhaFuncao2 (event) {
        link2.classList.add('active')
    }

    C2.addEventListener('mouseout', function (){
        link2.classList.remove('active')
    })

    C3.addEventListener('mouseover', minhaFuncao3)
    function minhaFuncao3 (event) {
        link3.classList.add('active')
    }

    C3.addEventListener('mouseout', function (){
        link3.classList.remove('active')
    })
   

}

// const screenWidth = window.screen.width;
// const screenHeight = window.screen.height;
// console.log(`Resolução da tela: ${screenWidth}x${screenHeight}`);


