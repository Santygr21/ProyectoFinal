export enum AttributePost {
    "pictureprofile" = "pictureprofile",
    "user" = "user",
    "ubi" = "ubi",
    "content" = "content",
    "likes" = "likes",
    "description" = "description",
    "coments" = "coments",
    "date" = "date"
}

class Post extends HTMLElement {
    pictureprofile?: any;
    user?: string;
    ubi?: string;
    content?: any;
    likes?: string;
    description?: string;
    coments?: string;
    date?: string;

    static get observedAttributes(){
        const attrs: Record<AttributePost,null> = {
            pictureprofile: null,
            user: null,
            ubi: null,
            content: null,
            likes: null,
            description: null,
            coments: null,
            date: null
        };
        return Object.keys(attrs);
    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: AttributePost, 
        oldValue: string | undefined, 
        newValue: string | undefined){
        this[propName] = newValue;
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/Home/components/Post/Post.css">
            <div class="container">
            <div class="infoContainer">
                <div class="userInfo">   
                    <img src="${this.pictureprofile}" class="profileImg">            
                    <div class="username"><h2>${this.user} <br> <span>${this.ubi}</span></h2></div>
                </div>
                    <div class="postOptions"><p>•••</p></div>
            </div>
        <div class="imgPost"><img src="${this.content}"></div>
        <div class="icons">
        <div class="IgIcons">
            <img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png">
            <img src="https://cdn-icons-png.flaticon.com/512/8316/8316048.png">
            <img src="https://cdn-icons-png.flaticon.com/512/2550/2550207.png">
        </div>
        <div class="carousel">
            <div class="grayCircle"></div>
            <div class="grayCircle"></div>
            <div class="blueCircle"></div>
            <div class="grayCircle"></div>
            <div class="grayCircle"></div>
        </div>
        <div class="saveIcon">
            <img src="https://cdn-icons-png.flaticon.com/512/5894/5894523.png">
        </div></div>
        <h4 class="counter">${this.likes}</h4>
        <div class="description">
            <h4 class="desUser">${this.user}</h4>
            <h4 class="desMess">${this.description}</h4>
        </div>
        <h5>${this.coments}</h5>
        <h6>${this.date}</h6>
        </div>`
        }
    }
}

customElements.define("my-post", Post);
export default Post;