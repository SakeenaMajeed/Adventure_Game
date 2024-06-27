#!  /usr/bin/env node

import inquirer from "inquirer";

console.log("Welcome to Adventure Game");

class Player {
    name: string;
    fuel: number = 100

    constructor(name: string) {
        this.name = name
    }

    fuelDecrease() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }

    fuelIncrease() {
        this.fuel = 100
    }

}

class Opponent {
    name: string;
    fuel: number = 100

    constructor(name: string) {
        this.name = name
    }

    fuelDecrease() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }

}


let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please enter your name"
})


let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select your opponent",
    choices: ["Spider Man", "Iron Man", "Hulk"]
})



let p1 = new Player(player.name)
let o1 = new Opponent(opponent.select)

do {

    if (opponent.select == "Spider Man") {

        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select your action",
            choices: ["Attack", "Defend", "Run"]
        })

        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                p1.fuelDecrease()
                console.log(`${(p1.name)} fuel is ${(p1.fuel)}`)
                console.log(`${(o1.name)} fuel is ${(o1.fuel)}`)

                if (p1.fuel <= 0) {
                    console.log(`You loose, Better Luck next time`)
                    process.exit()
                }


            }
            if (num <= 0) {
                o1.fuelDecrease()
                console.log(`${(p1.name)} fuel is ${(p1.fuel)}`)
                console.log(`${(o1.name)} fuel is ${(o1.fuel)}`)

                if (o1.fuel <= 0) {
                    console.log(`You won, Congratulations!`)
                    process.exit()
                }

            }


        }
        if (ask.opt == "Defend") {
            p1.fuelIncrease()
            console.log(`You have defended successfully, therefore your fuel is ${(p1.fuel)}`)

        }
        if (ask.opt == "Run") {
            console.log(`You loose, Better Luck next time`)
            process.exit()
        }

    }


    if (opponent.select == "Iron Man") {

        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select your opponent",
            choices: ["Attack", "Defend", "Run"]
        })

        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                p1.fuelDecrease()
                console.log(`${(p1.name)} fuel is ${(p1.fuel)}`)
                console.log(`${(o1.name)} fuel is ${(o1.fuel)}`)

                if (p1.fuel <= 0) {
                    console.log(`You loose, Better Luck next time`)
                    process.exit()
                }


            }
            if (num <= 0) {
                o1.fuelDecrease()
                console.log(`${(p1.name)} fuel is ${(p1.fuel)}`)
                console.log(`${(o1.name)} fuel is ${(o1.fuel)}`)

                if (o1.fuel <= 0) {
                    console.log(`You won, Congratulations!`)
                    process.exit()
                }

            }


        }
        if (ask.opt == "Defend") {
            p1.fuelIncrease()
            console.log(`You have defended successfully, therefore your fuel is ${(p1.fuel)}`)

        }
        if (ask.opt == "Run") {
            console.log(`You loose, Better Luck next time`)
            process.exit()
        }




    }

    if (opponent.select == "Hulk") {

        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select your opponent",
            choices: ["Attack", "Defend", "Run"]
        })

        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                p1.fuelDecrease()
                console.log(`${(p1.name)} fuel is ${(p1.fuel)}`)
                console.log(`${(o1.name)} fuel is ${(o1.fuel)}`)

                if (p1.fuel <= 0) {
                    console.log(`You loose, Better Luck next time`)
                    process.exit()
                }


            }
            if (num <= 0) {
                o1.fuelDecrease()
                console.log(`${(p1.name)} fuel is ${(p1.fuel)}`)
                console.log(`${(o1.name)} fuel is ${(o1.fuel)}`)

                if (o1.fuel <= 0) {
                    console.log(`You won, Congratulations!`)
                    process.exit()
                }

            }


        }
        if (ask.opt == "Defend") {
            p1.fuelIncrease()
            console.log(`You have defended successfully, therefore your fuel is ${(p1.fuel)}`)

        }
        if (ask.opt == "Run") {
            console.log(`You loose, Better Luck next time`)
            process.exit()
        }




    }




}
while (true)






