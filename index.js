//Завдання 2 з підручника https://learn.javascript.ru/ifelse

let company = prompt ('Яка офіційна назва JavaScript?');
if (company == 'ECMAScript') {
    alert('Так, ти молодець!');
} else {
    alert('Подумай добре.');
}

//Завдання 3

let symbolOfNumber = prompt('Скажи мені будь яке число.');
if (symbolOfNumber > 0) {
    alert( '1' );
} else if (symbolOfNumber < 0){
    alert('-1');
} else {
    alert('0');
}

//Завдання 4

result = (a + b < 4) ? 'Надто мале число' : 'Надто велике число';

//Завдання 5

message = (login == 'Співробітник') ? 'Привіт!' : 
    (login == 'Директор') ? 'Доброго дня' :
    (login == '') ? 'Не зареєстровано' : 
    '';