// header 
let menuIconH = document.querySelector("header .menu-icon")
let menuH = document.querySelector("header .menu")

let allLiMenuH = document.querySelectorAll("header .menu li")

allLiMenuH.forEach((e) => {
    e.addEventListener("click", function () {
        allLiMenuH.forEach((e) => {
            e.classList.remove("active")
        })
        e.classList.add("active")
    })
})

menuIconH.addEventListener("click", function (e) {
    menuH.classList.add("none")
    setTimeout(() => {
        menuIconH.classList.toggle("active")
        menuH.classList.toggle("active")    
    }, 1);
    if (menuH.classList.contains("none")) {
        menuH.classList.remove("none")
    }
})
// portfolio
let allLiMenuP = document.querySelectorAll(".portfolio .container .menu li")
let allImgsP = document.querySelectorAll(".portfolio .container .boxes .box")

allLiMenuP.forEach((button) => {
    button.addEventListener("click", function () {
        allLiMenuP.forEach((buttons) => {
            buttons.classList.remove("active")
        })
        button.classList.add("active")
        for (let i = 0; i < allImgsP.length; i++) {
            if (button.innerText === "All") {
                allImgsP[i].classList.remove("none")
                setTimeout(() => {
                    allImgsP[i].style.opacity = 1
                }, 300);
            }else if (allImgsP[i].dataset.type === button.innerText) {
                allImgsP[i].classList.remove("none")
                allImgsP[i].style.opacity = 1
            } else {
                allImgsP[i].style.opacity = 0
                setTimeout(() => {
                    allImgsP[i].classList.add("none")
                }, 300);
            }
        }
    })
})
// footer
let dateSpan = document.querySelector("footer .copyright .date")

dateSpan.innerText = new Date().getFullYear()
// scroll events 

let home = document.querySelector(".landing"),
services = document.querySelector(".services"),
portfolio = document.querySelector(".portfolio"),
about = document.querySelector(".about"),
contact = document.querySelector(".contact")

let header = document.querySelector("header")

let sections = [home, services, portfolio, about, contact]
let postions = []

for (let i = 0; i < sections.length; i++) {
    postions.push(sections[i].offsetTop)
}

// window.onscroll(() => {
//     for (let i = 0; i < postions.length; i++) {
//         if (scrollY >= postions[i]) {
//             console.log(sections[i])
//         }

//     }
// })
addEventListener("scroll", () => {
    if (scrollY !== 0) {
        let array = []
        for (let i = 0; i < postions.length; i++) {
            if (header.offsetTop - header.offsetHeight <= postions[i]) {
                // ok
            } else {
                array.push(i)
            }
        }
        allLiMenuH.forEach((e) => {
            e.classList.remove("active")
        })
        allLiMenuH[array[array.length - 1]].classList.add("active")
    } else {
        allLiMenuH[0].classList.add("active")
    }
})

