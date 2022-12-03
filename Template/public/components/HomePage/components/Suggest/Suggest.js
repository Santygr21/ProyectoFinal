export var AttributeSuggest;
(function (AttributeSuggest) {
    AttributeSuggest["pictureprofile"] = "pictureprofile";
    AttributeSuggest["user"] = "user";
})(AttributeSuggest || (AttributeSuggest = {}));
class Suggest extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        const attrs = {
            pictureprofile: null,
            user: null,
        };
        return Object.keys(attrs);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/HomePage/components/Suggest/Suggest.css">
            <section class="suggestBoxContainer">
                <section class="suggestProfile">
                    <img src="https://cdn.ponly.com/wp-content/uploads/No-Memes-15.jpg">
                    <h3>Santygr21</h3>
                </section>
                <section class="suggestText">
                    <h2>Sugerencias para ti</h2>
                    <h3>Ver todo</h3>
                </section>
                <section class="suggestBox">
                    <section>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkdbh4X0iV4YGi0rQPy9PPtIx8y5N0MwVWiw&usqp=CAU">
                        <h1>Jhojocor<br><span>Seguido porJulixmb</span></h1>
                    </section>
                    <h2>Follow</h2>
                </section>
                <section class="suggestBox">
                    <section>
                        <img src="https://imgflip.com/s/meme/Buddy-Christ.jpg">
                        <h1>Jesus <br> <span>Seguido por todos</span></h1>
                    </section>
                    <h2>Follow</h2>
                </section>
                <section class="suggestBox">
                    <section>
                        <img src="https://i1.wp.com/paginadelespanol.com/wp-content/uploads/2020/04/Otro-otra-otros-otras.png?fit=770%2C770&ssl=1">
                        <h1>Otro <br> <span>Seguido por otros</span></h1>
                    </section>
                    <h2>Follow</h2>
                </section>

            </section>`;
        }
    }
}
customElements.define("my-suggest", Suggest);
export default Suggest;
