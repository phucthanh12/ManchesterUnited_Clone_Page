window.onload = function(){
    const modalContainers = document.querySelectorAll(".content-modal__container");
    const headers = document.querySelectorAll(".nav-content__title");

    headers.forEach((header,key) =>header.addEventListener("mouseover",()=>{
        const child = header.lastElementChild; /* cach tam thoi */
        child.style.display = "block"
        overlayAppear();
    }));
    
    headers.forEach((header,key) =>header.addEventListener("mouseout",()=>{
        const child = header.lastElementChild;
        child.style.display = null;
        overlayDisappear();
    }));

    modalContainers.forEach(modalContainer => modalContainer.addEventListener("mouseover", () =>{
        overlayAppear();
    }));
  
    modalContainers.forEach(modalContainer => modalContainer.addEventListener("mouseout",()=>{     
        overlayDisappear();
    }));


    const overlayAppear = function () {
        const overlay = document.querySelector(".overlay");
        overlay.style.display=" block";
        overlay.style.opacity=" 0.3"; 
    }

    const overlayDisappear = function () {
        const overlay = document.querySelector(".overlay");
        overlay.style.display="none";
        overlay.style.opacity="0"; 
    }

/* hide sub header */
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.querySelector(".header__wrapper").style.top="0";
        }else {
            document.querySelector(".header__wrapper").style.top="-46px";
        }
        prevScrollpos = currentScrollPos;
    }

}
