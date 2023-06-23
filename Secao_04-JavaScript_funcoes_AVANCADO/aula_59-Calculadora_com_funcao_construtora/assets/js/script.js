//
(function () {

    function Calculator() {
        this.display = document.querySelector('.display');

        this.start = () => {
            this.captureClicks();
            this.captureEnter();
        }

        this.addNumberOnDisplay = element => {
            this.display.value += element.innerText;
            this.display.focus();
        }

        this.clearDisplay = () => this.display.value = '';
        this.deleteDisplay = () => this.display.value = this.display.value.slice(0, -1);

        this.performCalculation = () => {

            try {
                const calculation = eval(this.display.value);

                if (Number.isNaN(calculation) || typeof calculation !== 'number') {
                    alert('Cálculo inválido!');
                    return;
                }

                this.display.value = calculation;
            }
            catch (err) {
                // console.log(err);
                alert('Cálculo inválido!');
                return;
            }
        };

        this.captureClicks = () => {
            document.addEventListener('click', event => {
                const element = event.target;

                if (element.classList.contains('btn_num')) this.addNumberOnDisplay(element);
                if (element.classList.contains('btn_clear')) this.clearDisplay();
                if (element.classList.contains('btn_del')) this.deleteDisplay();
                if (element.classList.contains('btn_eq')) this.performCalculation();
            });
        };

        this.captureEnter = () => {
            document.addEventListener('keyup', event => {
                if (event.key != 'Enter') return;
                this.performCalculation();
            });
        };
    };

    const calculator = new Calculator();
    calculator.start();

})();