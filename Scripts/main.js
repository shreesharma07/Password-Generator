const uppercaseCheckbox = document.getElementById("uppercaseCheckbox");
const lowercaseCheckbox = document.getElementById("lowercaseCheckbox");
const numberCheckbox = document.getElementById("numberCheckbox");
const specialCheckbox = document.getElementById("specialCheckbox");
const passwordLength = document.getElementById("passwordLength");
const passwordLengthValue = document.getElementById("passwordLengthValue");
const password = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const passwordStrength = document.getElementById("passwordStrength");


passwordLength.addEventListener("input", function () {
    passwordLengthValue.textContent = passwordLength.value;
    password.value = generatePassword();
});

function generatePassword(passWordLength = 16) {
    let passwordOptions = [];
    let checkedTypes = 0;
    if (uppercaseCheckbox.checked) {
        checkedTypes++;
        passwordOptions.push([..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')]);
    }
    if (lowercaseCheckbox.checked) {
        checkedTypes++;
        passwordOptions.push([..."abcdefghijklmnopqrstuvwxyz".split('')]);
    }
    if (numberCheckbox.checked) {
        checkedTypes++;
        passwordOptions.push([..."0123456789".split('')]);
    }
    if (specialCheckbox.checked) {
        checkedTypes++;
        passwordOptions.push([..."!@#$%^&*()/+=\\".split('')]);
    }
    passwordOptions = passwordOptions.flat(Infinity)
    let generatedPassword = "";
    for (let i = 0; i < passwordLength.value; i++) {
        generatedPassword += passwordOptions[Math.floor(Math.random() * passwordOptions.length)]
    }
    let passwordStrength = "";

    if (generatedPassword.length <= 12 && checkedTypes <= 2) {
        passwordStrength = "Weak";
    } else if (generatedPassword.length <= 24 && checkedTypes <= 3) {
        passwordStrength = "Strong";
    } else if (generatedPassword.length <= 36 && checkedTypes <= 4) {
        passwordStrength = "Extra Strong";
    } else if (generatePassword.length >= 20 && generatePassword.length <= 60 && checkedTypes <= 4) {
        passwordStrength = "Extreme Strong";
    } else {
        passwordStrength = "Strong";
    }

    passwordStrength.textContent = passwordStrength;
    console.log({ passwordStrength });


    return generatedPassword;
}

uppercaseCheckbox.addEventListener("change", function () {
    password.value = generatePassword();
});
lowercaseCheckbox.addEventListener("change", function () {
    password.value = generatePassword();
});
numberCheckbox.addEventListener("change", function () {
    password.value = generatePassword();
});
specialCheckbox.addEventListener("change", function () {
    password.value = generatePassword();
});

copyBtn.addEventListener("click", function () {
    password.select();
    document.execCommand("copy");
    alert("Password copied to clipboard");
});

password.value = generatePassword();

function changeSubTitle() {
    const subTitle = document.getElementById('sub-title');
    const subTitleOptions = {
        "0": "Keep your online presence safe as a bank vault by creating strong passwords that even a hacker's grandma couldn't crack!",
        "1": "Protect your digital life with passwords that would make a hacker say \"Oh no, not this one again\!\"",
        "2": "Don't let hackers have a field day with your account, create passwords that are stronger than a superhero's shield.",
        "3": "Make your passwords unbreakable like a wizard's spell, keep your online life secure and spellbinding!",
        "4": "Passwords so strong, not even a dragon's fire could melt them. Stay protected online, always.",
        "5": "Say goodbye to weak passwords, hello to superhero level protection! Create strong passwords now.",
        "6": "Make your passwords un-crackable, like a puzzle that even Einstein couldn't solve.",
        "7": "Turn your passwords into secret codes, stronger than any spy's cover.",
        "8": "Create passwords so secure, not even a time traveler could access them.",
    }

    const keysLength = Object.keys(subTitleOptions).length || 1;
    subTitle.innerHTML = subTitleOptions[`${Math.floor(Math.random() * keysLength)}`]

}
window.onload = changeSubTitle();

window.onload = function () {
    const minusButton = document.getElementById("minusButton");
    const plusButton = document.getElementById("plusButton");
    const lengthDisplay = document.getElementById("lengthDisplay");
    const passwordLength = document.getElementById('passwordLengthValue');
    let length = parseInt(passwordLength.innerHTML);

    minusButton.addEventListener("click", function () {
        if (length) {
            passwordLength.innerHTML = length--;
            changeSubTitle({ length: length });
        }
    });

    plusButton.addEventListener("click", function () {
        if (length) {
            passwordLength.innerHTML = length++;
            changeSubTitle({ length: length });
        }
    });
};

