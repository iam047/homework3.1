let pet = new Pet('Tom');

let talkBth = document.getElementById('talk');
talkBth.addEventListener('click', () => pet.sayHello());

let feedBtn = document.getElementById('feed');
feedBtn.addEventListener('click', () => pet.upLife());

let playBtn = document.getElementById('play');
playBtn.addEventListener('click', () => pet.upMood());

let watchBtn = document.getElementById('clean');
watchBtn.addEventListener('click', () => pet.upWatch());

let sleepBtn = document.getElementById('sleep');
sleepBtn.addEventListener('click', () => pet.upSleep());

let restBtn = document.getElementById('rest');
restBtn.addEventListener('click', () => pet.upRest());

let interval = setInterval(function () {
    const { lifes, mood, watch, sleep, rest,} = pet;
    const lifePet = lifes && mood && watch && sleep && rest;

    if (lifePet) {
        pet.lifes--;
        pet.mood--;
        pet.watch--;
        pet.sleep--;
        pet.rest--;
        document.getElementById('life').value = pet.lifes;
        document.getElementById('mood').value = pet.mood;
        document.getElementById('cleaning').value = pet.watch;
        document.getElementById('sleeping').value = pet.sleep;
        document.getElementById('resting').value  = pet.rest;
    } else {
        talkBth.style.display = 'none';
        feedBtn.style.display = 'none';
        playBtn.style.display = 'none';
        watchBtn.style.display = 'none';
        sleepBtn.style.display = 'none';
        restBtn.style.display  = 'none';
        clearInterval(interval);
        alert('You are bad owner! I died');
    }
}, 1000);