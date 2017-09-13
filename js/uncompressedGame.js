var LEVELS = [{
    playerPosition: { x: 50, y: 50 },
    enemies: [{
        angle: 0,
        maxAngle: 50,
        minAngle: -50,
        speed: 1,
        goToMax: true,
        isWaiting: false,
        isReturning: false,
        isTurningAround: false,
        secondsToWait: 2,
        startPosition: { x: 350, y: 200 },
        currentPosition: { x: 350, y: 200 },
        goToPosition: { x: 350, y: 350 },
        direction: { x: 350, y: 400 }
    }, {
        angle: 0,
        maxAngle: 50,
        minAngle: -50,
        speed: 1,
        goToMax: true,
        isWaiting: false,
        isReturning: false,
        isTurningAround: false,
        secondsToWait: 2,
        startPosition: { x: 720, y: 150 },
        currentPosition: { x: 720, y: 150 },
        goToPosition: { x: 720, y: 450 },
        direction: { x: 720, y: 500 }
    }],
    walls: [{
        x: 80,
        y: 50,
        width: 600,
        height: 100
    }, {
        x: 80,
        y: 450,
        width: 600,
        height: 100
    }, {
        x: 750,
        y: 0,
        width: 50,
        height: 240
    }, {
        x: 750,
        y: 360,
        width: 50,
        height: 240
    }],
    goal: {
        x: 750,
        y: 250,
        width: 50,
        height: 100
    }
}, {
    playerPosition: { x: 20, y: 300 },
    enemies: [{
        angle: 0,
        maxAngle: 50,
        minAngle: -50,
        speed: 1,
        goToMax: true,
        isWaiting: false,
        isReturning: false,
        isTurningAround: false,
        secondsToWait: 2,
        startPosition: { x: 150, y: 450 },
        currentPosition: { x: 150, y: 450 },
        goToPosition: { x: 600, y: 450 },
        direction: { x: 650, y: 450 }
    }, {
        angle: 0,
        maxAngle: 50,
        minAngle: -50,
        speed: 1,
        goToMax: true,
        isWaiting: false,
        isReturning: false,
        isTurningAround: false,
        secondsToWait: 2,
        startPosition: { x: 620, y: 100 },
        currentPosition: { x: 620, y: 100 },
        goToPosition: { x: 620, y: 250 },
        direction: { x: 620, y: 300 }
    }, {
        angle: 0,
        maxAngle: 60,
        minAngle: -60,
        speed: 1,
        goToMax: true,
        isWaiting: false,
        isReturning: false,
        isTurningAround: false,
        secondsToWait: 2,
        startPosition: { x: 600, y: 65 },
        currentPosition: { x: 600, y: 65 },
        goToPosition: { x: 150, y: 65 },
        direction: { x: -650, y: 65 }
    }],
    walls: [{
        x: 65,
        y: 140,
        width: 500,
        height: 100
    }, {
        x: 65,
        y: 495,
        width: 730,
        height: 100
    }, {
        x: 650,
        y: 50,
        width: 100,
        height: 100
    }, {
        x: 5,
        y: 0,
        width: 50,
        height: 240
    }, {
        x: 5,
        y: 360,
        width: 50,
        height: 240
    }],
    goal: {
        x: 80,
        y: 0,
        width: 100,
        height: 50
    }
}, {
    playerPosition: { x: 100, y: 570 },
    enemies: [{
        angle: 0,
        maxAngle: 50,
        minAngle: -50,
        speed: 1,
        goToMax: true,
        isWaiting: false,
        isReturning: false,
        isTurningAround: false,
        secondsToWait: 2,
        startPosition: { x: 700, y: 475 },
        currentPosition: { x: 700, y: 475 },
        goToPosition: { x: 700, y: 475 },
        direction: { x: 700, y: 525 }
    }, {
        angle: 0,
        maxAngle: 35,
        minAngle: -35,
        speed: 1,
        goToMax: true,
        isWaiting: false,
        isReturning: false,
        isTurningAround: false,
        secondsToWait: 2,
        startPosition: { x: 180, y: 100 },
        currentPosition: { x: 180, y: 100 },
        goToPosition: { x: 180, y: 450 },
        direction: { x: 180, y: 500 }
    }, {
        angle: 0,
        maxAngle: 37,
        minAngle: -37,
        speed: 1,
        goToMax: true,
        isWaiting: false,
        isReturning: false,
        isTurningAround: false,
        secondsToWait: 2,
        startPosition: { x: 375, y: 450 },
        currentPosition: { x: 375, y: 450 },
        goToPosition: { x: 375, y: 100 },
        direction: { x: 375, y: -500 }
    }, {
        angle: 0,
        maxAngle: 20,
        minAngle: -20,
        speed: 1,
        goToMax: true,
        isWaiting: false,
        isReturning: false,
        isTurningAround: false,
        secondsToWait: 2,
        startPosition: { x: 500, y: 80 },
        currentPosition: { x: 500, y: 80 },
        goToPosition: { x: 200, y: 80 },
        direction: { x: -550, y: 80 }
    }, {
        angle: 0,
        maxAngle: 20,
        minAngle: -20,
        speed: 1,
        goToMax: true,
        isWaiting: false,
        isReturning: false,
        isTurningAround: false,
        secondsToWait: 2,
        startPosition: { x: 350, y: 350 },
        currentPosition: { x: 350, y: 350 },
        goToPosition: { x: 200, y: 350 },
        direction: { x: -400, y: 350 }
    }],
    walls: [{
        x: 75,
        y: 100,
        width: 75,
        height: 75
    }, {
        x: 75,
        y: 250,
        width: 75,
        height: 75
    }, {
        x: 75,
        y: 400,
        width: 75,
        height: 75
    }, {
        x: 630,
        y: 50,
        width: 100,
        height: 100
    }, {
        x: 450,
        y: 160,
        width: 100,
        height: 440
    }],
    goal: {
        x: 650,
        y: 550,
        width: 100,
        height: 50
    }
}, {
    playerPosition: { x: 750, y: 50 },
    enemies: [{
        angle: 0,
        maxAngle: 50,
        minAngle: -50,
        speed: 1,
        goToMax: true,
        isWaiting: false,
        isReturning: false,
        isTurningAround: false,
        secondsToWait: 2,
        startPosition: { x: 150, y: 275 },
        currentPosition: { x: 150, y: 275 },
        goToPosition: { x: 150, y: 275 },
        direction: { x: 800, y: 275 },
        visionRadius: 700,
        squaredVisionRadius: 700 * 700
    }],
    walls: [{
        x: 625,
        y: 20,
        width: 75,
        height: 125
    }, {
        x: 625,
        y: 220,
        width: 75,
        height: 125
    }, {
        x: 325,
        y: 400,
        width: 375,
        height: 75
    }],
    goal: {
        x: 50,
        y: 550,
        width: 100,
        height: 50
    }
}, {
    playerPosition: { x: 100, y: 50 },
    enemies: [{
        angle: 0,
        maxAngle: 35,
        minAngle: -35,
        speed: 1,
        goToMax: true,
        isWaiting: false,
        isReturning: false,
        isTurningAround: false,
        secondsToWait: 2,
        startPosition: { x: 110, y: 200 },
        currentPosition: { x: 110, y: 200 },
        goToPosition: { x: 110, y: 450 },
        direction: { x: 110, y: 500 }
    }, {
        angle: 0,
        maxAngle: 35,
        minAngle: -35,
        speed: 1,
        goToMax: true,
        isWaiting: false,
        isReturning: false,
        isTurningAround: false,
        secondsToWait: 2,
        startPosition: { x: 250, y: 350 },
        currentPosition: { x: 250, y: 350 },
        goToPosition: { x: 500, y: 350 },
        direction: { x: 550, y: 350 }
    }],
    walls: [{
        x: 200,
        y: 0,
        width: 595,
        height: 280
    }, {
        x: 200,
        y: 420,
        width: 595,
        height: 180
    }, {
        x: 70,
        y: 70,
        width: 75,
        height: 75
    }],
    goal: {
        x: 750,
        y: 300,
        width: 50,
        height: 100
    }
}, {
    playerPosition: { x: 40, y: 375 },
    enemies: [{
        angle: 0,
        maxAngle: 35,
        minAngle: -35,
        speed: 1,
        goToMax: true,
        isWaiting: false,
        isReturning: false,
        isTurningAround: false,
        secondsToWait: 2,
        startPosition: { x: 215, y: 50 },
        currentPosition: { x: 215, y: 50 },
        goToPosition: { x: 215, y: 300 },
        direction: { x: 215, y: 350 }
    }, {
        angle: 0,
        maxAngle: 35,
        minAngle: -35,
        speed: 1,
        goToMax: true,
        isWaiting: false,
        isReturning: false,
        isTurningAround: false,
        secondsToWait: 2,
        startPosition: { x: 250, y: 350 },
        currentPosition: { x: 250, y: 350 },
        goToPosition: { x: 500, y: 350 },
        direction: { x: 550, y: 350 }
    }, {
        angle: 0,
        maxAngle: 35,
        minAngle: -35,
        speed: 1,
        goToMax: true,
        isWaiting: false,
        isReturning: false,
        isTurningAround: false,
        secondsToWait: 2,
        startPosition: { x: 700, y: 50 },
        currentPosition: { x: 700, y: 50 },
        goToPosition: { x: 700, y: 300 },
        direction: { x: 700, y: 350 }
    }, {
        angle: 0,
        maxAngle: 35,
        minAngle: -35,
        speed: 1,
        goToMax: true,
        isWaiting: false,
        isReturning: false,
        isTurningAround: false,
        secondsToWait: 2,
        startPosition: { x: 500, y: 100 },
        currentPosition: { x: 500, y: 100 },
        goToPosition: { x: 500, y: 100 },
        direction: { x: -550, y: 100 }
    }],
    walls: [{
        x: 275,
        y: 175,
        width: 75,
        height: 150
    }, {
        x: 0,
        y: 250,
        width: 150,
        height: 75
    }, {
        x: 0,
        y: 420,
        width: 650,
        height: 180
    }, {
        x: 475,
        y: 175,
        width: 75,
        height: 150
    }],
    goal: {
        x: 650,
        y: 0,
        width: 100,
        height: 50
    }
}, {
    playerPosition: { x: 700, y: 550 },
    enemies: [{
        angle: 0,
        maxAngle: 35,
        minAngle: -35,
        speed: 1,
        goToMax: true,
        isWaiting: false,
        isReturning: false,
        isTurningAround: false,
        secondsToWait: 2,
        startPosition: { x: 250, y: 150 },
        currentPosition: { x: 250, y: 150 },
        goToPosition: { x: 250, y: 300 },
        direction: { x: 250, y: 350 }
    }],
    walls: [{
        x: 0,
        y: 0,
        width: 150,
        height: 410
    }, {
        x: 350,
        y: 0,
        width: 450,
        height: 300
    }, {
        x: 0,
        y: 420,
        width: 600,
        height: 180
    }],
    shadow: { x: 250, y: 50 }
}];

