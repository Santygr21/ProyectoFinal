import "./components/index.js";
enum Screens {
    login,
    register,
    home,
    createPost
}

class App extends HTMLElement{
    screen: Screens = Screens.register;
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
        this.setEventListeners();
    }

    setEventListeners(){
        const registro = this.shadowRoot?.querySelector("app-register");
        registro?.addEventListener("Registrado", () =>{
            this.screen = Screens.login;
            this.render();
            this.setEventListeners();
        })

        const login = this.shadowRoot?.querySelector("app-login");
        login?.addEventListener("Logueado", () =>{
            this.screen = Screens.home;
            console.log("login"); 
            this.render();
            this.setEventListeners();
        })

        const newPost = this.shadowRoot?.querySelector("app-create");
        newPost?.addEventListener("form-full", () =>{
            this.screen = Screens.home;
            this.render();
            this.setEventListeners();
        })
        const nav = this.shadowRoot?.querySelector("my-nav");
        nav?.addEventListener("created-Post", () =>{
            this.screen = Screens.createPost;
            this.render();
            this.setEventListeners();
            console.log("sirve el botón");
            
        })
    }
    render(){
        if(!this.shadowRoot) return;
        switch (this.screen) {
            case Screens.home:
                this.shadowRoot.innerHTML = `
                <link href="./components/index.css" rel="stylesheet">
                    <div class="body-feed">
                        <my-nav></my-nav>
                        <app-home></app-home>
                        <my-suggest></my-suggest>
                    </div>
                `
                break;
        
            case Screens.login:
                this.shadowRoot.innerHTML = "<app-login></app-login>"
            break;
            
            case Screens.register:
                this.shadowRoot.innerHTML = "<app-register></app-register>"
            break;

            case Screens.createPost: 
                this.shadowRoot.innerHTML = "<app-create></app-create>"
            break;


            default:
                break;
        }
    }
}

customElements.define("app-container", App)
