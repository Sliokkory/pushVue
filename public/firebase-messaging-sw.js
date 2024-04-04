importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js')

console.log('===========================================')
console.log('FIREBASE SERVICE WORKER LOADED')
console.log('===========================================')

firebase.initializeApp({
  apiKey: 'AIzaSyBCwKyqnxpHAdezdI-bQVQkP6PrSUrFNoA',
  authDomain: 'pushvue-ca59f.firebaseapp.com',
  projectId: 'pushvue-ca59f',
  storageBucket: 'pushvue-ca59f.appspot.com',
  messagingSenderId: '945047635984',
  appId: '1:945047635984:web:2478af7c035d9327522295',
  measurementId: 'G-WSDRNKP2S5'
})

const messaging = firebase.messaging()
