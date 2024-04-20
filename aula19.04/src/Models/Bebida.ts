export default class Bebida {

    private _temperatura: string = "";
    private _cor: string = "";
    private _quantidade: number = 0;
    private _teorAlcool: number = 0;
    private _nome: string = "";


    constructor(temperatura?: string,
        cor?: string,
        quantidade?: number,
        teorAlcool?: number,
        nome?: string
    ) {
        if (temperatura !== undefined) {
            this.temperatura = temperatura;
        }
        if (cor !== undefined) {
            this.cor = cor;
        }
        if (quantidade !== undefined) {
            this._quantidade = quantidade;
        }
        if (teorAlcool !== undefined) {
            this._teorAlcool = teorAlcool;
        }
        if (nome !== undefined) {
            this._nome = nome;
        }

    }

    public get temperatura(): string {
        return this._temperatura;
    }

    public set temperatura(value: string) {
        this._temperatura = value;
    }

    public get cor(): string {
        return this._cor;
    }

    public set cor(value: string) {
        this._cor = value;
    }

    public get quantidade(): number {
        return this._quantidade;
    }

    public set quantidade(value: number) {
        this._quantidade = value;
    }
    public get teorAlcool(): number {
        return this._teorAlcool;
    }

    public set teorAlcool(value: number) {
        this._teorAlcool = value;
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(value: string) {
        this._nome = value;
    }

    public imprimeAtributos(): void {
        console.log(`temperatura: ${this.temperatura}`);
        console.log(`Cor: ${this.cor}`);
        console.log(`quantidade: ${this.quantidade}`);
        console.log(`teorAlcool: ${this.teorAlcool}`);
        console.log(`nome: ${this.nome}`);
    }
}