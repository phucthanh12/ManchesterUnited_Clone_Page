window.onload = function(){
    const overlay = document.querySelector(".overlay");
    const modalContainer = document.querySelector(".content-modal__container");

    modalContainer.addEventListener("mouseover",event =>{
        overlay.style.display=" block";
        overlay.style.opacity=" 0.4";
    });

    modalContainer.addEventListener("mouseout",event =>{
        // event.preventDefault()
        overlay.style.display=" none";
        overlay.style.opacity=" 0"; 
    });
}