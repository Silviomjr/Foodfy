const introCards = document.querySelectorAll('.intro-card');
const hideshow = document.querySelectorAll('.ingredients');


for (let i = 0; i < introCards.length; i++) {
    
    introCards[i].addEventListener("click", function() {            
        
        window.location.href = `/recipes/${i}`;
    });
}
for (let button of hideshow) {
    const showButton = button.querySelector('.hide-show');
    showButton.addEventListener("click", () => {
        if(button.querySelector('ul').className == 'deactivate') {
            button.querySelector('ul').classList.remove('deactivate');
            button.querySelector('ul').classList.add('active');
            button.querySelector('.hide-show').innerHTML = 'ESCONDER';
        } else {
            button.querySelector('ul').classList.remove('active');
            button.querySelector('ul').classList.add('deactivate');
            
            button.querySelector('.hide-show').innerHTML = 'MOSTRAR';
        }
    });

}

var fileName = location.href.split('/'); 

if (fileName.includes('recipes')) {
    document.querySelector('.recipes').classList.add('bold-text');
} else if (fileName.includes('about')) {
    document.querySelector('.about').classList.add('bold-text');
};


