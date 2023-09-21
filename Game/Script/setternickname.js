export default function handleNickname() {
    let playerNickName = '';
    const nickName = document.querySelector("#nickNameTool");
    
    nickName.innerText = 'Click aqui e escolha o seu Nickname!';

    nickName.addEventListener('click', () => {
        playerNickName = prompt("Clique e diga seu Nickname?");   
        nickName.innerText = playerNickName;
    });
}






