const dataKeyBoardRu = {
    ['ё']: 'Ё',
    [1]: '!',
    [2]: '"',
    [3]: '№',
    [4]: ';',
    [5]: '%',
    [6]: ':',
    [7]: '?',
    [8]: '*',
    [9]: '(',
    ['0']: ')',
    ['-']: '_',
    ['=']: '+',
    ["Backspace"]: "Backspace",
    ['Tab']: 'Tab',
    ['й']: 'Й',
    ['ц']: 'Ц',
    ['у']: 'У',
    ['к']: 'К',
    ['е']: 'Е',
    ['н']: 'Н',
    ['г']: 'Г',
    ['ш']: 'Ш',
    ['щ']: 'Щ',
    ['з']: 'З',
    ['х']: 'Х',
    ['ъ']: 'Ъ',
    ['\\']: '\/',
    ['Capslock']: 'Capslock',
    ['ф']: 'Ф',
    ['ы']: 'Ы',
    ['в']: 'В',
    ['а']: 'А',
    ['п']: 'П',
    ['р']: 'Р',
    ['о']: 'О',
    ['л']: 'Л',
    ['д']: 'Д',
    ['ж']: 'Ж',
    ['э']: 'Э',
    ['Enter']: 'Enter',
    ['Shift']: 'Shift',
    ['я']: 'Я',
    ['ч']: 'Ч',
    ['с']: 'С',
    ['м']: 'М',
    ['и']: 'И',
    ['т']: 'Т',
    ['ь']: 'Ь',
    ['б']: 'Б',
    ['ю']: 'Ю',
    ['.']: ',',
    //['Shift']: 'Shift',
    ['▲']: '▲',
    ['Delete']: 'Delete',
    ['Ctrl']: 'Ctrl',
    ['Win']: 'Win',
    ['Alt']: 'Alt',
    ['Space']: 'Space',
    //['Alt']: 'Alt',
    //['Fn']: 'Fn',
    //['Ctrl']: 'Ctrl',
    ['◄']: '◄',
    ['▼']: '▼',
    ['►']: '►',
}

const dataKeyBoardEn = {
    ['\`']: '~',
    [1]: '!',
    [2]: '@',
    [3]: '#',
    [4]: '$',
    [5]: '%',
    [6]: '^',
    [7]: '&',
    [8]: '*',
    [9]: '(',
    ['0']: ')',
    ['-']: '_',
    ['=']: '+',
    ["Backspace"]: "Backspace",
    ['Tab']: 'Tab',
    ['q']: 'Q',
    ['w']: 'W',
    ['e']: 'E',
    ['r']: 'R',
    ['t']: 'T',
    ['y']: 'Y',
    ['u']: 'U',
    ['i']: 'I',
    ['o']: 'O',
    ['p']: 'P',
    ['[']: '{',
    [']']: '}',
    ['\\']: '\|',
    ['Capslock']: 'Capslock',
    ['a']: 'A',
    ['s']: 'S',
    ['d']: 'D',
    ['f']: 'F',
    ['g']: 'G',
    ['h']: 'H',
    ['j']: 'J',
    ['k']: 'K',
    ['l']: 'L',
    [';']: ':',
    ['\'']: '\"',
    ['Enter']: 'Enter',
    ['Shift']: 'Shift',
    ['z']: 'Z',
    ['x']: 'X',
    ['c']: 'C',
    ['v']: 'V',
    ['b']: 'B',
    ['n']: 'N',
    ['m']: 'M',
    [',']: '<',
    ['.']: '>',
    ['/']: '?',
    //['Shift']: 'Shift',
    ['▲']: '▲',
    ['Delete']: 'Delete',
    ['Ctrl']: 'Ctrl',
    ['Win']: 'Win',
    ['Alt']: 'Alt',
    ['Space']: 'Space',
    //['Alt']: 'Alt',
    //['Fn']: 'Fn',
    //['Ctrl']: 'Ctrl',
    ['◄']: '◄',
    ['▼']: '▼',
    ['►']: '►',
}

let keyBoard;
let languageDefoult = false;

// Массив keycode без fn
let keyCode = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 46, 17, 91, 18, 32, 37, 40, 39];
/* document.addEventListener('keydown', (e)=>{
    keyCode.push(e.keyCode)
    console.log(keyCode)
}) */


