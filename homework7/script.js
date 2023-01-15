const tamagotchi_container = document.getElementById("block-tamagotchi");


const actionsTamagotchi = document.createElement('div');
actionsTamagotchi.className = "actions_tamagotchi";
const imageTamagotchi = document.createElement("img");
imageTamagotchi.src = "image/noun-laughing-2203586.svg";
imageTamagotchi.alt = "happy";


tamagotchi_container.appendChild(imageTamagotchi);
tamagotchi_container.appendChild(actionsTamagotchi);


class Tamagotchi {
    constructor() {
        this.nameHealth = "health";
        this.health = 100;
        this.hungry = 100;
        this.nameHungry = "hungry";
        this.play = 100;
        this.namePlay = "play";
        this.block = document.getElementById("block-tamagotchi")

        this.healthLowInterval = 2;
        this.hungryLowInterval = 1;
        this.playLowInterval = 3;


    }

    healthInterval = () => {
        const healthTamagotchi = setInterval(() => {
            if (this.health > this.healthLowInterval) {
                this.health = this.health - this.healthLowInterval;
                this.yourTamagotchi()
                const progress = document.getElementById(`${this.nameHealth}`);
                progress.value = this.health
            } else {
                this.health = 0;
                this.gameOver();
                exitTamagotchi(healthTamagotchi);
            }
        }, 1000)
    };

    upHealth = () => {


        if (this.health < 100 && this.health > 0) {
            if (this.health >= 100) {
                this.health = 100
            } else {
                this.health = this.health + 5
            }
            const progress = document.getElementById(`${this.nameHealth}`);
            progress.value = this.health
        }
        if (this.play >= 8 || this.hungry >= 3) {
            const progressHungry = document.getElementById(this.nameHungry);
            this.hungry = this.hungry - 4;
            progressHungry.value = this.hungry
            const progressPlay = document.getElementById(`${this.namePlay}`);
            this.play = this.play - 9;
            progressPlay.value = this.play
        } else {
            this.health = 0;
            this.hungry = 0;
            this.play = 0;
            this.gameOver();
            exitTamagotchi();
        }
    }


    upHungry = () => {
        if (this.hungry < 100 && this.hungry > 0) {
            if (this.hungry >= 95) {
                this.hungry = 100
            } else {
                this.hungry = this.hungry + 5
            }
            const progress = document.getElementById(`${this.nameHungry}`);
            progress.value = this.hungry
        }
        if (this.play >= 7 || this.health >= 5) {

            const progressPlay = document.getElementById(this.namePlay);
            this.play = this.play - 8;
            progressPlay.value = this.play

            const progressHealth = document.getElementById(`${this.nameHealth}`);
            this.health = this.health - 6;
            progressHealth.value = this.health
        } else {
            this.health = 0;
            this.hungry = 0;
            this.play = 0;
            this.gameOver();
        }
    }

    hungryInterval = () => {
        const hungryTamagotchi = setInterval(() => {
            if (this.hungry > this.hungryLowInterval) {
                this.hungry = this.hungry - this.hungryLowInterval;
                this.yourTamagotchi()
                const progress = document.getElementById(this.nameHungry);
                progress.value = this.hungry

            } else {
                this.hungry = 0;
                this.gameOver();
                exitTamagotchi(hungryTamagotchi);
            }
        }, 700)
    }


    playInterval = () => {
        console.log(this.play)
        const playTamagotchi = setInterval(() => {
            if (this.play > this.playLowInterval) {
                this.yourTamagotchi()
                this.play = this.play - this.playLowInterval;
                const progress = document.getElementById(this.namePlay);
                progress.value = this.play
            } else {
                this.play = 0;
                this.gameOver();
                exitTamagotchi(playTamagotchi);
            }
        }, 1500)
    }

    // interval = (el, lowInterval, name) => {
    //
    //      const doTamagotchi =setInterval(() => {
    //         if (el > lowInterval) {
    //             console.log(lowInterval)
    //
    //             el = el - lowInterval;
    //             console.log('value '+ el)
    //             const progress = document.getElementById(name);
    //             progress.value = el
    //         } else {
    //             el = 0;
    //             this.gameOver();
    //             exitTamagotchi(doTamagotchi);
    //         }
    //     }, 1000)
    // }

