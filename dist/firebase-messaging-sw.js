if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../firebase-messaging-sw.js')
      .then(function(registration) {
        console.log('Registration successful, scope is:', registration.scope);
      }).catch(function(err) {
        console.log('Service worker registration failed, error:', err);
      });
    }

// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/<v10+>/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/<v10+>/firebase-messaging.js');


// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyBCwKyqnxpHAdezdI-bQVQkP6PrSUrFNoA",
    authDomain: "pushvue-ca59f.firebaseapp.com",
    projectId: "pushvue-ca59f",
    storageBucket: "pushvue-ca59f.appspot.com",
    messagingSenderId: "945047635984",
    appId: "1:945047635984:web:2478af7c035d9327522295",
    measurementId: "G-WSDRNKP2S5"
  };
 
  firebase.initializeApp(firebaseConfig);
 
  // Retrieve firebase messaging
  const messaging = firebase.messaging();
 
  messaging.onBackgroundMessage(function(payload) {
    console.log("Received background message ", payload);
 
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };
 
    self.registration.showNotification(notificationTitle, notificationOptions);
  });