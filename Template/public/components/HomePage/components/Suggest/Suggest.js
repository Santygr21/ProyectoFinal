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
            <link rel="stylesheet" href="./components/Home/components/Suggest/Suggest.css">
            <section class="suggestBoxContainer">
                <section class="suggestProfile">
                    <img src="https://yt3.ggpht.com/GUW78kIdMM2mVjl-c1rkSD8DqNYSRZAfTUTie3j4xKFN6agTpdb9UiMDGwQB2yuoDpKB1a8QNn8=s900-c-k-c0x00ffffff-no-rj">
                    <h3>dilancano_ <br> <span>Dilan $teven Cano</span></h3>
                </section>
                <section class="suggestText">
                    <h2>Suggestions for you</h2>
                    <h3>View all</h3>
                </section>
                <section class="suggestBox">
                    <section>
                        <img src="https://files.antena2.com/antena2/public/podcast/field/images/cali.png?VersionId=aj1whX6TUlTagS068GaKAm6BXZZsuaKR">
                        <h1>deportivocali <br> <span>Followed by nicolasmr21 and 3 more</span></h1>
                    </section>
                    <h2>Follow</h2>
                </section>
                <section class="suggestBox">
                    <section>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Arc%C3%A1ngel_%22La_Entrevista%22_-_A_solas_con_Tony_Dandrades.jpg">
                        <h1>arcangel <br> <span>Followed by santygr34 and 29 more</span></h1>
                    </section>
                    <h2>Follow</h2>
                </section>
                <section class="suggestBox">
                    <section>
                        <img src="https://thumbs.dreamstime.com/b/fondo-negro-vectorial-del-logotipo-de-nike-marca-para-uso-impreso-ropa-deportiva-y-fitness-183282388.jpg">
                        <h1>nike <br> <span>Followed by badbunnypr and 49 more</span></h1>
                    </section>
                    <h2>Follow</h2>
                </section>

            </section>`;
        }
    }
}
customElements.define("my-suggest", Suggest);
export default Suggest;
