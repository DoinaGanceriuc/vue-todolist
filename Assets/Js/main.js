/*  
- stampare in pagina un item per ogni elemento contenuto in un array
- ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
- predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista

Funzionalitá di Base:
 - La nostra todo list avrá alcune tasks di default predefinite
 - L'utente puó inserire nuove tasks
 - Cliccando sulla "X" l'utente puó cancellare una task
 - Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare"
 ma vuole anche poter indicare che la task é stata completata (con un icona cliccabile)
Quando l'utente inserisce una task ha due modi per salvarla: o preme il pulsante add o preme il taso Enter della tastiera.
Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri.
 */

/* Strumenti:
-array
-v-for

*/


const app = new Vue ({
  el: "#root",
  data: {
    logoImage: "https://www.boolean.careers/images/misc/logo.png",
    newItem: "",
    items: [
      "Fare i compiti",
      "Fare la spesa",
      "Fare il bucato"
    ],
    error: false,
    modify: false
   
  },
  methods: {
    removeItem(i) {
      this.items.splice(i, 1)
      //this.completed = false
    },
    completedItems(i) {
      this.items.splice(i, 1, "Item completato");
      
      
      /* if(this.items.length == 0) {
        this.completed = false
        
      } */
    },
    addItem() {
      //console.log("cliccato su aggiungi");
      if(this.newItem.length > 5) {
                this.items.push(this.newItem)
                this.error = false;
            } else {
                this.error = true;
            }
            
            this.newItem = ""
           // this.completed = false
    }

  }
})