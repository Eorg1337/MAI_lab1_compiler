const robot = {
    x: 0,
    y: 0,
    direction: 'right'
    };
    function moveRobot(command) {
            switch(command) {
            case 'f':
        switch(robot.direction) {
        case 'right':
        robot.x += 1;
        break;
        case 'left':
        robot.x -= 1;
        break;
        case 'up':
        robot.y -= 1;
        break;
        case 'down':
        robot.y += 1;
        break;
    }
    break;
            case 'r':
        switch(robot.direction) {
        case 'right':
        robot.y +=1,
        robot.direction = 'down';
        break;
        case 'left':
        robot.y -=1;
        robot.direction = 'up';
        break;
        case 'up':
        robot.x +=1,
        robot.direction = 'right';
        break;
        case 'down':
        robot.x -=1,
        robot.direction = 'left';
        break;
    }
    break;
            case 'l':
        switch(robot.direction) {
        case 'right':
        robot.y -=1,
        robot.direction = 'up';
        break;
        case 'left':
        robot.y +=1;
        robot.direction = 'down';
        break;
        case 'up':
        robot.x -=1,
        robot.direction = 'left';
        break;
        case 'down':
        robot.x +=1,
        robot.direction = 'right';
        break;
    }
    break;
    }
    console.log("Координаты робота",robot)
    if(robot.x < 0 || robot.x > 9 || robot.y < 0 || robot.y > 9) {
    alert('Робот вышел за пределы поля!');
    console.log('Робот вышел за пределы поля!')
    }
    else {
    const robotElement = document.getElementById('robot');
    robotElement.style.left = robot.x * 50 + 'px';
    robotElement.style.top = robot.y * 50 + 'px';
    robotElement.style.transform = `rotate(${getRotation(robot.direction)}deg)`;
    }
    }
    
    function getRotation(direction) {
    switch(direction) {
    case 'right':
    return 0;
    case 'up':
    return -90;
    case 'left':
    return -180;
    case 'down':
    return 90;
    }
    }

    
    function analyzeInput(input) {
    const commands = input.split(',');
    for(let i = 0; i < commands.length; i++) {
    const command = commands[i].trim();
    if(command !== 'f' && command !== 'r' && command !== 'l'&& command!=='.') {
    alert(`Неверная команда "${command}"`);
    console.log(`Неверная команда "${command}"`)
    return;
    }
    moveRobot(command);
    }
    }
    function lexicalAnylazor(input) {
        console.log("Входная строка",inputElement.value)
        const commands = input.split("");
        for(let i = 0; i < commands.length; i++) {
        const command = commands[i].trim();
        if(!command){
        alert('Введена пустая команда')
        console.log('Введена пустая команда')
        }
        if(command !== 'f' && command !== 'r' && command !== 'l'&& command!=',' && command!='.') {
        alert(`Ошибка в лексическом анализе "${command}"`);
        console.log(`Ошибка в лексическом анализе "${command}"`)
        return;
        } 
        if(commands[commands.length-1]!=="."){
        alert('Ошибка, незаконченная последовательность комманд')
        console.log('Ошибка, незаконченная последовательность комманд')
        return;
        }
        }
        buttonElement.addEventListener('click', function() {
        analyzeInput(inputElement.value);
        });
    }
    const inputElement = document.getElementById('input');
    const buttonElement = document.getElementById('button');
    buttonElement.addEventListener('click', function() {
    lexicalAnylazor(inputElement.value);
    });
    /*if(lexicalAnylazor){
    buttonElement.addEventListener('click', function() {
    analyzeInput(inputElement.value);
    });
}*/
