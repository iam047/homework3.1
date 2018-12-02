class Pet {
    constructor(petname) {
        this.petname = petname;
        this.lifes = 50;
        this.mood = 50;
        this.watch = 50;
        this.sleep = 50;
        this.rest = 50;
        this.phrases = [
            'Hello, I am ' + this.petname,
            'Go programming!',
            'Did you pass the task?',
            'I am tamagochi',
            'Do you smoke?',
            'Sometimes you can play with me',
            'You can feed me',
            'I know JS is - cool',
        ];
    }

    upLife() {
        if (this.lifes < 100) {
            this.lifes++;
        } else {
            return;
        }
    }

    upMood() {
        if (this.mood < 100) {
            this.mood++;
        } else {
            return;
        }
    }

    upWatch() {
        if (this.watch < 100) {
            this.watch++;
        } else {
            return;
        }
    }

    upSleep() {
        if (this.sleep < 100) {
            this.sleep++;
        } else {
            return;
        }
    }

    upRest() {
        if (this.rest < 100) {
            this.rest++;
        } else {
            return;
        }
    }



    sayHello() {
        let randIndex = Math.floor(Math.random() * this.phrases.length);
        alert(this.phrases[ randIndex ]);
    }
};
