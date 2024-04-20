import Bebida from "../Models/Bebida";

export default class BebidasController {

    private _bebida: Array<Bebida> = [];

    public salvar(bebida: Bebida): void {
        this._bebida.push(bebida);
    }

    public recuperarTodos(): void {
        console.log(this._bebida);
    }
}