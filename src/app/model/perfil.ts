export class Perfil{
    
    id: string;
    foto:string;
    nome: string;
    idade: string;
    cpf: string;
    sangue: string;
    endereco: string;
    numero: string;
    cidade: string;
    estado: string;
    email: string;
    telefone: string;





    setData(objFirebase : any){
        this.foto = objFirebase.foto;
        this.nome = objFirebase.nome;
        this.idade = objFirebase.idade;
        this.cpf = objFirebase.cpf;
        this.sangue = objFirebase.sangue;
        this.endereco = objFirebase.endereco;
        this.numero = objFirebase.numero;
        this.cidade = objFirebase.cidade;
        this.estado = objFirebase.estado;
        this.email = objFirebase.email;
        this.telefone = objFirebase.telefone;
        
    }

}