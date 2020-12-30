function mudarCorCirculo(cor){
    const circulo = document.querySelector('#elipse');
    const span = document.getElementsByTagName('span')[0];
    const btn = document.getElementsByTagName('button')[0];
    const redesSociais = document.getElementsByClassName('redes-sociais')[0];
    circulo.style.background = cor;
    span.style.color = cor;
    btn.style.background = cor;
    redesSociais.style.background = cor;
}