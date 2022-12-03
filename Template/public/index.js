import "./components/index.js";
var Screens;
(function (Screens) {
    Screens[Screens["login"] = 0] = "login";
    Screens[Screens["register"] = 1] = "register";
    Screens[Screens["home"] = 2] = "home";
    Screens[Screens["createPost"] = 3] = "createPost";
})(Screens || (Screens = {}));
class App extends HTMLElement {
    constructor() {
        super();
        this.screen = Screens.register;
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
        this.setEventListeners();
    }
    setEventListeners() {
        var _a, _b, _c, _d;
        const registro = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("app-register");
        registro === null || registro === void 0 ? void 0 : registro.addEventListener("Registrado", () => {
            this.screen = Screens.login;
            this.render();
            this.setEventListeners();
        });
        const login = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector("app-login");
        login === null || login === void 0 ? void 0 : login.addEventListener("Logueado", () => {
            this.screen = Screens.home;
            console.log("login");
            this.render();
            this.setEventListeners();
        });
        const newPost = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector("app-create");
        newPost === null || newPost === void 0 ? void 0 : newPost.addEventListener("form-full", () => {
            this.screen = Screens.home;
            this.render();
            this.setEventListeners();
        });
        const nav = (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.querySelector("my-nav");
        nav === null || nav === void 0 ? void 0 : nav.addEventListener("created-Post", () => {
            this.screen = Screens.createPost;
            this.render();
            this.setEventListeners();
            console.log("sirve el botón");
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
        switch (this.screen) {
            case Screens.home:
                this.shadowRoot.innerHTML = `
                <link href="./components/index.css" rel="stylesheet">
                    <div class="body-feed">
                        <my-nav></my-nav>
                        <app-home></app-home>
                        <my-suggest></my-suggest>
                    </div>
                `;
                break;
            case Screens.login:
                this.shadowRoot.innerHTML = "<app-login></app-login>";
                break;
            case Screens.register:
                this.shadowRoot.innerHTML = "<app-register></app-register>";
                break;
            case Screens.createPost:
                this.shadowRoot.innerHTML = "<app-create></app-create>";
                break;
            default:
                break;
        }
    }
}
customElements.define("app-container", App);
