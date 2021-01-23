let numeroActual = 0;

// referencias a los botones
const btn_prev = document.getElementById("prev");
btn_prev.disabled = true;

const btn_next = document.getElementById("next");

// referencias a los circulos
const circles = document.querySelectorAll(".circle");

// referencia a la clase del div que representa la barra
const progress = document.querySelector(".progress");
const progress_id = document.getElementById("progress");


btn_next.addEventListener('click', ()=>{
    numeroActual = numeroActual +1;
    btn_prev.disabled = false;
    
    if(numeroActual > 3){
        numeroActual = 3;
        btn_next.disabled = true;
    }else{  
        circles[numeroActual].classList.add("active");
        updateProgress(numeroActual);
    }
    
    console.log("next:" + numeroActual);
    
})
btn_prev.addEventListener('click', ()=>{
    
    btn_next.disabled = false;
    
    if(numeroActual <= 0){
        numeroActual = 0;
        btn_prev.disabled = true;
    }else{
        circles[numeroActual].classList.remove("active");
        updateProgress(numeroActual-1);
        numeroActual = numeroActual - 1;   
    }
    
    console.log("prev:" + numeroActual);
})


function updateProgress(index){
   
    switch(index){
        case 0:
            progress.style.width = "0%";
            break;
        case 1:
            progress.style.width = "33.33%";
            break;
        case 2:
            progress.style.width = "66.66%";
            break;
        case 3:
            progress.style.width = "100%";
            break;
    }
}
 