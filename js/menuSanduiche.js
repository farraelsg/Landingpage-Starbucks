function ativarMenu(){
    const menuSanduice = document.getElementsByClassName('menu-sanduiche')[0];
    const navegacao = document.querySelector('.navegacao');
    menuSanduice.classList.toggle('ativado');
    navegacao.classList.toggle('ativado');
}