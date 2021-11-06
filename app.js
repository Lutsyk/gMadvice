const url = 'https://api.adviceslip.com/advice/'
const adviceArea = document.querySelector('.advice-slip');
const submitBtn = document.querySelector('#btn')
const input = document.querySelector('#numberOfAdvice')
const screen1 = document.querySelector('.screen1')

input.addEventListener('change', event => {
    
    if(input.value > 4 && input.value < 21 ){
        console.log(parseInt(input.value))
        input.classList.remove('invalid');
        input.classList.add('valid');
        countAdvice = parseInt(input.value)
        submitBtn.disabled = false; 
    } else {
        submitBtn.disabled = true;
        console.log(input.value)
        input.classList.add('invalid');
    }
    
});

submitBtn.addEventListener('click', event => {
    event.preventDefault()
    screen1.classList.add('up');
    getSeveralAdvice(countAdvice)
})
