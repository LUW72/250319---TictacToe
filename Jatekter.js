import Elem from "./Elem.js";
import { NYEROLISTA } from "./Nyertes.js";

export default class Jatekter
{

    #lista = [  "", "", "", 
                "", "", "",
                "", "", ""];

    constructor(szuloElem) 
    {
        this.szuloElem = szuloElem;
        this.esemenykezelo();
        this.megjelenit();
    };

    esemenykezelo()
    {
        let kattintasSzamlalo = 0;
        window.addEventListener("kivalaszt", (event)=>{

            console.log(event.detail);
            let index = event.detail;

            if (kattintasSzamlalo % 2 == 0)
            {
                this.#lista[index] = "X";
            }
            else{
                this.#lista[index] = "O";
            }

            this.szuloElem.innerHTML = "";
            this.megjelenit();
            kattintasSzamlalo++;
            this.ellenorzes();
        });
    }
    ellenorzes() {
        for (let i = 0; i < NYEROLISTA.length; i++) {

            if (this.#lista[NYEROLISTA[i].elso] && this.#lista[NYEROLISTA[i].elso] === 
                this.#lista[NYEROLISTA[i].masodik] && this.#lista[NYEROLISTA[i].elso] === this.#lista[NYEROLISTA[i].harmadik]) 
            {
                
                alert(`A nyertes: ${this.#lista[NYEROLISTA[i].elso]}`); 
                this.szuloElem.innerHTML = "";
                new Jatekter(this.szuloElem);
            }
        }
    
        if (!this.#lista.includes("")) 
        {
            alert("Döntetlen!"); 
        }
    }
    
    

    megjelenit()
    {
        for (let i = 0; i < this.#lista.length; i++) 
        {
            new Elem(this.#lista[i], i, this.szuloElem);
        }
    };

};