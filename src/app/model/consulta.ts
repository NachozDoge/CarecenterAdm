export class Consulta{
    id: string;
    idcliente : string;
    idmedico: string;
    nomecliente: string;
    nomemedico: string;
    metodo: string;
    dataconsulta: string;
    especialidade: string;





    setData(objFirebase : any){
        this.nomecliente = objFirebase.nomecliente;
        this.nomemedico = objFirebase.nomemedico;
        this.metodo = objFirebase.metodo;
        this.dataconsulta = objFirebase.dataconsulta;
        this.especialidade = objFirebase.especialidade;
        
    }

}