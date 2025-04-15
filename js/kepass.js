const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()-_=+";
const allChars = uppercaseChars + lowercaseChars + numberChars + symbolChars;
const minLength = 12;
const maxLength = 50;









function getRandomCharFrom(characters) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters.charAt(randomIndex);
}

function generateRandomPass(length) {
    let pass = "";

    
    pass += getRandomCharFrom(uppercaseChars);
    pass += getRandomCharFrom(lowercaseChars);
    pass += getRandomCharFrom(numberChars);
    pass += getRandomCharFrom(symbolChars);

    
    for (let i = pass.length; i < length; i++) {
        pass += getRandomCharFrom(allChars);
    }

    
    pass = shuffleString(pass);

    return pass;
}

function shuffleString(str) {
    let array = str.split('');
    let currentIndex = array.length;

    
    while (currentIndex !== 0) {
        
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array.join('');
}

function generatePass() {
    const lengthInput = document.getElementById('length');
    const lengthValue = parseInt(lengthInput.value);
    const passwordResultElement = document.getElementById('passwordResult');

    if (isNaN(lengthValue) || lengthValue < minLength || lengthValue > maxLength) {
        alert(`La longitud de la contraseña debe ser un número entre ${minLength} y ${maxLength} caracteres.`);
        return;
    }

    const password = generateRandomPass(lengthValue);
    passwordResultElement.innerHTML = `Contraseña Generada: <span>${password}</span>`;
}
  