import Bebida from "./src/Models/Bebida";
import BebidaController from "./src/Controllers/BebidaController";

import promptSync from "prompt-sync";
const prompt = promptSync();

let BebidasController: BebidaController = new BebidaController();

for (let index = 0; index < 1; index++) {
    let bebida: Bebida = new Bebida();
    bebida.nome = prompt("Digite o nome da bebida: ");
    bebida.cor = prompt("Digite a cor da bebida: ");
    bebida.temperatura = prompt("Digite a temperatura da bebida: ");
    bebida.teorAlcool = Number(prompt("Digite o teor alcoolico da bebida: "));
    bebida.quantidade = Number(prompt("Digite a quantidade de bebidas: "));
    BebidasController.salvar(bebida);
}

BebidasController.recuperarTodos();