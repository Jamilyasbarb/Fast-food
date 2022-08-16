export class Produto{
    public id: number;
    public nome: string;
    public descricao: string;
    public valor_unitario: number;
    public imagemPath: string;

    constructor(id: number, nome: string, descricao: string, valor_unitario: number, imagemPath: string){
        this.id = id;
        this.nome = nome;
        this.descricao= descricao;
        this.valor_unitario = valor_unitario;
        this.imagemPath = imagemPath;
    }
}