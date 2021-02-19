import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { Consulta } from '../model/consulta';
@Injectable()
export class ConsultaService {
    consulta: Consulta = new Consulta();

    constructor(private firestore: AngularFirestore) {

    }

    listaDeConsultas(): Observable<any> {

        // Observable -> Aguardar resposta do servidor
        return from(new Observable(observe => { // converter para Observable

            // this.firestore.collection('consulta') -> Selecionar a coleção no Firestore
            // .snapshotChanges().subscribe -> Tentar buscar no servidor
            // response -> dados baixados do servidor, os consultas
            this.firestore.collection('consulta').snapshotChanges().subscribe(response => {
                // transformar response em array de consultas
                let lista: Consulta[] = [];
                response.map(obj => {
                    // será repetido para cada registro, cada registro do Firestore se chama obj
                    let consulta: Consulta = new Consulta();
                    consulta.setData(obj.payload.doc.data());// obj.payload.doc.data() -> Dados do consulta
                    consulta.id = obj.payload.doc.id; // inserindo ID
                    lista.push(consulta); // adicionando o consulta na lista // push é adicionar
                });
                observe.next(lista);
            })

        }))
    }


    buscaPorNome(nome: string): Observable<any> {

        // Observable -> Aguardar resposta do servidor
        return from(new Observable(observe => { // converter para Observable
            this.firestore.collection('consulta').ref.orderBy("nome")
                .startAt(nome).endAt(nome + "\uf8ff").get().then(response => {
                    let lista: Consulta[] = [];
                    response.docs.map(obj => {
                        // será repetido para cada registro, cada registro do Firestore se chama obj
                        let consulta: Consulta = new Consulta();
                        consulta.setData(obj.data());// obj.payload.doc.data() -> Dados do consulta
                        consulta.id = obj.id; // inserindo ID
                        lista.push(consulta); // adicionando o consulta na lista // push é adicionar
                    });
                    observe.next(lista);
                })

        }))
    }

    buscaPorEspecialidade(especialidade: string): Observable<any> {

        // Observable -> Aguardar resposta do servidor
        return from(new Observable(observe => { // converter para Observable
            this.firestore.collection('consulta').ref.orderBy("especialidade")
                .startAt(especialidade).endAt(especialidade + "\uf8ff").get().then(response => {
                    let lista: Consulta[] = [];
                    response.docs.map(obj => {
                        // será repetido para cada registro, cada registro do Firestore se chama obj
                        let consulta: Consulta = new Consulta();
                        consulta.setData(obj.data());// obj.payload.doc.data() -> Dados do consulta
                        consulta.id = obj.id; // inserindo ID
                        lista.push(consulta); // adicionando o consulta na lista // push é adicionar
                    });
                    observe.next(lista);
                })

        }))
    }

    getconsulta(idUser) {
        return from(new Observable(observe => { // converter para Observable

            this.firestore.collection("consulta").doc(idUser).get().subscribe(response => { // .doc seleciona o consulta com base no id

                if (response.exists == false) {

                } else {

                }
            })
        }))
    }



    //

    cadastrar(consulta: any): Observable<any> {
        return from(new Observable(observe => {
            // add cria um novo documento
            this.firestore.collection('consulta').add(consulta).then(response => {
                observe.next("Cadastrado com sucesso!");
            }, (err) => {
                observe.error("Erro ao cadastrar!");
            })

        }));
    }

    buscaPorId(id: any): Observable<any> {
        return from(new Observable(observe => {
            // .doc(id).snapshotChanges() -> Busca pelo id do documento
            this.firestore.collection('consulta').doc(id).snapshotChanges().subscribe(response => {
                console.log(response);
                let consulta: Consulta = new Consulta();
                consulta.id = response.payload.id;
                consulta.setData(response.payload.data());
                observe.next(consulta);

            }, (err) => {
                observe.error("Erro ao buscar o ID!");
            })

        }));
    }



    atualizar(consulta: any): Observable<any> {
        return from(new Observable(observe => {

            this.firestore.collection('consulta').doc(consulta.id).set(consulta).then(response => {
                observe.next("Atualizado com sucesso!");
            }, (err) => {
                observe.error("Erro ao atualizar!");
            })

        }));
    }

    excluir(consulta: any): Observable<any> {
        return from(new Observable(observe => {

            this.firestore.collection('consulta').doc(consulta.id).delete().then(response => {
                observe.next("Excluído com sucesso!");
            }, (err) => {
                observe.error("Erro ao excluir!");
            })

        }));
    }

    // carregar o consulta do consulta (qualquer coleção)
    buscaconsultaPorId(uid: any): Observable<any> { // uid -> authenticator
        return from(new Observable(observe => {
            this.firestore.collection('consulta').doc(uid).snapshotChanges().subscribe(response => {
                if (response.payload.exists !== false) {

                    let consulta: Consulta = new Consulta();
                    consulta.id = response.payload.id;
                    consulta.setData(response.payload.data());
                    observe.next(consulta);
                }

            }, (err) => {
                observe.error("Erro ao buscar o ID!");
            })

        }));
    }

    // Atualiza consulta, 
    atualizaconsulta(uid, dados) {
        return from(new Observable(observe => {

            this.firestore.collection('consulta').doc(uid).set(dados).then(response => {
                observe.next("Atualizado com sucesso!");
            }, (err) => {
                observe.error("Erro ao atualizar!");
            })

        }));
    }

}