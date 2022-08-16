export class Client{
    public id:number;
    public nome: string;
    public endereco: string;
    public cidade: string;
    public uf: string;

    constructor(id: number,nome: string, endereco: string,cidade: string, uf: string){
        this.id = id;
        this.nome = nome;
        this.endereco = endereco;
        this.cidade = cidade;
        this.uf = uf;
    }
}