import express from "express";
import cors from "cors";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCwPygQr_4sAn2JuVI6WfWpfVhOlIHX0Mw",
  authDomain: "newdiversion-4b4ce.firebaseapp.com",
  projectId: "newdiversion-4b4ce",
  storageBucket: "newdiversion-4b4ce.appspot.com",
  messagingSenderId: "131761614087",
  appId: "1:131761614087:web:941ee22f4e6a6dbdd729a2",
  measurementId: "G-RBL5JHL7HF"
};

const fapp = initializeApp(firebaseConfig);

const db = getFirestore(fapp);
const app = express(cors());
const PORT = 3000;

app.use(express.json());
app.use(cors());

async function addUsers(db, email, pwd) {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      email: email,
      password: pwd,
    });

    console.log(docRef.id);
  } catch (e) {
    console.log(e);
  }
}

app.post('/addUser', (req, res) => {
    try {
        const { email, pwd, ...data } = req.body;
        addUsers(db, email, pwd);
    } catch {
      return res.status(400).send("Missing fields");
    }
})

app.listen(PORT, () => {
  console.log("Succesful");
});

