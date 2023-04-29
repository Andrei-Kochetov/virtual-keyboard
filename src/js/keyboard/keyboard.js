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
    ['Shift']: 'Shift',
    ['▲']: '▲',
    ['Delete']: 'Delete',
    ['Ctrl']: 'Ctrl',
    ['Win']: 'Win',
    ['Alt']: 'Alt',
    ['Space']: 'Space',
    ['Alt']: 'Alt',
    ['Fn']: 'Fn',
    ['Ctrl']: 'Ctrl',
    ['◄']: '◄',
    ['▼']: '▼',
    ['►']: '►',
}


let keyBoard;


function createKeyBoard() {
  keyBoard = document.createElement('div');
  keyBoard.classList.add('keyboard');
  for( let i = 0; i < 5; i++){
    let row = document.createElement('div');
    row.classList.add('row');
    row.classList.add(`row-${i}`)
    keyBoard.appendChild(row)
  }
  for(let i = 0; i < Object.keys(dataKeyBoardRu).length; i++){
    let btn = createButton();
    btn.innerText = `${Object.keys(dataKeyBoardRu)[i]}`;
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

  document.addEventListener('keydown',(e)=>{
    if(e.key === 'Shift'){
        downShiftRu();
    }
  })
  document.addEventListener('keyup',(e)=>{
    if(e.key === 'Shift'){
        upShiftRu();
    }
  })
  
  const arrColorBtn = ['Ctrl',"Backspace",'Tab','Capslock','Enter','Shift','▲','Delete','Win','Space','Alt','Fn','◄','▼','►'];
  for( let i = 0; i < arrColorBtn.length; i++){
    let btns = document.querySelectorAll('.button');
    let colorBtn = Array.from(btns).filter(el=> el.innerHTML == arrColorBtn[i]);
    colorBtn[0].classList.add('special-button-color');
  }
  let btns = document.querySelectorAll('.button');
  let spaceSize = Array.from(btns).filter(el=> el.innerHTML == 'Space');
  spaceSize[0].classList.add('space');
  
}
function downShiftRu(){
    const btns = document.querySelectorAll('.button');
    for(let i = 0; i < Object.values(dataKeyBoardRu).length; i++){
      btns[i].innerText = `${Object.values(dataKeyBoardRu)[i]}`; 
    }
}
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
