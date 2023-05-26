console.log("Do you believe in magic?");
console.log("------------------------");

const allSpells = getAllSpells()
const goodBook = makeGoodSpellBook(allSpells)
const evilBook = makeEvilSpellBook(allSpells)

displaySpellBook(goodBook)
console.log('')
displaySpellBook(evilBook)

function displaySpellBook(book) {
    console.log(book.title)
    for (const spell of book.spells) {
        console.log(`  ${spell.name}`)
    }
}

function makeEvilSpellBook(spells) {
    const evilBook = {
        title: 'Evil Book',
        spells: spells.filter(spell => spell.isEvil)
    }

    return evilBook
}

function makeGoodSpellBook(spells) {
    const goodBook = {
        title: 'Good Book',
        spells: spells.filter(spell => !spell.isEvil)
    }

    return goodBook
}


function getAllSpells() {
    const spells = [
        {
            id: 21341234,
            name: 'Turn enemy into a newt',
            isEvil: true,
            energyRequired: 5.1
        },
        {
            name: 'Conjure some gold for a local charity',
            isEvil: false,
            energyRequired: 5.1
        },
        {
            name: 'Give a deaf person the ability to heal',
            isEvil: false,
            energyRequired: 5.1
        },
        {
            name: 'Make yourself emperor of the universe',
            isEvil: true,
            energyRequired: 5.1
        },
        {
            name: 'Convince your relatives your political views are correct',
            isEvil: true,
            energyRequired: 5.1
        },
    ]

    return spells
}