const modalOverlay = document.querySelector('.modal-overlay');
const modalContent = document.querySelector('.modal-content');
const introCards = document.querySelectorAll('.intro-card');

for (let introCard of introCards) {
    
    introCard.addEventListener("click", function() {            
        
        modalContent.querySelector('img').src = introCard.querySelector("img").src;
        modalContent.querySelector("h2").firstChild.data = introCard.querySelector('h3').firstChild.data;
        modalContent.querySelector('p').firstChild.data = introCard.querySelector("p").firstChild.data;

        modalOverlay.classList.add('active');        
    });
}

document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove("active");    
    modalContent.querySelector('img').src = "";
        modalContent.querySelector("h2").firstChild.data = "";
        modalContent.querySelector('p').firstChild.data = ""; 
});

