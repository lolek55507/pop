const thTextA = document.getElementById('thTextA');
const thTextB = document.getElementById('thTextB');
const inner = document.querySelector(".inner");
const tt = document.querySelector(".tt");
const fullRightContainer = document.querySelector(".fullRightContainer");
let i = 0;
let s = 0;

function moveText() {
    if(i == 0) {
        thTextA.innerText = "Free Delivery & returns";
        thTextB.innerText = "Nike members get free Delivery and free 30 day returns";
        inner.classList.add("mfl");
        inner.classList.remove("mfr");
        i++;
    }else if (i == 1) {
        thTextA.innerText = "Student Discount";
        thTextB.innerText = "10% off for students.";
        inner.classList.remove("mfl");
        inner.classList.add("mfr");
        i--;
    }
    
}
function showOptions() {
    if (s == 0) {
        tt.style.opacity = "1";
        fullRightContainer.style.opacity = "1";
        s++;
    }else if (s == 1) {
        tt.style.opacity = "0";
        fullRightContainer.style.opacity = "0";
        s--;
    }
}

setInterval(moveText, 2000);