function createKeyBoard() {


  //создание виртуальной клавиатуры
  keyBoard = document.createElement('div');
  keyBoard.classList.add('keyboard');

  //создание 5 строк внутри клавиатуры
  for( let i = 0; i < 5; i++){
    let row = document.createElement('div');
    row.classList.add('row');
    row.classList.add(`row-${i}`)
    keyBoard.appendChild(row)
  }

  //Создание и добавление кнопок по 5 строкам клавиатуры
  for(let i = 0; i < Object.keys(dataKeyBoardRu).length; i++){

    let btn = createButton();
    btn.innerText = `${Object.keys(dataKeyBoardRu)[i]}`;
    btn.setAttribute('keycode', keyCode[i]);

    if(i < 14){
        keyBoard.querySelector('.row-0').appendChild(btn);
    } else if(i < 28){
        keyBoard.querySelector('.row-1').appendChild(btn);
    } else if(i < 41){
        keyBoard.querySelector('.row-2').appendChild(btn);
    } else if(i < 54){
        keyBoard.querySelector('.row-3').appendChild(btn);
    } else{
        keyBoard.querySelector('.row-4').appendChild(btn);
    }
  }

  document.body.appendChild(keyBoard);

  //Отмена выделения виртуальных клавиш при нажатии мыши
  keyBoard.addEventListener('mousedown', (e)=>{

    e.preventDefault();

  })

  //Добавление в поле вводе значения кнопки вирт.клав. при клике
  document.addEventListener('click', (e)=>{

    const textArea = document.querySelector('textarea');
    
    if(e.target.className === 'button'){
        textArea.value += e.target.innerText;
    }

    if(e.target.innerText === 'Enter'){
        textArea.value += '\n'
    }

    if(e.target.innerText === 'Backspace'){
        textArea.value = textArea.value.slice(0,-1);
    }

  }) 

  document.addEventListener('keydown',(e)=>{
    const textArea = document.querySelector('textarea');
    let btns = document.getElementsByClassName('button');

    if(e.key === 'Shift'){
        if(!languageDefoult){
            downShiftRu();
        } else{
            downShiftEn()
        }   
    }

    // изменение раскладки языка
    if(e.ctrlKey && e.altKey){
        if(languageDefoult){
            changeRuKeyboard();
           languageDefoult = false;
        } else{
            changeEnKeyboard();
            languageDefoult = true;
        }
    }

    if(e.key === 'Enter'){
        textArea.value += '\n'
    }

    if(e.key === 'Backspace'){
        textArea.value = textArea.value.slice(0,-1);
    }
    if(e.code === 'KeyZ'){
        textArea.value += e.key;
    }

    for(let i = 0; i < btns.length; i++){
        
        if(e.keyCode === +btns[i].getAttribute('keycode') &&  btns[i].className === 'button' ){
            textArea.value += btns[i].innerText;
        }
    } 

    console.log(e.keyCode)
    console.dir(btns[23].getAttribute('keycode'))
 })

  document.addEventListener('keyup',(e)=>{

    if(e.key === 'Shift'){
        if(!languageDefoult){
            upShiftRu();
        } else{
            upShiftEn()
        }
    }

  })
  // добавление класса размера кнопки Space
  let btns = document.querySelectorAll('.button');
  let spaceSize = Array.from(btns).filter(el=> el.innerHTML == 'Space');
  console.log(spaceSize[0])
  spaceSize[0].classList.add('space');
  
  //Добавление класса цвета для спец. кнопок
  const arrColorBtn = ['Ctrl',"Backspace",'Tab','Capslock','Enter','Shift','▲','Delete','Win','Space','Alt',/* 'Fn' ,*/'◄','▼','►'];
  for( let i = 0; i < arrColorBtn.length; i++){
    let btns = document.querySelectorAll('.button');
    let colorBtn = Array.from(btns).filter(el=> el.innerHTML == arrColorBtn[i]);
    colorBtn[0].classList.add('special-button-color');
  }



}

//Изменение на En Клавиатуру
function changeEnKeyboard(){
    const btns = document.querySelectorAll('.button');
    for(let i = 0; i < Object.keys(dataKeyBoardEn).length; i++){
      btns[i].innerText = `${Object.keys(dataKeyBoardEn)[i]}`; 
    }
}

//Изменение на Ру клавиатуру
function changeRuKeyboard(){
    const btns = document.querySelectorAll('.button');
    for(let i = 0; i < Object.keys(dataKeyBoardRu).length; i++){
      btns[i].innerText = `${Object.keys(dataKeyBoardRu)[i]}`; 
    }
}

 //Изменение En клавиатуры на принажатии на Shift
function downShiftEn(){
    const btns = document.querySelectorAll('.button');
    for(let i = 0; i < Object.values(dataKeyBoardEn).length; i++){
      btns[i].innerText = `${Object.values(dataKeyBoardEn)[i]}`; 
    }
}

//Возврат En клавиатуры на отпускании Shift
function upShiftEn(){
    const btns = document.querySelectorAll('.button');
    for(let i = 0; i < Object.keys(dataKeyBoardEn).length; i++){
      btns[i].innerText = `${Object.keys(dataKeyBoardEn)[i]}`; 
    }
} 

//Изменение РУ клавиатуры на принажатии на Shift
function downShiftRu(){
    const btns = document.querySelectorAll('.button');
    for(let i = 0; i < Object.values(dataKeyBoardRu).length; i++){
      btns[i].innerText = `${Object.values(dataKeyBoardRu)[i]}`; 
    }
}

//Возврат РУ клавиатуры на отпускании Shift
function upShiftRu(){
    const btns = document.querySelectorAll('.button');
    for(let i = 0; i < Object.keys(dataKeyBoardRu).length; i++){
      btns[i].innerText = `${Object.keys(dataKeyBoardRu)[i]}`; 
    }
}

function createButton(){
    const button = document.createElement('div');
    button.classList.add('button');
    return button;
}

export { createKeyBoard };