var canvas, canvasContext;
var halfCanvasHeight, halfCanvasWidth;
var gameInterval, menuInterval;

var attackSound = new Audio('sounds/attack.wav');
var selectSound = new Audio('sounds/select.wav');
attackSound.volume = .5;
selectSound.volume = .5;

var DEBUG = false;
var directionDelay = 0;
var epsilon = 0.075;
var TURN_RATE = 0.5;

var fieldOfView = getRadians(66);
var halfFoV = fieldOfView / 2;
var halfFoVCos = Math.cos(halfFoV);
var halfFoVSin = Math.sin(halfFoV);
var visionRadius = 130;
var squaredVisionRadius = visionRadius * visionRadius;

var TITLE = 'THE RESCUE';
var INTRO_TEXT = '"This is Spectre... Operation Rescue JS13K. Infiltrate the enemy base and find out what happened to Shadow, our missing agent. If he\'s still alive, get him out of there! Good luck, Ghost!"';
var GAME_STATES = ['menu', 'game', 'controls', 'credits'];
var MENU_OPTIONS = ['Start', 'Controls', 'Credits'];
var SPOTTED_TEXT = 'YOU WERE SPOTTED';
var RETRY_TEXT = 'Press R to try again';
var RETURN_TO_MENU_TEXT = 'Press Enter to return to the menu';
var CURRENT_STATE = GAME_STATES[0];
var SELECTED_OPTION = 0;

