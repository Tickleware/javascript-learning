function toggleButton(selector) {
    const toggleElement = document.querySelector(selector)

    if(!toggleElement.classList.contains('is-toggled')) {

        untoggleButton();
        
        toggleElement.classList.add('is-toggled')
    } else {toggleElement.classList.remove('is-toggled')
    }
}


function untoggleButton() {
    const button = document.querySelector('.is-toggled')

    if(button) {
        button.classList.remove('is-toggled')
    }
}