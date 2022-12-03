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

  const usersRef = collection(db,"usuarios");

  export const queryUser = async ({
    email,
    password
  }:{
    email: string;
    password: string;
  }) => {
    try {
        const q = query(usersRef, where("email", "==", email),where("password","==",password));
        const querySnapshot = await getDocs(q);
        console.log(querySnapshot);

        querySnapshot.forEach((doc:any) => {
            console.log(doc.id,"=>",doc.data());
        });
        
        return !querySnapshot.empty;
    } catch (error) {
        return false;
    }
  }

  export const addUser = async ({
    email,
    password
  }:{
    email: string;
    password: string;
  }) => {
    try {
        if(email != "" && password != ""){
          const docRef = await addDoc(collection(db,"usuarios"),{
              email,
              password
          });
          return true;
        }
    } catch (error) {
        return false;
    }
  }

  export const addPost = async ({
    username,
    image,
    comment
  }:{
    username: string;
    image: string;
    comment: string;
  }) => {
    try {
        await addDoc(collection(db,"posts"),{
          user: username,
          Viewers: 0,
          comments: 20,
          pictureprofile: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F578220039653431054%2F&psig=AOvVaw0FAjO8DnXNV8sOiole8WXb&ust=1670083511911000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOC264Wo2_sCFQAAAAAdAAAAABAI",
          ubi: "Cali, Valle",
          content: image,
          likes: "2000 Likes",
          description: comment,
          date: 'Just now',
          time: Date.now(),
        });
        return true;
    } catch (error) {
        return false;
    }
  }

  export const getPosts = async () => {
    try {
      const posts = [];
      const querySnapshot = await getDocs(collection(db, 'posts'));
      querySnapshot.forEach((post) => {
        posts.push(post.data());
        console.log(post.data());
        
      });
      return posts;
    } catch (error) {
      console.error(error);
      alert('Ocurrió un error');
    }
  }