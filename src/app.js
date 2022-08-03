import { LightningElement } from "lwc";

export default class App extends LightningElement {
 
//crie um objeto na classe chamado account
    // onde  deverá possuir chave e valor 
    //(name, type, rating, website) definir valores para elas
    //exiba o mesmo dentro do app.html

    account = {
      name : "Pão Quentinho",
      type : "prospect",
      rating : "Hot",
      website :" pao@quentinho.com"

    };
 
 /* Lista de Objetos
 Lista com objetos armazenados
 lista = [
    0: {},
    1: {},
    2: {},
 ];
 */

 //Uma lista que contém os obejtos (key : Value)

 pokemons =[
   {cod: 1, nome: 'Picachu', Tipo:'raio', Nível: '+8000'},
   {cod: 2, nome: "Charmander", Tipo:"fogo", Nível: "+ 5000"},
   {cod: 3, nome: "Charizard", Tipo:"fogo", Nível: "+ 852"},
   {cod: 4, nome: "Taurus", Tipo:"normal", Nível: 56},


 ];
 
 
 
  
}