var SHOW_END_DIALOGUE = false;
var SHOW_GHOST_END_DIALOGUE = false;
var SHOW_SPECTRE_END_DIALOGUE = false;
var SHOW_MISSION_COMPLETE = false;

var GHOST_DIALOGUE = 'Spectre, I\'ve located Shadow... he\'s unconscious but breathing. Get the chopper ready.';
var SPECTRE_DIALOGUE = 'Well done, Ghost! A chopper is on the way. You\'ll be home in time for dinner!';

var CURRENT_LEVEL;
var RADIUS = 13;
var ATTACK_DISTANCE = RADIUS * 2.25;
var COLLISION_DISTANCE = RADIUS + 3;

var TOTAL_LEVELS = LEVELS.length; // 1, 1, 2, 3, 5, 8, 13
var LEVEL_LOADED = false;

var player, enemies, goal, shadow;

var controls = {
    left_arrow: 37,
    up_arrow: 38,
    right_arrow: 39,
    down_arrow: 40,
    w_key: 87,
    a_key: 65,
    s_key: 83,
    d_key: 68,
    r_key: 82,
    space_key: 32,
    enter_key: 13
};

window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    halfCanvasWidth = canvas.width / 2;
    halfCanvasHeight = canvas.height / 2;
    showStartScreen();
    setUpInput();
}

function setPlayerDefaultValues() {
    player = {
        x: 50,
        y: 50,
        speed: 2,
        keyDown_left: false,
        keyDown_up: false,
        keyDown_right: false,
        keyDown_down: false,
        keyDown_space: false,
        keyDown_r: false,
        keyDown_enter: false,
        seen: false
    };
}

function showStartScreen() {
    setPlayerDefaultValues();
    var framesPerSecond = 60;
    menuInterval = setInterval(updateStartScreen, 1000 / framesPerSecond);
}

function updateStartScreen() {
    clearScreen();
    if (CURRENT_STATE == 'menu') showMenuOptions();
    if (CURRENT_STATE == 'controls') showControls();
    if (CURRENT_STATE == 'credits') showCredits();
    handleStartScreenInput();
}

function showMenuOptions() {
    showTitle();
    showIntroText();
    var menuItemSpacing = 50;
    var startPosition = halfCanvasHeight + 120;
    MENU_OPTIONS.forEach(function(option, index) {
        var height = startPosition + (index * menuItemSpacing);
        drawText(option, halfCanvasWidth, height, 'center');
        if (SELECTED_OPTION == index) {
            colorRect(halfCanvasWidth / 2, height - 40, halfCanvasWidth, 58, 'rgba(206, 26, 26, 0.25)');
        }
    });
}

function showControls() {
    showTitle();
    var controlsText = [
        'MENU',
        'Move - Arrow keys/WASD',
        'Select - Space/Enter',
        'GAME',
        'Move - Arrow keys/WASD',
        'Attack - Space'
    ];
    var controlSpacing = 50;
    var startPosition = 175;
    drawText('CONTROLS', halfCanvasWidth, startPosition, 'center', '45px Calibri');
    startPosition += controlSpacing;
    controlsText.forEach(function(text, index) {
        var height = startPosition + (index * controlSpacing);
        drawText(text, halfCanvasWidth, height, 'center', '25px Calibri');
    });
    drawText('Press space/enter to go back', halfCanvasWidth, canvas.height - 50, 'center', '20px Calibri');
}

