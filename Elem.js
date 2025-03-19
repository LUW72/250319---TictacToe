export default class Elem
{

    #adat
    #index

    constructor(adat, index, szuloElem)
    {
        this.#adat = adat;
        this.#index = index;
        this.szuloElem = szuloElem;
        this.megjelenit();
        this.esemenykezelo();
    };

    esemenykezelo()
    {
        this.elem = document.querySelectorAll(".mezo:last-child")[0];
        this.elem.addEventListener("click", (event)=>
        {
            console.log(event);
            let e = new CustomEvent("kivalaszt", {detail: this.#index});
            window.dispatchEvent(e);
        });
        
    }

    megjelenit()
    {
        let html = ` <div class="mezo">
                        ${this.#adat}
                    </div>`;

        this.szuloElem.insertAdjacentHTML("beforeend", html);
    };

};