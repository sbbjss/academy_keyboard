let keyboard = document.querySelectorAll('.keyboard');
let keys = document.querySelectorAll('.button.key');
let display = document.querySelector('.display');
let clear = document.querySelector('.button.clear');
let text = document.createElement('p');

console.log(keys);

for (let key of keys) {
  key.onclick = function () {
    display.append(key.textContent);
    console.log('Вы нажали на клавишу!');
  };
}

clear.onclick = function () {
  display.textContent = '';
  console.log('Вы очистили строку!');
}


  

/*
Кнопки с буквами и «пробел» имеют класс key, а дисплей — класс display.

При клике на кнопку с буквой или пробелом текстовое содержимое этой кнопки должно добавляться к текстовому содержимому дисплея.

Кнопка очистки имеет класс clear. При клике на неё весь текст внутри дисплея должен удаляться, для этого в текстовое содержимое дисплея нужно записать пустую строку.
*/
