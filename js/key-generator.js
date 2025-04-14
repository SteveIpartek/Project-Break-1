function generatePassword() {
    const lengthInput = document.getElementById('length');
    const lengthValue = parseInt(lengthInput.value);
  
    if (lengthValue < 12 || lengthValue > 50) {
        alert("La longitud de la contraseña debe estar entre 12 y 50 caracteres.");
        return;
    }
  
    const password = generateRandomPassword(lengthValue);
    const passwordResult = document.getElementById('passwordResult');
    passwordResult.innerHTML = `Contraseña Generada: <span>${password}</span>`;
  }
  
  function generateRandomPassword(lengthValue) {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()-_=+";
  
    let password = "";
  
    // Asegurar al menos un carácter de cada tipo
    password += getRandomChar(uppercaseChars);
    password += getRandomChar(lowercaseChars);
    password += getRandomChar(numberChars);
    password += getRandomChar(symbolChars);
  
    // Generar el resto de la contraseña
    for (let i = password.length; i < lengthValue; i++) {
        const charset = uppercaseChars + lowercaseChars + numberChars + symbolChars;
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }
  
    return password;
  }
  
  function getRandomChar(characters) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters.charAt(randomIndex);
  }
  