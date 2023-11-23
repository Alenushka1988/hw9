//Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.

// const changeButton = document.getElementById(`changeButton`);
// const redSquare= document.getElementById(`redSquare`);
// changeButton.addEventListener(`click`, function(){
//     redSquare.style.backgroundColor = `green`;
//     redSquare.style.width = `100px`;
//     redSquare.style.height = `100px`;
// });

// Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px.
// const increaseButton = document.getElementById(`increaseButton`);
// const square = document.getElementById(`square`);
// increaseButton.addEventListener(`click`, function(){
//     let currentWidth = square.clientWidth;
//     let currentHeight=square.clientHeight;
//     square.style.width=(currentWidth + 20)+`px`;
//     square.style.height=(currentHeight +20) +`px`;
// })

// Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.
// const changeColorButton = document.getElementById(`changeColorButton`);
// const pinkSquare = document.getElementById(`pinkSquare`);
// changeColorButton.addEventListener(`click`, function(){
//     pinkSquare.classList.add(`blueColor`);
//     const updatedColor=window.getComputedStyle(pinkSquare). backgroundColor;
//     console.log(`обновленный цвет квадрата:`, updatedColor);
// });

// // Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.
// const addParagraphButton = document.getElementById(`addParagraphButton`);
// const rootDiv = document.querySelector(`.root`);
// addParagraphButton.addEventListener(`click`, function(){
//     const newParagraph = document.createElement(`p`);
//     newParagraph.textContent=`Это произвольный текст`;
//     newParagraph.classList.add(`blueParagraph`);
//     rootDiv.appendChild(newParagraph);
// });

// Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.
const addParagraphButton = document.getElementById(`addParagraphButton`);
const rootDiv = document.querySelector(`.root`);
let i=0;
addParagraphButton.addEventListener(`click`, function(){
    const newParagraph = document.createElement(`p`);
    if(i%2===0){
        newParagraph.textContent=`Синий текст`;
        newParagraph.classList.add(`blueParagraph`);
    }else{
        newParagraph.textContent=`Зеленый текст`;
        newParagraph.classList.add(`greenParagraph`);
    }
   i++;
   rootDiv.appendChild(newParagraph);
});