function showCredits() {
    showTitle();
    var creditsText = [
        'DESIGN',
        'Jeremy Jackson',
        'PROGRAMMING',
        'Jeremy Jackson',
        'WRITING',
        'Jeremy Jackson'
    ];
    var creditSpacing = 50;
    var startPosition = 175;
    drawText('CREDITS', halfCanvasWidth, startPosition, 'center', '45px Calibri');
    startPosition += creditSpacing;
    creditsText.forEach(function(text, index) {
        var height = startPosition + (index * creditSpacing);
        if (index % 2 != 0) height -= 10;
        drawText(text, halfCanvasWidth, height, 'center', '25px Calibri');
    });
    drawText('Press space/enter to go back', halfCanvasWidth, canvas.height - 50, 'center', '20px Calibri');
}

function handleStartScreenInput() {
    if (player.keyDown_up) {
        selectSound.play();
        SELECTED_OPTION--;
        if (SELECTED_OPTION < 0) {
            SELECTED_OPTION = MENU_OPTIONS.length - 1;
        }
        player.keyDown_up = false;
    }
    if (player.keyDown_down) {
        selectSound.play();
        SELECTED_OPTION++;
        if (SELECTED_OPTION == MENU_OPTIONS.length) {
            SELECTED_OPTION = 0;
        }
        player.keyDown_down = false;
    }

    if (player.keyDown_space || player.keyDown_enter) {
        if (player.keyDown_space) player.keyDown_space = false;
        if (player.keyDown_enter) player.keyDown_enter = false;

        if (CURRENT_STATE == 'menu') {
            CURRENT_STATE = GAME_STATES[SELECTED_OPTION + 1];
            if (CURRENT_STATE == 'game') {
                clearInterval(menuInterval);
                startGame();
            }
        } else {
            SELECTED_OPTION = 0;
            CURRENT_STATE = GAME_STATES[0];
        }
    }
}

function showTitle() {
    drawText(TITLE, halfCanvasWidth, 100, 'center', '78px Calibri');
}

function showIntroText() {
    drawText("MISSION BRIEFING", 100, 150, 'start', '20px Calibri');
    drawText(INTRO_TEXT.substring(0, 74), 100, 175, 'start', '20px Calibri');
    drawText(INTRO_TEXT.substring(74, 148), 100, 200, 'start', '20px Calibri');
    drawText(INTRO_TEXT.substring(148, 190), 100, 225, 'start', '20px Calibri');
    drawText("OBJECTIVES", 100, 275, 'start', '20px Calibri');
    drawText("- Locate Shadow", 100, 300, 'start', '20px Calibri');
    drawText("- Avoid enemy detection", 100, 325, 'start', '20px Calibri');
    drawText("TIPS", halfCanvasWidth, 275, 'start', '20px Calibri');
    drawText("- Use walls and corners to avoid detection", halfCanvasWidth, 300, 'start', '20px Calibri');
    drawText("- Press space to take out enemies when close", halfCanvasWidth, 325, 'start', '20px Calibri');
}

function startGame() {
    SHOW_END_DIALOGUE = false;
    SHOW_GHOST_END_DIALOGUE = false;
    SHOW_SPECTRE_END_DIALOGUE = false;
    SHOW_MISSION_COMPLETE = false;

    CURRENT_LEVEL = 0;
    LEVEL_LOADED = false;
    var framesPerSecond = 65;
    gameInterval = setInterval(updateGame, 1000 / framesPerSecond);
}

function updateGame() {
    if (!LEVEL_LOADED) {
        return loadLevel();
    }
    checkCollisions();
    moveAll();
    drawAll();
}

function goToNextLevel() {
    CURRENT_LEVEL++;
    LEVEL_LOADED = false;
}

function loadLevel() {
    CURRENT_LEVEL = CURRENT_LEVEL || 0;
    setPlayerDefaultValues();
    setPlayerPosition();
    setEnemies();
    if (CURRENT_LEVEL == 6) {
        setShadow();
    } else {
        setGoal();
    }
    setWalls();
    LEVEL_LOADED = true;
}

function setPlayerPosition() {
    player.x = LEVELS[CURRENT_LEVEL].playerPosition.x;
    player.y = LEVELS[CURRENT_LEVEL].playerPosition.y;
}

function setWalls() {
    walls = LEVELS[CURRENT_LEVEL].walls;
}

function setGoal() {
    goal = LEVELS[CURRENT_LEVEL].goal;
}

function setShadow() {
    shadow = LEVELS[CURRENT_LEVEL].shadow;
}

function setEnemies() {
    enemies = JSON.parse(JSON.stringify(LEVELS[CURRENT_LEVEL].enemies));
}

function moveAll() {
    movePlayer();
    moveEnemies();
}

function drawAll() {
    clearScreen();
    if (CURRENT_LEVEL == 6) {
        shadow && drawShadow();
    } else {
        drawGoal();
    }
    enemies.forEach(drawEnemy);
    drawPlayer();
    drawWalls();

    if (SHOW_MISSION_COMPLETE) {
        return handleMissionComplete();
    }
    if (SHOW_END_DIALOGUE) {
        showEndDialogue();
    }
}

