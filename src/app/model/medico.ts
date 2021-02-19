export class Medico{
    id : string;
    nome: string;
    espc: string;
    cpf: string;
    endereco: string;
    numero: string;
    cidade : string;
    estado: string;
    telefone: string;
    email: string;
    dataesq: string;


    setData(objFirebase : any){
        this.nome = objFirebase.nome;
        this.espc = objFirebase.espc;
        this.cpf = objFirebase.cpf;
        this.endereco = objFirebase.endereco;
        this.numero = objFirebase.numero;
        this.cidade = objFirebase.cidade;
        this.estado = objFirebase.estado;
        this.telefone = objFirebase.telefone;
        this.email = objFirebase.email;
        this.telefone = objFirebase.telefone;
        this.dataesq = objFirebase.dataesq;
    }

}