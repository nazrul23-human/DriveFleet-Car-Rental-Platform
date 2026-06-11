
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAevs0vmRaE4MfXjNK2OTxMpo0fdCwXeHw",
  authDomain: "drivefleet-d16e1.firebaseapp.com",
  projectId: "drivefleet-d16e1",
  storageBucket: "drivefleet-d16e1.firebasestorage.app",
  messagingSenderId: "253295683204",
  appId: "1:253295683204:web:c159bb3aab03f64ea144d1",
  measurementId: "G-NTC02WH9WG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;