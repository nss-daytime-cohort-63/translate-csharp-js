console.log("My Enemies List!");
console.log("----------------");

const enemies = getEnemies()

for (const myEnemy of enemies) {
    if (myEnemy.isReallyHated) {
        console.log(`${myEnemy.firstName} ${myEnemy.lastName} (Really, Really dislike!)`)
    } else {
        console.log(`${myEnemy.firstName} ${myEnemy.lastName}`)
    }
}

function getEnemies() {
    return [
        {
            firstName: 'Joshua',
            lastName: 'Flowers',
            offenses: ["Being a jerk to me in elementary school",
                "Not being nice to me in elementary school"],
            isReallyHated: true
        },
        {
            firstName: 'Darth',
            lastName: 'Vader',
            offenses: [
                "Cut off Luke's hand",
                "Murdered all those kids",
                "Unkind management practices"],
            isReallyHated: true
        },
        {
            firstName: 'Betty',
            lastName: 'Rudelady',
            offenses: [
                "Phone calls in the theater",
                "Phone calls on the bus",
                "Phone calls in line at the grocery store",
                "Poor conversationalist"
            ],
            isReallyHated: false
        },
        {
            firstName: 'Leon',
            lastName: 'Peck',
            offenses: [
                "Keeps giving me a hotplate"
            ],
            isReallyHated: false
        },
    ]
}