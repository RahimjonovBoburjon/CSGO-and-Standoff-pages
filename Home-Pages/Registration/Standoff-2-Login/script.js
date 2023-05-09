const subtitle1 = document.querySelector(".form-1");
const subtitle2 = document.querySelector(".form-2");
const emailform1 = document.querySelector(".emailform1");
const passwordform1 = document.querySelector(".passwordform1");
const btn1 = document.querySelector(".btn1");
const nameform2 = document.querySelector(".nameform2");
const emailform2 = document.querySelector(".emailform2");
const passwordform2 = document.querySelector(".passwordform2");
const btn2 = document.querySelector(".btn2");
const URL = "https://csgo-and-standoff-2-default-rtdb.firebaseio.com/"
let validatein = false;
let validateup = false;

const validateForm1 = function () {
    const EmailRegas = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (emailform1.value.match(EmailRegas) && passwordform1.value.length > 3) {
        subtitle1.style.display = `none`;
        validatein = true;
        localStorage.setItem('Login-Standoff:', emailform1.value);
        localStorage.setItem('Password-Standoff:', passwordform1.value);
        function openPage() {
            window.location.href = '../../Standoff-Skins';
        };
        openPage();
    } else {
        subtitle1.style.display = `flex`;
        validatein = false;
    };
};

btn1.addEventListener("click", () => {
    validateForm1();
});

const validateForm2 = function () {
    const EmailRegas = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (nameform2.value.length > 3 && emailform2.value.match(EmailRegas) && passwordform2.value.length > 3) {
        subtitle2.style.display = `none`;
        validateup = true;
        localStorage.setItem('Name-Standoff:', nameform2.value);
        localStorage.setItem('Login-Standoff:', emailform2.value);
        localStorage.setItem('Password-Standoff:', passwordform2.value);
        function openPage() {
            window.location.href = '../../Standoff-Skins';
        };
        openPage();
    } else {
        subtitle2.style.display = `flex`;
        validateup = false;
    };
};

btn2.addEventListener("click", async (event) => {
    event.preventDefault();
    validateForm2();

    const nameUp = nameform2.value
    const emailUp = emailform2.value
    const passwordUp = passwordform2.value

    if (validateup) {
        try {
            await fetch(URL + "registration.json", {
                method: "POST",
                headers: {
                    "conten-type": "application/json"
                },
                body: JSON.stringify({
                    nameUp,
                    emailUp,
                    passwordUp,
                })
            })
        } catch (error) {
            console.log(error);
        }
    }
});

// ///////////////////////////////////

// const validateForm1 = function () {
    //     const EmailRegas = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

//     if (emailform1.value.match(EmailRegas) && passwordform1.value.length > 3) {
//         subtitle1.style.display = `none`;
//         validate = true;
//         localStorage.setItem('Login-Standoff:', emailform1.value);
//         localStorage.setItem('Password-Standoff:', passwordform1.value);
//         function openPage() {
//             window.location.href = '../../../index.html';
//         };
//         openPage();
//     } else {
//         subtitle1.style.display = `flex`;
//         validate = false;
//     };
// };

// btn1.addEventListener("click", () => {
//     validateForm1();
// });

// const validateForm2 = function () {
//     const EmailRegas = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

//     if (nameform2.value.length > 3 && emailform2.value.match(EmailRegas) && passwordform2.value.length > 3) {
//         subtitle2.style.display = `none`;
//         validate = true;
//         localStorage.setItem('Name-Standoff:', nameform2.value);
//         localStorage.setItem('Login-Standoff:', emailform2.value);
//         localStorage.setItem('Password-Standoff:', passwordform2.value);
//         function openPage() {
//             window.location.href = '../../../index.html';
//         };
//         openPage();
//     } else {
//         subtitle2.style.display = `flex`;
//         validate = false;
//     };
// };

// btn2.addEventListener("click", () => {
//     validateForm2();
// });

// //////////////////////////////////////

// btn1.addEventListener("click", () => {
//     if (emailform1.value.length > 3 && passwordform1.value.length > 3) {
//         subtitle.style.display = `none`;
//         validate = true;
//         localStorage.setItem('Login:', emailform1.value);
//         localStorage.setItem('Password:', passwordform1.value);
//         function openPage() {
//             window.location.href = '../../../index.html';
//         };
//         openPage();
//     } else {
//         subtitle.style.display = `flex`;
//         validate = false;
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