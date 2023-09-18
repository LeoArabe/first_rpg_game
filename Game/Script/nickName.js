let playerNickName = '';

const nickName = document.querySelector("#nickNameTool");

nickName.innerText = 'Click aqui e escolha o seu Nickname!';

nickName.addEventListener('click', () =>{
    playerNickName = prompt("Qual seu Nickname?");   
    nickName.innerText = playerNickName;
});
