import './sass/main.scss';
import { createTextArea } from './js/textarea/textaria';
import { createKeyBoard } from './js/keyboard/keyboard';

createTextArea();
createKeyBoard();

const description = document.createElement('p');
description.innerHTML = 'Клавиатура создана в операционной системе Windows <br> Для переключения языка комбинация: левыe CTRL + ALT';
description.style.textAlign = 'center';
document.body.appendChild(description);
