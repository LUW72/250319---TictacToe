import Elem from "./Elem.js";


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
        });
    }
    ellenorzes()
    {
/*         for (let i = 0; i < this.#lista.length; i++) 
        {
            let hely = this.#lista[i];
            if (hely == "X" && hely+1)
            {
                
            }
            
        } */
    }

    megjelenit()
    {
        for (let i = 0; i < this.#lista.length; i++) 
        {
            new Elem(this.#lista[i], i, this.szuloElem);
        }
    };

};