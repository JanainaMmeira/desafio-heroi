function classificarHeroi() {
    const nomeInput = document.getElementById('nome');
    const xpInput = document.getElementById('xp');
    const nome = nomeInput.value || "Herói";
    const xp = parseInt(xpInput.value);
    const section = document.querySelector(".superior");

     let nivel = '';
    let imagembk = '';

    if (xp < 1000) {
        nivel = "Ferro";
        imagembk = './assets/ferro.png';
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Cristal";
        imagembk = './assets/cristal.png';
    } else if (xp >= 2001 && xp <= 3000) {
        nivel = "Bronze";
        imagembk = './assets/bronze.png';
    } else if (xp >= 3001 && xp <= 4000) {
        nivel = "Prata";
        imagembk = './assets/prata.png';
    } else if (xp >= 4001 && xp <= 5000) {
        nivel = "Ouro";
        imagembk = './assets/ouro.png';
    } else if (xp >= 5001 && xp <= 6000) {
        nivel = "Platina";
        imagembk = './assets/platina.png';
    } else if (xp >= 6001 && xp <= 7000) {
        nivel = "Diamante";
        imagembk = './assets/diamante.png';
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Mestre";
        imagembk = './assets/mestre.png';
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
        imagembk = './assets/ascendente.png';
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
        imagembk = './assets/imortal.png';
    } else if (xp >=10001) {
        nivel = "Radiante";
        imagembk = './assets/radiante.png';
    }

    else {
        nivel = " desconhecido, informe os dados acima ↑";
        imagembk = './assets/erro-400-770x515.jpeg-removebg-preview.png';
    }
 // Atualiza resultado
    document.getElementById('resultado').innerText = `O Herói ${nome} está no nível ${nivel}.`;

    // Troca a imagem do section.superior
    if (imagembk !== "") {
        section.style.backgroundImage = `url('${imagembk}')`;
    }

    // Limpa os campos
    nomeInput.value = '';
    xpInput.value = '';
}

// Eventos de Enter nos inputs
document.getElementById('nome').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        classificarHeroi();
        event.preventDefault();
    }
});

document.getElementById('xp').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        classificarHeroi();
        event.preventDefault();
    }
});