function checkCollisions() {
    enemies.forEach(checkPlayerEnemyCollision);
    if (CURRENT_LEVEL == 6) {
        checkPlayerShadowCollision();
    } else {
        checkPlayerGoalCollision();
    }
}

function checkPlayerEnemyCollision(enemy, index) {
    var distance = getDistance(enemy.currentPosition, player);
    if (distance <= ATTACK_DISTANCE && player.attack && !player.seen) {
        attackSound.play();
        enemies.splice(index, 1);
    }
    if (distance <= COLLISION_DISTANCE) {
        enemy.spottedPlayer = true;
    }
}

function doesCollideWithWall(newX, newY) {
    var doesCollide = false;
    walls.forEach(function(wall, index) {
        if (doesCollide) return;
        var distanceX = Math.abs(newX - wall.x - wall.width / 2);
        var distanceY = Math.abs(newY - wall.y - wall.height / 2);

        if (distanceX > (wall.width / 2 + RADIUS)) {
            doesCollide = false;
            return;
        }
        if (distanceY > (wall.height / 2 + RADIUS)) {
            doesCollide = false;
            return;
        }

        if (distanceX <= (wall.width / 2)) {
            doesCollide = true;
            return;
        }
        if (distanceY <= (wall.height / 2)) {
            doesCollide = true;
            return;
        }

        var newDistanceX = distanceX - wall.width / 2;
        var newDistanceY = distanceY - wall.height / 2;
        doesCollide = (newDistanceX * newDistanceX + newDistanceY * newDistanceY <= (RADIUS * RADIUS));
    });
    return doesCollide;
}

function checkPlayerGoalCollision() {
    player.onGoal = player.x > goal.x &&
        player.y > goal.y &&
        player.x < (goal.x + goal.width) &&
        player.y < (goal.y + goal.height);

    if (player.onGoal) {
        goToNextLevel();
    }
}

function checkPlayerShadowCollision() {
    var distance = getDistance(shadow, player);
    if (distance < 70 && enemies.length == 0) {
        SHOW_END_DIALOGUE = true;
    }
}

function drawGoal() {
    colorRect(goal.x, goal.y, goal.width, goal.height, 'rgb(16, 99, 52)');
}

function drawShadow() {
    colorCircle(shadow.x, shadow.y, RADIUS, 'purple');
}

function drawWalls() {
    canvasContext.strokeStyle = 'green';
    walls.forEach(function(wall) {
        canvasContext.beginPath();
        canvasContext.rect(wall.x, wall.y, wall.width, wall.height);
        canvasContext.stroke();
        canvasContext.closePath();
    });
}

function movePlayer() {
    if (player.seen) {
        if (player.keyDown_enter) {
            player.keyDown_enter = false;
            CURRENT_STATE = 'menu';
            clearInterval(gameInterval);
            showStartScreen();
        }
        if (player.keyDown_r) {
            player.keyDown_r = false;
            loadLevel();
        }
        return;
    }

    if (SHOW_MISSION_COMPLETE) {
        if (player.keyDown_enter) {
            player.keyDown_enter = false;
            clearInterval(gameInterval);
            SHOW_MISSION_COMPLETE = false;
            SHOW_END_DIALOGUE = false;
            CURRENT_STATE = 'menu';
            showStartScreen();
        }
        return;
    }

    if (SHOW_END_DIALOGUE) {
        if (player.keyDown_space) {
            player.keyDown_space = false;

            if (SHOW_GHOST_END_DIALOGUE) {
                SHOW_GHOST_END_DIALOGUE = false;
                SHOW_SPECTRE_END_DIALOGUE = true;
            } else {
                SHOW_END_DIALOGUE = false;
                SHOW_SPECTRE_END_DIALOGUE = false;
                SHOW_MISSION_COMPLETE = true;
            }
        }
        return;
    }


    var newX, newY;
    if (player.keyDown_left && player.x >= 0) {
        newX = player.x - player.speed;
        newY = player.y;
        if (doesCollideWithWall(newX, newY)) return;
        player.x -= player.speed;
    }
    if (player.keyDown_up && player.y >= 0) {
        newX = player.x;
        newY = player.y - player.speed;
        if (doesCollideWithWall(newX, newY)) return;
        player.y -= player.speed;
    }
    if (player.keyDown_right && player.x <= canvas.width) {
        newX = player.x + player.speed;
        newY = player.y;
        if (doesCollideWithWall(newX, newY)) return;
        player.x += player.speed;
    }
    if (player.keyDown_down && player.y <= canvas.height) {
        newX = player.x;
        newY = player.y + player.speed;
        if (doesCollideWithWall(newX, newY)) return;
        player.y += player.speed;
    }
}

function moveEnemies() {
    enemies.forEach(function(enemy) {
        if (enemy.isWaiting || enemy.isTurningAround || enemy.spottedPlayer) return;
        var targetPosition = enemy.isReturning ? enemy.startPosition : enemy.goToPosition;

        var distance = getDistance(enemy.currentPosition, targetPosition);
        if (distance <= 0) {
            return toggleEnemyWaitAndReturn(enemy);
        }

        if (enemy.currentPosition.x < targetPosition.x) {
            enemy.currentPosition.x += enemy.speed;
        } else if (enemy.currentPosition.x > targetPosition.x) {
            enemy.currentPosition.x -= enemy.speed;
        }

        if (enemy.currentPosition.y < targetPosition.y) {
            enemy.currentPosition.y += enemy.speed;
        } else if (enemy.currentPosition.y > targetPosition.y) {
            enemy.currentPosition.y -= enemy.speed;
        }
    });
}

