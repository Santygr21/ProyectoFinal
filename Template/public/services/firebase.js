var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getFirestore, collection, query, where, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
//Al profesor le salen los mismos errores
const firebaseConfig = {
    apiKey: "AIzaSyAQRs4XfcQcd2R9MLxG8kori_hhBCOfQsI",
    authDomain: "proyecto-296ff.firebaseapp.com",
    projectId: "proyecto-296ff",
    storageBucket: "proyecto-296ff.appspot.com",
    messagingSenderId: "290716997350",
    appId: "1:290716997350:web:2e64ec13bf12bbb23b8d27",
    measurementId: "G-ZBPSY7H414"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const usersRef = collection(db, "usuarios");
export const queryUser = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const q = query(usersRef, where("email", "==", email), where("password", "==", password));
        const querySnapshot = yield getDocs(q);
        console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, "=>", doc.data());
        });
        return !querySnapshot.empty;
    }
    catch (error) {
        return false;
    }
});
export const addUser = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (email != "" && password != "") {
            const docRef = yield addDoc(collection(db, "usuarios"), {
                email,
                password
            });
            return true;
        }
    }
    catch (error) {
        return false;
    }
});
export const addPost = ({ username, image, comment }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield addDoc(collection(db, "posts"), {
            user: username,
            Viewers: 0,
            comments: 20,
            picProfile: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F578220039653431054%2F&psig=AOvVaw0FAjO8DnXNV8sOiole8WXb&ust=1670083511911000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOC264Wo2_sCFQAAAAAdAAAAABAI",
            ubi: "Cali, Valle",
            content: image,
            likes: "2000 Likes",
            description: comment,
            date: 'Just now',
            time: Date.now(),
        });
        return true;
    }
    catch (error) {
        return false;
    }
});
export const getPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = [];
        const querySnapshot = yield getDocs(collection(db, 'posts'));
        querySnapshot.forEach((post) => {
            posts.push(post.data());
            console.log(post.data());
        });
        return posts;
    }
    catch (error) {
        console.error(error);
        alert('Ocurrió un error');
    }
});
