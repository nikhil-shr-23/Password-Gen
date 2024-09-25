const passwordbox = document.getElementById("password")
const length = 16;

const upper= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvewxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()";

const alchar= upper + lower + number + symbol;

function passwordCreate(){
    let password = "";
    password += upper[Math.floor(Math.random() * upper.length)];
    password += lower[Math.floor(Math.random() * lower.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {
        password += alchar[Math.floor(Math.random() * alchar.length)];

        
    }
    passwordbox.value = password

    
}

function copypassword(){
    passwordbox.select();
    document.execCommand("copy");
    alert("password copied!")
}