function toggleEnemyWaitAndReturn(enemy) {
    enemy.isReturning = !enemy.isReturning;
    enemy.isWaiting = true;
}

function drawPlayer() {
    checkIfSeen();
    var playerColor = 'white';
    if (player.seen) playerColor = 'blue';
    colorCircle(player.x, player.y, RADIUS, playerColor);
    if (player.seen) handleGameOver();
}

function toggleDebug() {
    DEBUG = !DEBUG;
    console.log("debug =", DEBUG);
}

function drawEnemy(enemy) {
    colorCircle(enemy.currentPosition.x, enemy.currentPosition.y, RADIUS, 'red');
    var rotationAngle = getRadians(0);

    if (enemy.spottedPlayer) {
        enemy.currentDirection = { x: player.x, y: player.y };
    } else if (enemy.isTurningAround) {
        if (!enemy.rotations) enemy.rotations = 0;
        enemy.angle = 0;

        var centerPoint = enemy.currentPosition;
        var pointA = enemy.direction;
        var pointB = enemy.currentDirection;
        var deltaRadians = getAngleBetweenThreePoints(centerPoint, pointA, pointB);
        var deltaDegrees = getDegrees(deltaRadians);

        if (Math.floor(deltaDegrees) == 0 || Math.ceil(deltaDegrees) == 0) {
            if (enemy.rotations > 1) {
                enemy.isTurningAround = false;
                enemy.rotations = 0;
                enemy.angle = 0;
                return;
            }
        }

        enemy.angle += TURN_RATE;
        rotationAngle = getRadians(enemy.angle);

        var cos = Math.cos(rotationAngle);
        var sin = Math.sin(rotationAngle);
        var dist = subtractVectors(enemy.currentDirection, enemy.currentPosition);
        var newX = (dist.x * cos - dist.y * sin) + enemy.currentPosition.x;
        var newY = (dist.y * cos + dist.x * sin) + enemy.currentPosition.y;
        enemy.currentDirection = { x: newX, y: newY };
        enemy.rotations++;

    } else if (enemy.isWaiting) {
        if (enemy.goToMax) {
            if (enemy.angle < enemy.maxAngle) {
                enemy.angle += TURN_RATE;
                if (enemy.returnToCenterAngle && enemy.angle == 0) {
                    enemy.isTurningAround = true;
                    var delta = subtractVectors(enemy.startPosition, enemy.goToPosition);
                    setTimeout(function() {
                        if (delta.x != 0) enemy.direction.x *= -1;
                        if (delta.y != 0) enemy.direction.y *= -1;
                        enemy.isWaiting = false;
                    }, directionDelay);
                }
            } else if (enemy.angle >= enemy.maxAngle) {
                setTimeout(function() {
                    enemy.goToMax = false;
                }, 500);
            }
        } else {
            if (enemy.angle > enemy.minAngle) {
                enemy.angle -= TURN_RATE;
            }
            if (enemy.angle <= enemy.minAngle) {
                setTimeout(function() {
                    enemy.goToMax = true;
                    enemy.returnToCenterAngle = true;
                }, 500);
            }
        }
        rotationAngle = getRadians(enemy.angle);

        var cos = Math.cos(rotationAngle);
        var sin = Math.sin(rotationAngle);
        var dist = subtractVectors(enemy.direction, enemy.currentPosition);
        var newX = (dist.x * cos - dist.y * sin) + enemy.currentPosition.x;
        var newY = (dist.y * cos + dist.x * sin) + enemy.currentPosition.y;
        enemy.currentDirection = { x: newX, y: newY };
    } else {
        var cos = Math.cos(rotationAngle);
        var sin = Math.sin(rotationAngle);
        var dist = subtractVectors(enemy.direction, enemy.currentPosition);
        var newX = (dist.x * cos - dist.y * sin) + enemy.currentPosition.x;
        var newY = (dist.y * cos + dist.x * sin) + enemy.currentPosition.y;
        enemy.currentDirection = { x: newX, y: newY };
    }

    enemy.facing = getDirection(enemy.currentPosition, enemy.currentDirection);

    var fovDirections = rotateDirection(enemy.facing, halfFoVCos, halfFoVSin);

    var visionRadiusToUse = visionRadius;
    if (enemy.visionRadius) visionRadiusToUse = enemy.visionRadius;

    fovDirections[0] = scaleVector(fovDirections[0], visionRadiusToUse);
    fovDirections[1] = scaleVector(fovDirections[1], visionRadiusToUse);

    enemy.fovDirections = fovDirections;

    var fovEdge1 = addVectors(enemy.currentPosition, fovDirections[0]);
    var fovEdge2 = addVectors(enemy.currentPosition, fovDirections[1]);
    enemy.fovEdges = [fovEdge1, fovEdge2];

    canvasContext.beginPath();
    canvasContext.moveTo(enemy.currentPosition.x, enemy.currentPosition.y);
    canvasContext.lineTo(fovEdge1.x, fovEdge1.y);
    canvasContext.lineTo(fovEdge2.x, fovEdge2.y);
    canvasContext.moveTo(fovEdge1.x, fovEdge1.y);
    canvasContext.closePath();
    canvasContext.fillStyle = 'rgba(162, 225, 249, 0.5)';
    canvasContext.fill();
}

function colorRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
}

function colorCircle(centerX, centerY, radius, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
    canvasContext.fill();
}

function clearScreen() {
    colorRect(0, 0, canvas.width, canvas.height, 'black');
}

function drawText(text, x, y, textAlign, font) {
    canvasContext.fillStyle = "white";
    canvasContext.font = "35px Calibri";
    if (textAlign) canvasContext.textAlign = textAlign;
    if (font) canvasContext.font = font;
    canvasContext.fillText(text, x, y);
}

function setUpInput() {
    document.addEventListener('keydown', keyPressed);
    document.addEventListener('keyup', keyReleased);
}

function keyPressed(e) {
    var key = e.keyCode || e.which;
    setKey(key, true);
}

function keyReleased(e) {
    var key = e.keyCode || e.which;
    setKey(key, false);
}

function setKey(key, isDown) {
    if (key == controls.left_arrow || key == controls.a_key) {
        player.keyDown_left = isDown;
    }
    if (key == controls.up_arrow || key == controls.w_key) {
        player.keyDown_up = isDown;
    }
    if (key == controls.right_arrow || key == controls.d_key) {
        player.keyDown_right = isDown;
    }
    if (key == controls.down_arrow || key == controls.s_key) {
        player.keyDown_down = isDown;
    }
    if (key == controls.r_key) {
        player.keyDown_r = isDown;
    }
    if (key == controls.space_key) {
        player.keyDown_space = isDown;
        if (player.seen) return;
        player.attack = isDown;
        setTimeout(function() {
            player.attack = false;
            player.keyDown_space = false;
        }, 100);
    }
    if (key == controls.enter_key) {
        player.keyDown_enter = isDown;
        if (player.seen) return;
        setTimeout(function() {
            player.keyDown_enter = false;
        }, 100);
    }
}

function getNormalizedVector(point) {
    var norm = Math.sqrt((point.x * point.x) + (point.y * point.y));
    var normalized = { x: 0, y: 0 };
    if (norm != 0) {
        normalized.x = point.x / norm;
        normalized.y = point.y / norm;
    }
    return normalized;
}

function subtractVectors(v1, v2) {
    return {
        x: (v1.x - v2.x),
        y: (v1.y - v2.y)
    };
}

function addVectors(v1, v2) {
    return {
        x: (v1.x + v2.x),
        y: (v1.y + v2.y)
    };
}

function scaleVector(vector, radius) {
    return { x: vector.x * radius, y: vector.y * radius };
}

function getDistance(v1, v2) {
    var newV = subtractVectors(v1, v2);
    return Math.abs(Math.sqrt(newV.x * newV.x + newV.y * newV.y));
}

function dotProduct(vectorA, vectorB) {
    return (vectorA.x * vectorB.x) + (vectorA.y * vectorB.y);
}

function getDegrees(angle) {
    return angle * (180 / Math.PI);
}

function getRadians(angle) {
    return angle * (Math.PI / 180);
}

function getAngleBetweenThreePoints(centerPoint, pointA, pointB) {
    var a = Math.pow(centerPoint.x - pointA.x, 2) + Math.pow(centerPoint.y - pointA.y, 2);
    var b = Math.pow(centerPoint.x - pointB.x, 2) + Math.pow(centerPoint.y - pointB.y, 2);
    var c = Math.pow(pointB.x - pointA.x, 2) + Math.pow(pointB.y - pointA.y, 2);
    return Math.acos((a + b - c) / Math.sqrt(4 * a * b));
}

function getDirection(location, lookAt) {
    var newDirection = subtractVectors(lookAt, location);
    return getNormalizedVector(newDirection);
}

function squaredLength(vector) {
    return vector.x * vector.x + vector.y * vector.y;
}

function crossProduct(a, b) {
    return (a.x * b.y) - (a.y * b.x);
}

function rotateDirection(direction, cosA, sinA) {
    var xC = direction.x * cosA;
    var yC = direction.y * cosA;
    var xS = direction.x * sinA;
    var yS = direction.y * sinA;
    var rotatedDir = [
        { x: xC - yS, y: xS + yC },
        { x: xC + yS, y: -xS + yC }
    ];
    return rotatedDir;
}

function checkIfSeen() {
    player.seen = false;
    enemies.forEach(function(enemy) {
        enemy.spottedPlayer = false;
        if (isWallBetweenPlayerAndEnemy(enemy)) return;
        var diff = subtractVectors(player, enemy.currentPosition);
        var dot = dotProduct(diff, enemy.facing);
        if (dot <= 0) return;

        var squaredVisionRadiusToCheck = squaredVisionRadius;
        if (enemy.squaredVisionRadius) squaredVisionRadiusToCheck = enemy.squaredVisionRadius;

        if ((squaredLength(diff) - squaredVisionRadiusToCheck) > epsilon) return;
        player.seen = (crossProduct(enemy.fovDirections[0], diff) <= 0) && (crossProduct(diff, enemy.fovDirections[1]) <= 0);
        enemy.spottedPlayer = player.seen;
    });
}

