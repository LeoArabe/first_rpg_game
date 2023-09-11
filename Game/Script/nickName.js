let playerNickName = '';

const nickName = document.querySelector("#nickNameTool");

nickName.innerText = 'Click aqui e escolha o seu Nickname!';

nickName.addEventListener('click', testInner);

function testInner(){
playerNickName = prompt("Qual seu Nickname?");   
nickName.innerText = playerNickName;
};