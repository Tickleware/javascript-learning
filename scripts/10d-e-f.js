function toggleButton(selector) {
    const toggleElement = document.querySelector(selector)

    if (!toggleElement.classList.contains('is-toggled')) {
        toggleElement.classList.add('is-toggled')
    } else if (toggleElement.classList.contains('is-toggled')) {
        toggleElement.classList.remove('is-toggled')
    }
} 