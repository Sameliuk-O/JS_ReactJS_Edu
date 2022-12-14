const TAMAGOTCHI_CONTAINER = document.getElementById("block-tamagotchi");


const ACTIONS_TAMAGOTCHI = document.createElement('div');
const IMAGE_TAMAGOTCHI = document.createElement("img");
IMAGE_TAMAGOTCHI.src = "image/noun-laughing-2203586.svg";
IMAGE_TAMAGOTCHI.alt = "happy";


TAMAGOTCHI_CONTAINER.appendChild(IMAGE_TAMAGOTCHI);
TAMAGOTCHI_CONTAINER.appendChild(ACTIONS_TAMAGOTCHI);


class Tamagotchi {
    constructor() {
        this.nameHealth = "health";
        this.health = 100;
        this.hungry = 100;
        this.nameHungry = "hungry";
        this.play = 100;
        this.namePlay = "play";
        this.block = document.getElementById("block-tamagotchi")

    }
}

class CommunicationTamagotchi extends Tamagotchi {
    constructor(health, hungry, nameHealth, nameHungry, play, namePlay) {
        super(health, hungry, nameHealth, nameHungry, play, namePlay);

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
        }, 1000)
    }


    playInterval = () => {
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
        }, 1000)
    }

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

    yourTamagotchi() {
        if (this.health >= 70 && this.play >= 70 && this.hungry >= 70) {
            IMAGE_TAMAGOTCHI.src = "image/noun-laughing-2203586.svg";
            IMAGE_TAMAGOTCHI.alt = "happy";
        } else if (this.play < 70 && this.play > 40 || this.health < 70 && this.health > 40 || this.hungry < 70
            && this.hungry > 40) {
            IMAGE_TAMAGOTCHI.src = "image/noun-dizzy-2203580.svg";
            IMAGE_TAMAGOTCHI.alt = "happy";
        } else if (this.play <= 40 && this.play >= 20 || this.health <= 40 && this.health >= 20 || this.hungry <= 40
            && this.hungry >= 20) {
            IMAGE_TAMAGOTCHI.src = "image/noun-angry-2203572.svg";
            IMAGE_TAMAGOTCHI.alt = "angry";
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
        ACTIONS_TAMAGOTCHI.appendChild(blockGameTamagotchi)

    }


    gameOver = () => {
        this.hungry = 0;
        this.health = 0;
        this.play = 0;

        ACTIONS_TAMAGOTCHI.innerHTML = "";
        IMAGE_TAMAGOTCHI.src = "image/noun-dead-2203583.svg";
        IMAGE_TAMAGOTCHI.alt = "angry";

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
        ACTIONS_TAMAGOTCHI.appendChild(theEndGameTamagotchi);

    }

    resetTamagotchi = () => {
        this.health = 100;
        this.hungry = 100;
        this.play = 100;

        ACTIONS_TAMAGOTCHI.innerHTML = "";
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

const communicationTamagotchi = new CommunicationTamagotchi();

communicationTamagotchi.progressBar(communicationTamagotchi.health, communicationTamagotchi.nameHealth, communicationTamagotchi.upHealth);
communicationTamagotchi.progressBar(communicationTamagotchi.hungry, communicationTamagotchi.nameHungry, communicationTamagotchi.upHungry);
communicationTamagotchi.progressBar(communicationTamagotchi.play, communicationTamagotchi.namePlay, communicationTamagotchi.upPlay);

communicationTamagotchi.healthInterval();
communicationTamagotchi.hungryInterval();
communicationTamagotchi.playInterval();




