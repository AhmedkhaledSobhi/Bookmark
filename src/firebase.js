
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA_mtVgHbPFcIq8WiHXI7rmcSwWbmaiNto",
  authDomain: "bookmark-2023.firebaseapp.com",
  databaseURL: "https://bookmark-2023-default-rtdb.firebaseio.com",
  projectId: "bookmark-2023",
  storageBucket: "bookmark-2023.appspot.com",
  messagingSenderId: "812758146434",
  appId: "1:812758146434:web:7135f3ba2dc1fa28f1439b",
  // databaseURL: 'https://bookmark-2023-default-rtdb.firebaseio.com/'
};

export const app = initializeApp(firebaseConfig);