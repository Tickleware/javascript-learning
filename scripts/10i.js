let calculation = localStorage.getItem('calculation') || '';

      function showCalculation() {
        document.querySelector('.show-calculation')
        .innerHTML = `${calculation}`
      }

      function updateCalculation(value) {
        calculation += value;
        showCalculation()
        localStorage.setItem('calculation', calculation);
      }

      // Optional: you can also create a function in order
      // to reuse this code.
      function saveCalculation() {
        localStorage.setItem('calculation', calculation);
      }