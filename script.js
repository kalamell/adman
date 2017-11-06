var config = {
  apiKey: "AIzaSyBmtVAM9UgjScxzZvs6f1vpWxR0ym6YEFI",
  authDomain: "ace-mile-133504.firebaseapp.com",
  databaseURL: "https://ace-mile-133504.firebaseio.com",
  projectId: "ace-mile-133504",
  storageBucket: "ace-mile-133504.appspot.com",
  messagingSenderId: "963964433776"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(config);
}

var database = firebase.database();