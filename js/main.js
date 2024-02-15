// let filtersBtn = document.getElementById('filters')
// let filtersContent = document.querySelector('.training__filters')
// let training = document.getElementById('training__display')

// filtersBtn.onclick = function(){
//     filtersContent.classList.toggle('active')
//     filtersContent.style.display = 'block'
//     training.style.opacity = "0.2"
// }

// document.addEventListener('click', (e) => {
//     const click = e.composedPath().includes(filtersBtn);
//     if ( !click ) {
//         training.style.opacity = "1"
//         filtersContent.style.display = 'none'
//         filtersContent.classList.remove('active')
//     }
// })

// let sortBtn = document.getElementById('sort')
// let sortContent = document.querySelector('.training__sort')

// sortBtn.onclick = function(){
//     sortContent.classList.toggle('active')
//     sortContent.style.display = 'block'
//     training.style.opacity = "0.2"
// }

// document.addEventListener('click', (e) => {
//     const click = e.composedPath().includes(sortBtn);
//     if ( !click ) {
//         sortContent.style.display = 'none'
//         sortContent.classList.remove('active')
//     }
// })

const filtersPopup = document.getElementById('filters__popup')
const filtersBtn = document.getElementById('filters')
const filtersContainer = document.getElementById('filters__container')
const filtersBody = document.getElementById('filters__body')

filtersBtn.addEventListener('click', function(e){
    e.preventDefault();
    filtersPopup.classList.add('active')
    filtersBody.classList.add('active');
})

filtersContainer.addEventListener('click', (e) => {
    filtersPopup.classList.remove('active');
})

const sortPopup = document.getElementById('sort__popup')
const sortBtn = document.getElementById('sort')
const sortContainer = document.getElementById('sort__container')
const sortBody = document.getElementById('sort__container')

sortBtn.addEventListener('click', function(e){
    e.preventDefault();
    sortPopup.classList.add('active')
    sortBody.classList.add('active');
})

sortContainer.addEventListener('click', (e) => {
    sortPopup.classList.remove('active');
})