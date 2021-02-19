import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { Exame } from '../model/exame';

@Injectable()
export class exameService {
        exame: Exame = new Exame();

    constructor(private firestore: AngularFirestore) {

    }


    listaDeExame(): Observable<any> {

        // Observable -> Aguardar resposta do servidor
        return from(new Observable(observe => { // converter para Observable

            // this.firestore.collection('exame') -> Selecionar a coleção no Firestore
            // .snapshotChanges().subscribe -> Tentar buscar no servidor
            // response -> dados baixados do servidor, os exames
            this.firestore.collection('exame').snapshotChanges().subscribe(response => {
                // transformar response em array de exames
                let lista: Exame[] = [];
                response.map(obj => {
                    // será repetido para cada registro, cada registro do Firestore se chama obj
                    let exame: Exame = new Exame();
                    exame.setData(obj.payload.doc.data());// obj.payload.doc.data() -> Dados do exame
                    exame.id = obj.payload.doc.id; // inserindo ID
                    lista.push(exame); // adicionando o exame na lista // push é adicionar
                });
                observe.next(lista);
            })

        }))
    }


    buscaPorNome(nome: string): Observable<any> {

        // Observable -> Aguardar resposta do servidor
        return from(new Observable(observe => { // converter para Observable
            this.firestore.collection('exame').ref.orderBy("nome")
                .startAt(nome).endAt(nome + "\uf8ff").get().then(response => {
                    let lista: Exame[] = [];
                    response.docs.map(obj => {
                        // será repetido para cada registro, cada registro do Firestore se chama obj
                        let exame: Exame = new Exame();
                        exame.setData(obj.data());// obj.payload.doc.data() -> Dados do exame
                        exame.id = obj.id; // inserindo ID
                        lista.push(exame); // adicionando o exame na lista // push é adicionar
                    });
                    observe.next(lista);
                })

        }))
    }

    getexame(idUser) {
        return from(new Observable(observe => { // converter para Observable

            this.firestore.collection("exame").doc(idUser).get().subscribe(response => { // .doc seleciona o exame com base no id

                if (response.exists == false) {

                } else {

                }
            })
        }))
    }



    //

    cadastrar(exame: any): Observable<any> {
        return from(new Observable(observe => {
            // add cria um novo documento
            this.firestore.collection('exame').add(exame).then(response => {
                observe.next("Cadastrado com sucesso!");
            }, (err) => {
                observe.error("Erro ao cadastrar!");
            })

        }));
    }

    buscaPorId(id: any): Observable<any> {
        return from(new Observable(observe => {
            // .doc(id).snapshotChanges() -> Busca pelo id do documento
            this.firestore.collection('exame').doc(id).snapshotChanges().subscribe(response => {
                console.log(response);
                let exame: Exame = new Exame();
                exame.id = response.payload.id;
                exame.setData(response.payload.data());
                observe.next(exame);

            }, (err) => {
                observe.error("Erro ao buscar o ID!");
            })

        }));
    }



    atualizar(exame: any): Observable<any> {
        return from(new Observable(observe => {

            this.firestore.collection('exame').doc(exame.id).set(exame).then(response => {
                observe.next("Atualizado com sucesso!");
            }, (err) => {
                observe.error("Erro ao atualizar!");
            })

        }));
    }

    excluir(exame: any): Observable<any> {
        return from(new Observable(observe => {

            this.firestore.collection('exame').doc(exame.id).delete().then(response => {
                observe.next("Excluído com sucesso!");
            }, (err) => {
                observe.error("Erro ao excluir!");
            })

        }));
    }

    // carregar o exame do exame (qualquer coleção)
    buscaexamePorId(uid: any): Observable<any> { // uid -> authenticator
        return from(new Observable(observe => {
            this.firestore.collection('exame').doc(uid).snapshotChanges().subscribe(response => {
                if (response.payload.exists !== false) {

                    let exame: Exame = new Exame();
                    exame.id = response.payload.id;
                    exame.setData(response.payload.data());
                    observe.next(exame);
                }

            }, (err) => {
                observe.error("Erro ao buscar o ID!");
            })

        }));
    }

    // Atualiza exame, 
    atualizaexame(uid, dados) {
        return from(new Observable(observe => {

            this.firestore.collection('exame').doc(uid).set(dados).then(response => {
                observe.next("Atualizado com sucesso!");
            }, (err) => {
                observe.error("Erro ao atualizar!");
            })

        }));
    }

}