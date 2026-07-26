const AllButton = document.querySelector('All');
const GamesButton = document.querySelector('Games');
const SoftwareButton = document.querySelector('Software');
const SoloButton = document.querySelector('Solo');
// button.addEventListener('click', () => {
//     const element = document.querySelector('Games');
//     element.style.backgroundColor = 'red';
// });

// AllButton.addEventListener('click', All)
export function All(){
    const element = document.querySelectorAll('.Games');
    element.forEach(el => {
        el.style.display = "inline-block";
    });

    const element2 = document.querySelectorAll('.Software');
    element2.forEach(el => {
        el.style.display = "inline-block";
    });
}

export function Games(){
    All()
    const element = document.querySelectorAll('.Software');
    element.forEach(el => {
        if (el.style.display != "none") {
            el.style.display = "none";
        } 
    })
}

export function Software(){
    All()
    const element = document.querySelectorAll('.Games');
    element.forEach(el => {
        if (el.style.display != "none") {
            el.style.display = "none";
        } 
    })
}

export function Solo(){
    All()
    for(var i = 0; i < 2; i++){
        if (i == 0) {
            var element = document.querySelectorAll('.hero-card.Games');
        }
        else if (i == 1) {
            element = document.querySelectorAll('.hero-card.Software');
        }
        element.forEach(el => {
            if (el.style.display != "none") {
                el.style.display = "none";
            }
        })
    }

    const element1 = document.querySelectorAll('.Solo');
    element1.forEach(el => {
        el.style.display = "inline-block";
    })
}


// AllButton.onclick = All;
// GamesButton.onclick = Games;
// SoftwareButton.onclick = Software;
// SoloButton.onclick = Solo;