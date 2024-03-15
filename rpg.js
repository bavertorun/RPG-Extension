/**
 * Coded by : Baver Torun
 * Version : v1.0
 * Github Repo: https://github.com/bavertorun/RPG-Extension
 **/

const length = document.getElementById("length");
const lenLabel = document.getElementById("lenLabel");
const randInput = document.getElementById("randInput");
const copyBtn = document.getElementById("copyBtn");
const refresh = document.getElementById("refresh");

let len;

length.addEventListener("change", (e) => {
  len = e.target.value;
  console.log(len);
  lenLabel.innerHTML = "Password Length: " + e.target.value;
  generatePassword(len);
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(randInput.value);
  copyBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  setInterval(() => {
    copyBtn.innerHTML = '<i class="fa-solid fa-copy"></i>';
  }, 1500);
});


const generatePassword = (len) => {
  const characters =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()+_-=}{[]|:;"/?.><,`~';
  let pass = "";

  for (let i = 0; i < len; i++) {
    pass += characters.charAt(Math.floor(Math.random() * characters.length));
    console.log(pass);
  }

  randInput.value = pass;
};

refresh.addEventListener("click", ()=>{
    generatePassword(len)
});