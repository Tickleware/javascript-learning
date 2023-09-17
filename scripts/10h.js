function handleCostKeydown(event) {
    if (event.key === 'Enter') {
    calculateTotal();
    }
}

function subscribe () {
    const buttonElement = document.querySelector('.js-subscribe-button');
    if (buttonElement.innerText === 'Subscribe') {
        buttonElement.innerHTML = 'Subscribed'; 
        buttonElement.classList.add('is-subscribed');
    } else {
        buttonElement.innerHTML = 'Subscribe';
        buttonElement.classList.remove('is-subscribed');
    }
}

function calculateTotal() {
    const inputElement = document.querySelector('.js-cost-input');
    let cost = Number(inputElement.value * 100);
    const output = document.querySelector('.js-total-cost')
    
    if (cost < 40 * 100  && cost > 0) {
        cost = (cost + 1000) / 100
        output.innerHTML = `$${cost}`;
        output.classList.remove('error');                
    } else if (cost >= 40 * 100) {
        cost = cost / 100
        output.innerHTML = `$${cost}`;
        output.classList.remove('error');
    } else if (cost < 0) {
        output.innerHTML = `Error: cost cannot be less than $0`;
        output.classList.add('error');        
    }

    
}