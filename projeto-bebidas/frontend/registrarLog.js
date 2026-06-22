import { db } from "./firebase.js";

import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

export async function registrarLog(
  acao,
  descricao = ''
){

  try{

    const usuario =
      localStorage.getItem(
        'usuarioEmail'
      ) || 'desconhecido';

    await addDoc(
      collection(db, "admin_logs"),
      {
        acao,
        descricao,
        usuario,
        data:
          new Date().toISOString()
      }
    );

  }catch(err){

    console.error(
      'Erro ao registrar log:',
      err
    );
  }
}