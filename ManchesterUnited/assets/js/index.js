window.onload = function(){
    const overlay = document.querySelector(".overlay");
    const modalContainers = document.querySelectorAll(".content-modal__container");
    const contentTitles = document.querySelectorAll(".content-title");

    modalContainers.forEach(modalContainer => modalContainer.addEventListener("mouseover", () =>{
        overlay.style.display="block";
        overlay.style.opacity="0.3";
    }));
  
    contentTitles.forEach(contentTitle => contentTitle.addEventListener("mouseover", () =>{
        overlay.style.display="block";
        overlay.style.opacity="0.3";
    }));
  
    modalContainers.forEach(modalContainer => modalContainer.addEventListener("mouseout",()=>{
        overlay.style.display="none";
        overlay.style.opacity="0";
    }));

    contentTitles.forEach(contentTitle => contentTitle.addEventListener("mouseout",()=>{
        overlay.style.display="none";
        overlay.style.opacity="0";
    }));
}