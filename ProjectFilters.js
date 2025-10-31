const AllButton = document.querySelector('All');
const GamesButton = document.querySelector('Games');
const SoftwareButton = document.querySelector('Software');
const SoloButton = document.querySelector('Solo');
button.addEventListener('click', () => {
    const element = document.querySelector('Games');
    element.style.backgroundColor = 'red';
});

AllButton.addEventListener('click', All)
function All(){
    const element = document.querySelectorAll('.Games');
    element.forEach(el => {
        el.style.display = "inline-block";
        el.style.width = "45%";
    });

    const element2 = document.querySelectorAll('.Software');
    element2.forEach(el => {
        el.style.display = "inline-block";
        el.style.width = "45%";
    });
}

function Games(){
    All()
    const element = document.querySelectorAll('.Software');
    element.forEach(el => {
        if (el.style.display != "none") {
            el.style.display = "none";
        } else {
            el.style.display = "inline-block";
            el.style.width = "45%";
        }
    })
}

function Software(){
    All()
    const element = document.querySelectorAll('.Games');
    element.forEach(el => {
        if (el.style.display != "none") {
            el.style.display = "none";
        } else {
            el.style.display = "inline-block";
            el.style.width = "45%";
        }
    })
}

function Solo(){
    All()
    for(var i = 0; i < 2; i++){
        if (i == 0) {
            var element = document.querySelectorAll('.Games');
        }
        else if (i == 1) {
            element = document.querySelectorAll('.Software');
        }
        element.forEach(el => {
            if (el.style.display != "none") {
                el.style.display = "none";
            }
            else {
                el.style.display = "inline-block";
                el.style.width = "45%";
            }
        })
    }

    const element1 = document.querySelectorAll('.Solo');
    element1.forEach(el => {
        el.style.display = "inline-block";
        el.style.width = "45%";
    })
}


AllButton.onclick = All;
GamesButton.onclick = Games;
SoftwareButton.onclick = Software;
SoloButton.onclick = Solo;