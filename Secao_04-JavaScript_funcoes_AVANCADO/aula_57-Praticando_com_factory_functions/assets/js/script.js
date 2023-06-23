// 
(function () {

    function createCalculator() {
        return {
            display: document.querySelector('.display'),

            start() {
                this.clickButtons();
                this.pressEnter();
            },

            pressEnter() {
                this.display.addEventListener('keyup', (e) => {
                    if (e.keyCode === 13) { this.performCalculation(); }
                });
            },

            performCalculation() {
                let calculation = this.display.value;

                try {
                    calculation = eval(calculation);

                    if (!calculation) {
                        alert('Conta inválida!');
                        return;
                    }

                    this.display.value = String(calculation);
                }
                catch (e) {
                    alert('Conta inválida!');
                    return;
                }
            },

            clearDisplay() { this.display.value = '' },
            deleteOne() { this.display.value = this.display.value.slice(0, -1); },

            clickButtons() {
                document.addEventListener('click', (e) => {
                    const el = e.target;

                    if (el.classList.contains('btn_num')) this.displayButtons(el.innerText);
                    if (el.classList.contains('btn_clear')) this.clearDisplay();
                    if (el.classList.contains('btn_del')) this.deleteOne();
                    if (el.classList.contains('btn_eq')) this.performCalculation();

                    this.display.focus();
                });
            },

            displayButtons(value) { this.display.value += value; },
        };
    };

    const calculator = createCalculator();
    calculator.start();

})();