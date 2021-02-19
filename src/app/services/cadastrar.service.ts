import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { Cadastrar } from '../model/cadastrar';

@Injectable()
export class CadastrarService {
    Cadastrar: Cadastrar = new Cadastrar();

    constructor(private firestore: AngularFirestore) {

    }

    listaDeCadastrar(): Observable<any> {

        // Observable -> Aguardar resposta do servidor
        return from(new Observable(observe => { // converter para Observable

            // this.firestore.collection('perfil') -> Selecionar a coleção no Firestore
            // .snapshotChanges().subscribe -> Tentar buscar no servidor
            // response -> dados baixados do servidor, os perfils
            this.firestore.collection('perfil').snapshotChanges().subscribe(response => {
                // transformar response em array de perfils
                let lista: Cadastrar[] = [];
                response.map(obj => {
                    // será repetido para cada registro, cada registro do Firestore se chama obj
                    let perfil: Cadastrar = new Cadastrar();
                    perfil.setData(obj.payload.doc.data());// obj.payload.doc.data() -> Dados do perfil
                    perfil.id = obj.payload.doc.id; // inserindo ID
                    lista.push(perfil); // adicionando o perfil na lista // push é adicionar
                });
                observe.next(lista);
            })

        }))
    }


    buscaPorNome(nome: string): Observable<any> {

        // Observable -> Aguardar resposta do servidor
        return from(new Observable(observe => { // converter para Observable
            this.firestore.collection('perfil').ref.orderBy("nome")
                .startAt(nome).endAt(nome + "\uf8ff").get().then(response => {
                    let lista: Cadastrar[] = [];
                    response.docs.map(obj => {
                        // será repetido para cada registro, cada registro do Firestore se chama obj
                        let perfil: Cadastrar = new Cadastrar();
                        perfil.setData(obj.data());// obj.payload.doc.data() -> Dados do perfil
                        perfil.id = obj.id; // inserindo ID
                        lista.push(perfil); // adicionando o perfil na lista // push é adicionar
                    });
                    observe.next(lista);
                })

        }))
    }

    getPerfil(idUser) {
        return from(new Observable(observe => { // converter para Observable

            this.firestore.collection("perfil").doc(idUser).get().subscribe(response => { // .doc seleciona o perfil com base no id

                if (response.exists == false) {

                } else {

                }
            })
        }))
    }



    //

    cadastrar(perfil: any): Observable<any> {
        return from(new Observable(observe => {
            // add cria um novo documento
            this.firestore.collection('perfil').add(perfil).then(response => {
                observe.next("Cadastrado com sucesso!");
            }, (err) => {
                observe.error("Erro ao cadastrar!");
            })

        }));
    }

    buscaPorId(id: any): Observable<any> {
        return from(new Observable(observe => {
            // .doc(id).snapshotChanges() -> Busca pelo id do documento
            this.firestore.collection('perfil').doc(id).snapshotChanges().subscribe(response => {
                console.log(response);
                let perfil: Cadastrar = new Cadastrar();
                perfil.id = response.payload.id;
                perfil.setData(response.payload.data());
                observe.next(perfil);

            }, (err) => {
                observe.error("Erro ao buscar o ID!");
            })

        }));
    }



    atualizar(perfil: any): Observable<any> {
        return from(new Observable(observe => {

            this.firestore.collection('perfil').doc(perfil.id).set(perfil).then(response => {
                observe.next("Atualizado com sucesso!");
            }, (err) => {
                observe.error("Erro ao atualizar!");
            })

        }));
    }

    excluir(perfil: any): Observable<any> {
        return from(new Observable(observe => {

            this.firestore.collection('perfil').doc(perfil.id).delete().then(response => {
                observe.next("Excluído com sucesso!");
            }, (err) => {
                observe.error("Erro ao excluir!");
            })

        }));
    }

    // carregar o perfil do perfil (qualquer coleção)
    buscaPerfilPorId(uid: any): Observable<any> { // uid -> authenticator
        return from(new Observable(observe => {
            this.firestore.collection('perfil').doc(uid).snapshotChanges().subscribe(response => {
                if (response.payload.exists !== false) {

                    let perfil: Cadastrar = new Cadastrar();
                    perfil.id = response.payload.id;
                    perfil.setData(response.payload.data());
                    observe.next(perfil);
                }

            }, (err) => {
                observe.error("Erro ao buscar o ID!");
            })

        }));
    }

    // Atualiza perfil, 
    atualizaPerfil(uid, dados) {
        return from(new Observable(observe => {

            this.firestore.collection('perfil').doc(uid).set(dados).then(response => {
                observe.next("Atualizado com sucesso!");
            }, (err) => {
                observe.error("Erro ao atualizar!");
            })

        }));
    }

}