import { addUser } from "../../services/firebase.js";
export class Register extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        var _a;
        this.render();
        const form = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("app-form");
        form.addEventListener("form-full", (evt) => {
            const email = evt.detail.email;
            const password = evt.detail.password;
            addUser({ email, password }).then(value => {
                if (value) {
                    const event = new CustomEvent("Registrado", {});
                    console.log(this);
                    this.dispatchEvent(event);
                }
            });
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <section class="Register">
        <link href="./components/Register/Register.css" rel="stylesheet">
            <img class="Logo" src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png">
            <h3 class="textReg">Regístrate para ver fotos y vídeos de tus amigos.</h3>
            <button>
            <img class="faceIcon" src="https://www.facebook.com/images/fb_icon_325x325.png">
            Log in with Facebook
            </button>
            <h3>O</h3>
            <app-form></app-form>
            <p id="Terms">Al registrarte, aceptas nuestras Condiciones, nuestra Política de privacidad y nuestra Política de cookies.</p>
        </section>
        <section class="GoLogin">
            <p>¿Tienes una cuenta? <t>Entrar</t></p>
        </section>
        <section class="Download">
            <p>Descarga la aplicación</p>
            <img class="Store1" src="https://www.seekpng.com/png/full/22-227594_download-on-the-app-store-badge-available-on.png">
            <img class="Store2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png">
        </section>
        <section>
            <p class="GreySmall">Meta · Información · Blog · Empleo · Ayuda · API  Privacidad · Terminos · Cuentas destacadas · Hashtags · Ubicaciones · Instagram  Lite · Subir contactos y personas no usuarias</p>
            <p class="GreySmall">Español(España) ˅  ·  © 2022 Instagram from Meta</p>
        </section>
        `;
    }
}
customElements.define("app-register", Register);
