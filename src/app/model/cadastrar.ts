export class Cadastrar{

    id : string;
    foto: string;
    cidade: string;
    idade: string;
    cpf: string;
    email: string;
    sangue: string;
    endereco: string;
    estado: string;
    nome: string;
    numero: string;
    telefone: string;


    setData(objFirebase : any){
        this.cidade = objFirebase.cidade;
        this.foto = objFirebase.foto;
        this.idade = objFirebase.idade;
        this.cpf = objFirebase.cpf;
        this.email = objFirebase.email;
        this.sangue = objFirebase.sangue;
        this.endereco = objFirebase.endereco;
        this.nome = objFirebase.nome;
        this.numero = objFirebase.numero;
        this.telefone = objFirebase.telefone;
        this.estado = objFirebase.estado;
    }

}