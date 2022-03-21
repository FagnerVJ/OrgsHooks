/* eslint-disable prettier/prettier */
import green from '../../assets/images/produtores/green.png';
import salad from '../../assets/images/produtores/salad.png';
import jennyJack from '../../assets/images/produtores/jenny-jack.png';
import grow from '../../assets/images/produtores/grow.png';
import potager from '../../assets/images/produtores/potager.png';

const gerarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const produtores = {
    titulo: "Produtores",
    lista: [
        {
        nome: "Green",
        imagem: green,
        distancia:`${gerarNumeroAleatorio(1, 500)}`,
        estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
        nome: "Salad",
        imagem: salad,
        distancia:`${gerarNumeroAleatorio(1, 500)}`,
        estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
        nome: "Jenny Jack",
        imagem: jennyJack,
        distancia:`${gerarNumeroAleatorio(1, 500)}`,
        estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
        nome: "Grow",
        imagem: grow,
        distancia:`${gerarNumeroAleatorio(1, 500)}`,
        estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
        nome: "Potager",
        imagem: potager,
        distancia:`${gerarNumeroAleatorio(1, 500)}`,
        estrelas: gerarNumeroAleatorio(1, 5),
        },
    ]
}
export default produtores;