function checkIfLinesIntersect(lineA, lineB) {
    var x1 = lineA[0].x;
    var y1 = lineA[0].y;
    var x2 = lineA[1].x;
    var y2 = lineA[1].y;

    var x3 = lineB[0].x;
    var y3 = lineB[0].y;
    var x4 = lineB[1].x;
    var y4 = lineB[1].y;

    var x = ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) / ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));
    var y = ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) / ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));
    if (isNaN(x) || isNaN(y)) {
        return false;
    } else {
        if (x1 >= x2) {
            if (!(x2 <= x && x <= x1)) { return false; }
        } else {
            if (!(x1 <= x && x <= x2)) { return false; }
        }
        if (y1 >= y2) {
            if (!(y2 <= y && y <= y1)) { return false; }
        } else {
            if (!(y1 <= y && y <= y2)) { return false; }
        }
        if (x3 >= x4) {
            if (!(x4 <= x && x <= x3)) { return false; }
        } else {
            if (!(x3 <= x && x <= x4)) { return false; }
        }
        if (y3 >= y4) {
            if (!(y4 <= y && y <= y3)) { return false; }
        } else {
            if (!(y3 <= y && y <= y4)) { return false; }
        }
    }
    return true;
}

function isWallBetweenPlayerAndEnemy(enemy) {
    var isWallBetween = false;
    var lineFromPlayerToEnemy = [{
        x: player.x,
        y: player.y
    }, {
        x: enemy.currentPosition.x,
        y: enemy.currentPosition.y,
    }];

    walls.forEach(function(wall) {
        if (isWallBetween) return;
        var topWallLine = [{
            x: wall.x,
            y: wall.y
        }, {
            x: wall.x + wall.width,
            y: wall.y
        }];

        var rightWallLine = [{
            x: wall.x + wall.width,
            y: wall.y
        }, {
            x: wall.x + wall.width,
            y: wall.y + wall.height
        }];

        var bottomWallLine = [{
            x: wall.x,
            y: wall.y + wall.height
        }, {
            x: wall.x + wall.width,
            y: wall.y + wall.height
        }];

        var leftWallLine = [{
            x: wall.x,
            y: wall.y
        }, {
            x: wall.x,
            y: wall.y + wall.height
        }];

        isWallBetween = (checkIfLinesIntersect(lineFromPlayerToEnemy, topWallLine) ||
            checkIfLinesIntersect(lineFromPlayerToEnemy, rightWallLine) ||
            checkIfLinesIntersect(lineFromPlayerToEnemy, bottomWallLine) ||
            checkIfLinesIntersect(lineFromPlayerToEnemy, leftWallLine));
    });

    return isWallBetween;
}

function handleGameOver() {
    var fillStyle = canvasContext.fillStyle = 'rgba(0, 0, 0, 0.5)';
    colorRect(0, 0, canvas.width, canvas.height, fillStyle);
    drawText(SPOTTED_TEXT, halfCanvasWidth, halfCanvasHeight - 25, 'center');
    drawText(RETRY_TEXT, halfCanvasWidth, halfCanvasHeight + 25, 'center', '25px Calibri');
    drawText(RETURN_TO_MENU_TEXT, halfCanvasWidth, halfCanvasHeight + 60, 'center', '25px Calibri');
}

function showEndDialogue() {
    if (!SHOW_GHOST_END_DIALOGUE && !SHOW_SPECTRE_END_DIALOGUE) {
        SHOW_GHOST_END_DIALOGUE = true;
    }

    var fillStyle = canvasContext.fillStyle = 'rgba(80, 82, 84, 0.25)';
    colorRect(0, halfCanvasHeight, canvas.width, halfCanvasHeight, fillStyle);
    if (SHOW_GHOST_END_DIALOGUE) {
        drawText('GHOST', halfCanvasWidth / 8, halfCanvasHeight + 35, 'start');
        drawText(GHOST_DIALOGUE.substring(0, 49), halfCanvasWidth / 8, halfCanvasHeight + 70, 'start');
        drawText(GHOST_DIALOGUE.substring(49), halfCanvasWidth / 8, halfCanvasHeight + 100, 'start');
        drawText("PRESS SPACE TO CONTINUE", 600, canvas.height - 20, 'start', '15px Calibri');
    }
    if (SHOW_SPECTRE_END_DIALOGUE) {
        drawText('SPECTRE', halfCanvasWidth / 8, halfCanvasHeight + 35, 'start');
        drawText(SPECTRE_DIALOGUE.substring(0, 50), halfCanvasWidth / 8, halfCanvasHeight + 70, 'start');
        drawText(SPECTRE_DIALOGUE.substring(50), halfCanvasWidth / 8, halfCanvasHeight + 100, 'start');
        drawText("PRESS SPACE TO CONTINUE", 600, canvas.height - 20, 'start', '15px Calibri');
    }
}

function handleMissionComplete() {
    var fillStyle = canvasContext.fillStyle = 'rgba(0, 0, 0, 0.5)';
    colorRect(0, 0, canvas.width, canvas.height, fillStyle);
    drawText("MISSION COMPLETE", halfCanvasWidth, halfCanvasHeight - 25, 'center');
    drawText("You located Shadow. Good job, soldier!", halfCanvasWidth, halfCanvasHeight + 25, 'center', '25px Calibri');
    drawText(RETURN_TO_MENU_TEXT, halfCanvasWidth, halfCanvasHeight + 80, 'center', '25px Calibri');
}