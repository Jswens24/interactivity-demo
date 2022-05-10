// console.log('Hello World')

let count = 0;

const counterText = document.querySelector('#counter');

// console.log(counterText);
const plusBtn = document.querySelector('#plus-btn');


plusBtn.addEventListener('click', () => {
    count++
    counterText.textContent = count
})

const minusBtn = document.querySelector('#minus-btn');

const decrease = () => {
    count--
    counterText.textContent = count
}

minusBtn.addEventListener('click', decrease)

const resetBtn = document.querySelector('#reset-btn');

resetBtn.addEventListener('click', () => {
    count = 0
    counterText.textContent = count
    alert('You reset the count')
});


//////////////////////////////////////////

const fbBtn = document.querySelector('.theme-buttons')

// const inspectingEvent = (e) => {
//     console.log(e.target);
// }

// fbBtn.addEventListener('click', inspectingEvent)


const themeBtns = document.querySelectorAll('.theme-buttons');

const selectTheme = (event) => {
    const theme = event.target.textContent

    document.querySelector('body').className = theme;
    document.querySelector('main').className = theme;

    const buttons = document.querySelectorAll('button')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = theme
    }
}

for (let i = 0; i < themeBtns.length; i++) {
    themeBtns[i].addEventListener('click', selectTheme)
}


///////////////////////////////////////////

const inputField = document.querySelector('#food-input');
const foodBtn = document.querySelector('#food-btn');
const foodList = document.querySelector('#food-list');

let newFood = '';

const newFoodHandler = (event) => {
    newFood = event.target.value
}

const addNewFood = () => {
    let newPara = document.createElement('p');
    newPara.textContent = newFood;

    foodList.appendChild(newPara);

    inputField.value = '';
}

inputField.addEventListener('change', newFoodHandler)
foodBtn.addEventListener('click', addNewFood)




