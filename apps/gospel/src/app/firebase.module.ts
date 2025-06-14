import { NgModule } from "@angular/core";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjUFfiNlVcXR03aW28ZdhCdg8_lmzk15k",
  authDomain: "blog-46974.firebaseapp.com",
  databaseURL: "https://blog-46974-default-rtdb.firebaseio.com",
  projectId: "blog-46974",
  storageBucket: "blog-46974.appspot.com",
  messagingSenderId: "836636966533",
  appId: "1:836636966533:web:62c7e8bd6e9b6ac998f3ec",
  measurementId: "G-MPQSH2L8FZ",
};

@NgModule({
  imports: [
    // FirestoreModule,
  ],
  providers: [provideFirebaseApp(() => initializeApp(firebaseConfig)), provideFirestore(() => getFirestore())],
})
export class FirebaseModule {}
