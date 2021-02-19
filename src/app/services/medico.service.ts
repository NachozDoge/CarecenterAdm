import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { Medico } from '../model/medico';

@Injectable()
export class MedicoService {
    medico: Medico = new Medico();

    constructor(private firestore: AngularFirestore) {

    }


    listaDemedico(): Observable<any> {

        // Observable -> Aguardar resposta do servidor
        return from(new Observable(observe => { // converter para Observable

            // this.firestore.collection('medico') -> Selecionar a coleção no Firestore
            // .snapshotChanges().subscribe -> Tentar buscar no servidor
            // response -> dados baixados do servidor, os medicos
            this.firestore.collection('medico').snapshotChanges().subscribe(response => {
                // transformar response em array de medicos
                let lista: Medico[] = [];
                response.map(obj => {
                    // será repetido para cada registro, cada registro do Firestore se chama obj
                    let medico: Medico = new Medico();
                    medico.setData(obj.payload.doc.data());// obj.payload.doc.data() -> Dados do medico
                    medico.id = obj.payload.doc.id; // inserindo ID
                    lista.push(medico); // adicionando o medico na lista // push é adicionar
                });
                observe.next(lista);
            })

        }))
    }


    buscaPorNome(nome: string): Observable<any> {

        // Observable -> Aguardar resposta do servidor
        return from(new Observable(observe => { // converter para Observable
            this.firestore.collection('medico').ref.orderBy("nome")
                .startAt(nome).endAt(nome + "\uf8ff").get().then(response => {
                    let lista: Medico[] = [];
                    response.docs.map(obj => {
                        // será repetido para cada registro, cada registro do Firestore se chama obj
                        let medico: Medico = new Medico();
                        medico.setData(obj.data());// obj.payload.doc.data() -> Dados do medico
                        medico.id = obj.id; // inserindo ID
                        lista.push(medico); // adicionando o medico na lista // push é adicionar
                    });
                    observe.next(lista);
                })

        }))
    }

    
    buscaPorEspecialidade(nome: string): Observable<any> {

        // Observable -> Aguardar resposta do servidor
        return from(new Observable(observe => { // converter para Observable
            this.firestore.collection('medico').ref.where("espc","==",nome)
                    .get().then(response => {
                    let lista: Medico[] = [];
                    response.docs.map(obj => {
                        // será repetido para cada registro, cada registro do Firestore se chama obj
                        let medico: Medico = new Medico();
                        medico.setData(obj.data());// obj.payload.doc.data() -> Dados do medico
                        console.log(obj.data())
                        medico.id = obj.id; // inserindo ID
                        lista.push(medico); // adicionando o medico na lista // push é adicionar
                    });
                    observe.next(lista);
                })

        }))
    }

    getmedico(idUser) {
        return from(new Observable(observe => { // converter para Observable

            this.firestore.collection("medico").doc(idUser).get().subscribe(response => { // .doc seleciona o medico com base no id

                if (response.exists == false) {
                    this.nMedico(idUser);

                } else {
                observe.next(response.data());
                }
            })
        }))
    }
    nMedico(iduser){
        let json = {
            nome: "",
            espc: "",
            cpf: "",
            endereco: "",
            numero: "",
            cidade: "",
            estado: "",
            telefone: "",
            email: "",
            dataesq: ""
        }
        this.firestore.collection('perfil').doc(iduser).set(json).then(() =>{})
      }


    //

    cadastrar(medico: any): Observable<any> {
        return from(new Observable(observe => {
            // add cria um novo documento
            this.firestore.collection('medico').add(medico).then(response => {
                observe.next("Cadastrado com sucesso!");
            }, (err) => {
                observe.error("Erro ao cadastrar!");
            })

        }));
    }

    buscaPorId(id: any): Observable<any> {
        return from(new Observable(observe => {
            // .doc(id).snapshotChanges() -> Busca pelo id do documento
            this.firestore.collection('medico').doc(id).snapshotChanges().subscribe(response => {
                console.log(response);
                let medico: Medico = new Medico();
                medico.id = response.payload.id;
                medico.setData(response.payload.data());
                observe.next(medico);

            }, (err) => {
                observe.error("Erro ao buscar o ID!");
            })

        }));
    }



    atualizar(medico: any): Observable<any> {
        return from(new Observable(observe => {

            this.firestore.collection('medico').doc(medico.id).set(medico).then(response => {
                observe.next("Atualizado com sucesso!");
            }, (err) => {
                observe.error("Erro ao atualizar!");
            })

        }));
    }

    excluir(medico: any): Observable<any> {
        return from(new Observable(observe => {

            this.firestore.collection('medico').doc(medico.id).delete().then(response => {
                observe.next("Excluído com sucesso!");
            }, (err) => {
                observe.error("Erro ao excluir!");
            })

        }));
    }

    // carregar o medico do medico (qualquer coleção)
    buscamedicoPorId(uid: any): Observable<any> { // uid -> authenticator
        return from(new Observable(observe => {
            this.firestore.collection('medico').doc(uid).snapshotChanges().subscribe(response => {
                if (response.payload.exists !== false) {

                    let medico: Medico = new Medico();
                    medico.id = response.payload.id;
                    medico.setData(response.payload.data());
                    observe.next(medico);
                }

            }, (err) => {
                observe.error("Erro ao buscar o ID!");
            })

        }));
    }

    // Atualiza medico, 
    atualizamedico(uid, dados) {
        return from(new Observable(observe => {

            this.firestore.collection('medico').doc(uid).set(dados).then(response => {
                observe.next("Atualizado com sucesso!");
            }, (err) => {
                observe.error("Erro ao atualizar!");
            })

        }));
    }

}