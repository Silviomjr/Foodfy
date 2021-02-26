const introCards = document.querySelectorAll('.intro-card');
const hideshow = document.querySelectorAll('.ingredients');

function linkClick() {
    const introCards = document.querySelectorAll('.intro-card');
    for(let introCard of introCards) {
        const id = introCard.classList[1];
    
        introCard.addEventListener("click", () => {
            window.location.href = `/recipes/${id}`;
        });
    }
};
if(introCards) {
    linkClick();
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
} else if(fileName.includes('chefs')) {
    document.querySelector('.chefs').classList.add('bold-text');
};


