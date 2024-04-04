<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCwKyqnxpHAdezdI-bQVQkP6PrSUrFNoA",
  authDomain: "pushvue-ca59f.firebaseapp.com",
  projectId: "pushvue-ca59f",
  storageBucket: "pushvue-ca59f.appspot.com",
  messagingSenderId: "945047635984",
  appId: "1:945047635984:web:2478af7c035d9327522295",
  measurementId: "G-WSDRNKP2S5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app)

Notification.requestPermission()
    .then(permission => {
      if (permission === "granted") {
        getToken(messaging, {
          vapidKey:
          firebaseConfig.apiKey,
        })
          .then((currentToken) => {
            if (currentToken) {
              console.log("Firebase Token", currentToken);
            } else {
              // Show permission request UI
              console.log(
                "No registration token available. Request permission to generate one."
              );
              // ...
            }
          })
          .catch((err) => {
            console.log("An error occurred while retrieving token. ", err);
            // ...
          });

        onMessage(messaging, (payload) => {
          console.log("Message received. ", payload);
          // ...
        });
      } else {
        console.log("Unable to get permission to notify.");
      }
    });
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
