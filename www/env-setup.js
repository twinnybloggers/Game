/* THIS IS THE ____DEVELOPMENT____ FILE */

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDUrlHM8Q6SaspRTRm5202LdeJ2vn2NlTQ",
    authDomain: "the-danger-crew-beta.firebaseapp.com",
    databaseURL: "https://the-danger-crew-beta.firebaseio.com",
    storageBucket: "the-danger-crew-beta.appspot.com",
    messagingSenderId: "807274574009"
};
firebase.initializeApp(firebaseConfig);


//Initialize Google Analytics
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

//Send to TDC GA with no domain set. Let the third parameter be "auto" for production
ga('create', 'UA-75243711-1', {
    'cookieDomain': 'none'
});