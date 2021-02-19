
export class Exame{  
    id : string;
    sangue: string;
    data: string;
    estado : string;
    metodo: string;
    nome: string; // nome do paciente

    setData(objFirebase : any){
        this.estado = objFirebase.estado;
        this.data = objFirebase.data;
        this.sangue = objFirebase.sangue;
        this.metodo = objFirebase.metodo; 
        this.nome = objFirebase.paciente;

    }

}