const subtitle1 = document.querySelector(".form-1");
const subtitle2 = document.querySelector(".form-2");
const emailform1 = document.querySelector(".emailform1");
const passwordform1 = document.querySelector(".passwordform1");
const btn1 = document.querySelector(".btn1");
const nameform2 = document.querySelector(".nameform2");
const emailform2 = document.querySelector(".emailform2");
const passwordform2 = document.querySelector(".passwordform2");
const btn2 = document.querySelector(".btn2");
let validate = false;

const validateForm1 = function () {
    const EmailRegas = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (emailform1.value.match(EmailRegas) && passwordform1.value.length > 3) {
        subtitle1.style.display = `none`;
        validate = true;
        localStorage.setItem('LoginCSGO', emailform1.value);
        localStorage.setItem('PasswordCSGO', passwordform1.value);
        function openPage() {
            window.location.href = '../../CSGO-Skins';
        };
        openPage();
    } else {
        subtitle1.style.display = `flex`;
        validate = false;
    };
};

btn1.addEventListener("click", () => {
    validateForm1();
});

const validateForm2 = function () {
    const EmailRegas = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (nameform2.value.length > 3 && emailform2.value.match(EmailRegas) && passwordform2.value.length > 3) {
        subtitle2.style.display = `none`;
        validate = true;
        localStorage.setItem('NameCSGO', nameform2.value);
        localStorage.setItem('LoginCSGO', emailform2.value);
        localStorage.setItem('PasswordCSGO', passwordform2.value);
        function openPage() {
            window.location.href = '../../CSGO-Skins';
        };
        openPage();
    } else {
        subtitle2.style.display = `flex`;
        validate = false;
    };
};

btn2.addEventListener("click", () => {
    validateForm2();
});

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