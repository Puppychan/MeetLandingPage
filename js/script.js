let groupchatLeft = document.querySelector(".body-main-groupchat-avatars-leftwrap");
let groupchatRight = document.querySelector(".body-main-groupchat-avatars-rightwrap");
let leftHtml = "";
let rightHtml = "";

for (let i = 0; i < 6; i ++) {
    console.log("object");
    leftHtml += `
    <img src="./assets/images/shared/avatars/avatar-left-${i + 1}.png" alt="Avatar Left ${i + 1}" class="class="body-main-groupchat-avatars-left body-main-groupchat-avatars-left${i + 1}">
    `
    rightHtml += `
    <img src="./assets/images/shared/avatars/avatar-right-${i + 1}.png" alt="Avatar right ${i + 1}" class="class="body-main-groupchat-avatars-right body-main-groupchat-avatars-right${i + 1}">
    `
}
groupchatLeft.insertAdjacentHTML("beforeend", leftHtml);
groupchatRight.insertAdjacentHTML("beforeend", rightHtml);