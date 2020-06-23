window.onload = () => {
    let jellyfish = document.querySelector('.jellyfish');
    let bgFish = document.querySelector('.bg-fish');
    let upButton = document.querySelector('#up-button');
    let downButton = document.querySelector('#down-button');
    let rock = document.querySelector('.rock');
    let starfish = document.querySelector('#starfish');
    let scoreContainer = document.querySelector('.score');
    let score = 0;
    let divContainer = document.querySelector('.container');
    let p = document.querySelector('progress');
    let pStatus = document.querySelector('.progress-status');
    let loadContainer = document.querySelector('.load-container');
    let playContainer = document.querySelector('.play-container');
    let soundsInfo = document.querySelector('.sounds-info');
    let bottomText = document.querySelector('.bottom-text');
    let gameEndAudio = document.querySelector('#game-end-audio');
    let ambienceAudio = document.querySelector('#ambience-audio');
    let eatAudio = document.querySelector('#eat-audio');
    divContainer.style.height = '305px';

    setTimeout(() => {
        divContainer.style.display = 'none';
    }, 2000);

    scoreContainer.textContent = 'Score: ' + score;

    let timer = setInterval(() => {
        p.value++;
        pStatus.textContent = p.value + '%';
        if (p.value > 99) {
            playContainer.style.display = 'block';
            soundsInfo.style.display = 'block';
            bottomText.style.display = 'block';
            clearInterval(timer);
        }
    }, 20);

    let gameWasStarted = false;

    playContainer.onclick = () => {
        gameWasStarted = true;
        loadContainer.classList.add('run-disappear-animation');
        divContainer.style.display = 'block';
        loadContainer.style.display = 'none';
        divContainer.classList.add('run-appear-animation');
        ambienceAudio.play();
        eatAudio.play();
        eatAudio.loop = false;
        gameEndAudio.play();
        gameEndAudio.loop = false;
        setTimeout(() => {
            loadContainer.classList.remove('run-disappear-animation');
            divContainer.classList.remove('run-appear-animation');
        }, 1000);
    }

    let fish = document.querySelector('.fish');
    let fishStyles = getComputedStyle(fish);
    let fishYPos = parseFloat(fishStyles.top);
    let countOfWormsContainer = document.querySelector('#count-of-worms');
    let countOfWorms = 0;
    countOfWormsContainer.textContent = `x${countOfWorms}`;

    let hook = new Image();
    let plant = new Image();
    let seaweed = new Image();
    let seaweed2 = new Image();
    let submarine = new Image();
    let swordfish = new Image();
    let worm = new Image();

    worm.src = 'https://image.flaticon.com/icons/svg/1833/1833959.svg';
    swordfish.src = 'https://storage.googleapis.com/multi-static-content/previews/artage-io-thumb-c5c95778eca5188926a938eb4b7a66d1.png';
    submarine.src = 'https://image.flaticon.com/icons/svg/575/575733.svg';
    seaweed2.src = 'https://image.flaticon.com/icons/svg/3038/3038212.svg';
    seaweed.src = 'https://image.flaticon.com/icons/svg/852/852080.svg';
    plant.src = 'https://image.flaticon.com/icons/svg/468/468393.svg';
    hook.src = 'https://image.flaticon.com/icons/svg/2241/2241032.svg';

    divContainer.append(seaweed, seaweed2, plant, submarine, swordfish, hook, worm);

    worm.style.cssText = `
  position: relative;
  left: 600px;
  top: -300px;
  width: 30px;
  height: 30px;
  z-index: 9;
  `;

    hook.style.cssText = `
  position: relative;
  left: 200px;
  width: 100px;
  height: 100px;
  z-index: 9;
  `;

    swordfish.style.cssText = `
  position: relative;
  left: 600px;
  width: 200px;
  height: 100px;
  z-index: 9999;
  `;

    plant.classList.add('run-plant-animation');
    seaweed.classList.add('run-seaweed-animation');
    seaweed2.classList.add('run-seaweed2-animation');
    submarine.classList.add('run-submarine-animation');
    rock.classList.add('run-rock-animation');
    starfish.classList.add('run-rock-animation');
    worm.classList.add('run-worm-move-animation');

    setInterval(() => {
        if (gameWasStarted) {
            setTimeout(() => {
                swordfish.classList.add('run-swordfish-animation');
                hook.classList.add('run-hook-move-animation');
            }, 2000);
        }
    }, 0);

    submarine.style.cssText = `
  position: relative;
  top: -450px;
  left: -450px;
  width: 75px;
  height: 75px;
  z-index: 9;
  `;

    seaweed.style.cssText = `
  position: relative;
  top: -71px;
  width: 100px;
  height: 100px;
  z-index: 20;
  `;

    seaweed2.style.cssText = `
  position: relative;
  top: -73px;
  width: 100px;
  height: 100px;
  z-index: 99;
  `;

    plant.style.cssText = `
  position: relative;
  top: -72px;
  width: 100px;
  height: 100px;
  z-index: 20;
  `;

    function randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    function setSwordfishTopPos() {
        let topPos = randomInteger(-190, -255);
        swordfish.style.top = `${topPos}px`;
        if (num % 5 == 0) {
            swordfish.style.top = `${randomInteger(-185, -195)}px`;
        }
    }

    function setHookPos() {
        let topPos = randomInteger(-420, -450);
        hook.style.top = `${topPos}px`;
    }

    function setWormPosition() {
        let leftPos = randomInteger(300, 600);
        let topPos = randomInteger(-355, -420);
        worm.style.display = 'inline';
        worm.style.left = `${leftPos}px`;
        worm.style.top = `${topPos}px`;
    }

    setInterval(() => {
        if (parseFloat(hookStyles.transform.slice(19, 25)) > -5) {
            setHookPos();
        }
    }, 0);

    let num = 1;

    setInterval(() => {
        num++;
    }, 3500);

    setInterval(() => {
        if (parseFloat(swordfishStyles.transform.slice(18, 25)) > -15) {
            setSwordfishTopPos();
        }
    }, 0);

    setInterval(() => {
        if (wormStyles.transform.slice(19, 25) > -10) {
            hookIsBehind = true;
            setWormPosition();
        }
    }, 0);

    let wormIsDissapeared = 0;

    setInterval(() => {
        if (
            parseFloat(wormStyles.transform.slice(19, 25)) + parseFloat(worm.style.left) > -280 &&
            parseFloat(wormStyles.transform.slice(19, 25)) + parseFloat(worm.style.left) < -160 &&
            fishYPos < parseInt(wormStyles.top) + 470 &&
            fishYPos > parseInt(wormStyles.top) + 410
        ) {
            worm.style.display = 'none';
            wormIsDissapeared++;
            countOfWorms++;
            countOfWormsContainer.textContent = `x${countOfWorms}`;
            score += 100;
            scoreContainer.textContent = 'Score: ' + score;
        }
    }, 0);

    setInterval(() => {
        if (parseFloat(swordfishStyles.transform.slice(19, 25)) < -1670 || parseFloat(hookStyles.transform.slice(19, 25)) < -670) {
            score++;
            scoreContainer.textContent = 'Score: ' + score;
        }
    }, 0);

    let swordfishStyles = getComputedStyle(swordfish);
    let hookStyles = getComputedStyle(hook);
    let wormStyles = getComputedStyle(worm);

    setInterval(() => {
        if (
            parseFloat(hookStyles.transform.slice(18, 27)) > -350 &&
            parseFloat(hookStyles.transform.slice(18, 27)) < -300 &&
            fishYPos - 510 < parseFloat(hook.style.top) ||
            fishYPos > parseFloat(swordfishStyles.top) + 360 &&
            fishYPos < parseFloat(swordfishStyles.top) + 440 &&
            parseFloat(swordfishStyles.transform.slice(18, 25)) > -650 &&
            parseFloat(swordfishStyles.transform.slice(18, 25)) < -550
        ) {
            setTimeout(() => {
                divContainer.style.display = 'none';
                fishYPos = 30;
            }, 200);
            setTimeout(() => {
                score = 0;
                countOfWorms = 0;
                scoreContainer.textContent = 'Score: ' + score;
                countOfWormsContainer.textContent = `x${countOfWorms}`;
                divContainer.style.display = 'block';
            }, 600);
        }
    }, 0);

    function changeFishPosToBottom() {
        fishYPos += 15;
    }

    function changeFishPosToTop() {
        fishYPos -= 15;
    }

    let clickEvent = new Event('click');
    document.documentElement.onclick = () => {
        if (wormIsDissapeared == 1) {
            eatAudio.muted = false;
            eatAudio.play();
            wormIsDissapeared = 0;
        }

        if (divContainer.style.display == 'none' && gameWasStarted) {
            gameEndAudio.muted = false;
            gameEndAudio.play();
        }
    }

    setInterval(() => {
        document.documentElement.dispatchEvent(clickEvent);
    }, 0);

    function setFishPosition() {
        let fishPosID = setInterval(() => {
            if (gameWasStarted) {
                if (fishYPos > parseFloat(divContainer.style.height) - 60) {
                    return;
                }

                if (fishYPos < parseFloat(divContainer.style.height) - 60) {
                    fishYPos += 1;
                    fish.style.top = `${fishYPos}px`;
                }
            }
        }, 100);
    }

    setFishPosition();

    upButton.onclick = () => {
        if (fishYPos < -20) return;
        changeFishPosToTop();
    };

    downButton.onclick = () => {
        if (fishYPos > 227) return;
        changeFishPosToBottom();
    };
};