const book = document.querySelector(".book-top")
const container = document.querySelector(".container")
const pauseBtn = document.querySelector(".pauseBtn")
const myVideo = document.querySelector(".myVideo")
const quality = document.querySelector(".quality")

const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {            
            box.classList.remove('show')
        }
    })
}

container.addEventListener("mouseover" ,  ()=>{
    book.style.display = "none"
    console.log("worked")
})
container.addEventListener("mouseleave" , ()=>{
    book.style.display = "block"
    console.log("worked2")
})

let isPlaying = true;

pauser()
function pauser(){
    console.log(isPlaying)
    pauseBtn.addEventListener("click" , ()=>{
        if(isPlaying === true){
            myVideo.pause()
            isPlaying = false
            console.log(isPlaying)
            pauseBtn.innerHTML = `<i class="fa-solid fa-play"></i>`
        }else{
            myVideo.play()
            isPlaying = true
            console.log(isPlaying)
            pauseBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`
        }
        
    })
}