function moveRobot() {
    var commands = document.getElementById('commands').value;
    var robot = document.getElementById('robot');
    var currentPosition = {x: 0, y: 0};
    
    var commandsArray = commands.split(',');
    
    for (var i = 0; i < commandsArray.length; i++) {
    var command = commandsArray[i];
    
    if (command === 'f') {
    currentPosition.y++;
    }
    else if (command === 'r') {
    currentPosition.x++;
    }
    else if (command === 'l') {
    currentPosition.x--;
    }
    else {
    alert('Ошибка: неверный символ команды');
    return;
    }
    
    if (currentPosition.x < 0 || currentPosition.x > 9 || currentPosition.y < 0 || currentPosition.y > 9) {
    alert('Ошибка: робот вышел за пределы поля');
    return;
    }
    
    robot.style.top = currentPosition.y * 50 + 'px';
    robot.style.left = currentPosition.x * 50 + 'px';
    }
    }