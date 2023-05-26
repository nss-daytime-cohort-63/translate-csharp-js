console.log("Let's roll some dice, baby!");
console.log("---------------------------");

for (let i = 0; i < 10; i++) {
    const die1 = roll()
    const die2 = roll()

    let message = `${die1} + ${die2} == ${die1.value + die2.value}`

    if (die1.value === die2.value) {
        message += ' DOUBLES!'
    }

    console.log(message)
}

function roll() {
    const dieValue = Math.floor(Math.random() * 6 + 1)
    const die = {
        value: dieValue,
        toString: function () {
            let dieString = ''

            switch (this.value) {
                case 1:
                    dieString = "one"; // These \uXXXX values are fancy unicode characters
                    break;
                case 2:
                    dieString = "two";
                    break;
                case 3:
                    dieString = "three";
                    break;
                case 4:
                    dieString = "four";
                    break;
                case 5:
                    dieString = "five";
                    break;
                case 6:
                    dieString = "six";
                    break;

            }
            return dieString
        }
    }

    return die
}