    upPlay = () => {
        if (this.play > 0) {
            if (this.play >= 96) {
                this.play = 100
            } else {
                this.play = this.play + 4
            }
            const progress = document.getElementById(`${this.namePlay}`);
            progress.value = this.play
        } else {
            this.gameOver();
        }
        if (this.hungry >= 4) {
            const progressHungry = document.getElementById(this.nameHungry);
            this.hungry = this.hungry - 5;
            progressHungry.value = this.hungry

        } else {
            this.gameOver();
        }
        if (this.health >= 1) {
            const progressHealth = document.getElementById(`${this.nameHealth}`);
            this.health = this.health - 2;
            progressHealth.value = this.health
        } else {
            this.gameOver();
        }
    }

    playTamagotchi() {

        this.playInterval();
        this.progressBar(this.play, this.namePlay, this.upPlay)
    }

    hungryTamagotchi() {
        this.hungryInterval()
        this.progressBar(this.hungry, this.nameHungry, this.upHungry);
    }

    healthTamagotchi() {
        this.healthInterval()
        this.progressBar(this.health, this.nameHealth, this.upHealth);
    }

    yourTamagotchi() {
        if (this.health >= 70 && this.play >= 70 && this.hungry >= 70) {
            imageTamagotchi.src = "image/noun-laughing-2203586.svg";
            imageTamagotchi.alt = "happy";
        } else if (this.play < 70 && this.play > 40 || this.health < 70 && this.health > 40 || this.hungry < 70
            && this.hungry > 40) {
            imageTamagotchi.src = "image/noun-dizzy-2203580.svg";
            imageTamagotchi.alt = "happy";
        } else if (this.play <= 40 && this.play >= 20 || this.health <= 40 && this.health >= 20 || this.hungry <= 40
            && this.hungry >= 20) {
            imageTamagotchi.src = "image/noun-angry-2203572.svg";
            imageTamagotchi.alt = "angry";
        }
    }

    progressBar = (value, name, upProgress) => {
        const blockGameTamagotchi = document.createElement("div");
        const progressBarElement = document.createElement("progress");
        const button = document.createElement("button");

        blockGameTamagotchi.id = "block-game-tamagotchi"
        blockGameTamagotchi.className = "block_game_tamagotchi"

        button.id = `up-${name}`;
        button.className = `up_tamagochi`
        button.innerText = name;
        button.addEventListener('click', () => {
            upProgress();
        })

        progressBarElement.value = value;
        progressBarElement.max = 100;
        progressBarElement.id = name;
        progressBarElement.className = `progress_bar_element`

        blockGameTamagotchi.appendChild(button);
        blockGameTamagotchi.appendChild(progressBarElement)
        actionsTamagotchi.appendChild(blockGameTamagotchi)

    }


    gameOver = () => {
        this.hungry = 0;
        this.health = 0;
        this.play = 0;

        actionsTamagotchi.innerHTML = "";
        imageTamagotchi.src = "image/noun-dead-2203583.svg";
        imageTamagotchi.alt = "angry";

        const theEndGameTamagotchi = document.createElement("div");
        const textEndGame = document.createElement("p");
        const buttonRestartGame = document.createElement("button");

        theEndGameTamagotchi.id = "the-end-tamagotchi";
        theEndGameTamagotchi.className = "the_end_tamagotchi"

        textEndGame.innerText = "Game Over";
        textEndGame.id = "text-end-game";
        textEndGame.className = "text_end_game"

        buttonRestartGame.id = "restart-game";
        buttonRestartGame.className = "restart_game"
        buttonRestartGame.innerText = "Restart Game";
        buttonRestartGame.addEventListener("click", () => {
            this.resetTamagotchi();
        })

        theEndGameTamagotchi.appendChild(textEndGame);
        theEndGameTamagotchi.appendChild(buttonRestartGame);
        actionsTamagotchi.appendChild(theEndGameTamagotchi);

    }

    resetTamagotchi = () => {
        this.health = 100;
        this.hungry = 100;
        this.play = 100;

        actionsTamagotchi.innerHTML = "";
        this.progressBar(this.health, this.nameHealth, this.upHealth);

        this.progressBar(this.hungry, this.nameHungry, this.upHungry);

        this.progressBar(this.play, this.namePlay, this.upPlay);

        this.healthInterval();
        this.hungryInterval();
        this.playInterval();

    }
}

const exitTamagotchi = (value) => {
    clearInterval(value)
}

const communicationTamagotchi = new Tamagotchi();


const startButton = document.getElementById("button_start")

startButton.addEventListener("click", () => {
    startButton.className = "start-button"

    communicationTamagotchi.playTamagotchi();
    communicationTamagotchi.hungryTamagotchi()
    communicationTamagotchi.healthTamagotchi()
})
