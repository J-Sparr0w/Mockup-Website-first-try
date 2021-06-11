const hamBtn = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')
const mainTitle = document.getElementById('main-title')
let letters
const time = 100
let i = 0
function toggleHam() {
    navList.classList.toggle('show')
}
function titleLetters() {
   letters= mainTitle.innerHTML.split('')
   mainTitle.innerHTML=''
}


function displayName() {
  
    mainTitle.innerHTML =mainTitle.innerHTML + letters[i]
      i++
    if (i > 10)
    {
        clearInterval(timerId)
          }
   
}
// setTimeout(displayName, time)
// titleLetters()
// displayName()
titleLetters()
let timerId=setInterval(displayName, time)
hamBtn.addEventListener('click',toggleHam)