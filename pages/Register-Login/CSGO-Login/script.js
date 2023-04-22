const subtitle = document.querySelector(".text");
const emailform1 = document.querySelector(".emailform1");
const passwordform1 = document.querySelector(".passwordform1");
const btn1 = document.querySelector(".btn1");
const nameform2 = document.querySelector(".nameform2");
const emailform2 = document.querySelector(".emailform2");
const passwordform2 = document.querySelector(".passwordform2");
const btn2 = document.querySelector(".btn2");
let validate = false;

const EmailRegas = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;


btn1.addEventListener("click", () => {
    if (emailform1.value.length > 3 && passwordform1.value.length > 3) {
        subtitle.style.display = `none`;
        validate = true;
        localStorage.setItem('Login:', emailform1.value);
        localStorage.setItem('Password:', passwordform1.value);
        console.log(validate);
    } else {
        subtitle.style.display = `flex`;
        validate = false;
        console.log(validate);
    }
})

btn2.addEventListener("click", () => {
    if (emailform2.value.length > 3 && passwordform1.value.length > 3) {
        subtitle.style.display = `none`;
        validate = "true"
    } else {
        subtitle.style.display = `flex`;
        validate = "false"
    }
})

// const validateForm = function () {
//     if (emailform1.match(EmailRegas) && passwordform1.value.length > 3) {
//         subtitle.style.display = `none`;
//         return true
//     } else {
//         subtitle.style.display = `flex`;
//         return false
//     }
// }

// btn1.addEventListener("click", () => {
//     const validate = validateForm()
// })


// btn1.addEventListener("click", () => {
//     if (emailform1.match(EmailRegas) && passwordform1.value.length > 3) {
//         subtitle.style.display = `none`;
//         validate = "true"
//     } else {
//         subtitle.style.display = `flex`;
//         validate = "false"
//         console.log(emailform1.value);
//     }
// })

// btn2.addEventListener("click", () => {
//     if (emailform2.value.length > 3 && passwordform1.value.length > 3) {
//         subtitle.style.display = `none`;
//         validate = "true"
//     } else {
//         subtitle.style.display = `flex`;
//         validate = "false"
//     }
// })