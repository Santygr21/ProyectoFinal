var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import "./components/index.js";
import { getPosts } from "../../services/firebase.js";
import dataStories from "./DataStories.js";
import dataPost from "./DataPost.js";
console.log(dataPost);
import { AttributeStories } from "./components/Stories/Stories.js";
import { AttributePost } from "./components/Post/Post.js";
export class Home extends HTMLElement {
    constructor() {
        super();
        this.stories = [];
        this.posts = [];
        this.attachShadow({ mode: 'open' });
        dataStories.forEach((data) => {
            const storieCard = this.ownerDocument.createElement("my-stories");
            storieCard.setAttribute(AttributeStories.pic, data.pic);
            storieCard.setAttribute(AttributeStories.username, data.username);
            this.stories.push(storieCard);
        });
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const posts = yield getPosts();
                posts === null || posts === void 0 ? void 0 : posts.filter(post => post.time).sort((postA, postB) => postB.time - postA.time).forEach((data) => {
                    const postCard = this.ownerDocument.createElement("my-post");
                    postCard.setAttribute(AttributePost.pictureprofile, data.pictureprofile);
                    postCard.setAttribute(AttributePost.user, data.user);
                    postCard.setAttribute(AttributePost.ubi, data.ubi);
                    postCard.setAttribute(AttributePost.content, data.content);
                    postCard.setAttribute(AttributePost.likes, data.likes);
                    postCard.setAttribute(AttributePost.description, data.description);
                    postCard.setAttribute(AttributePost.coments, data.coments);
                    postCard.setAttribute(AttributePost.date, data.date);
                    this.posts.push(postCard);
                });
                this.render();
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    render() {
        var _b;
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `<link rel="stylesheet" href="./components/Home/index.css">`;
            const storiesContainer = this.ownerDocument.createElement("div");
            storiesContainer.classList.add('stories-container');
            this.stories.forEach((storie) => {
                var _a;
                storiesContainer.appendChild(storie);
            });
            (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(storiesContainer);
            this.posts.forEach((post) => {
                var _b;
                (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(post);
            });
        }
    }
}
customElements.define("app-home", Home);
