import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.19.0/firebase-auth.js'

const firebaseConfig = {
    apiKey: "AIzaSyC2D35IBjmTU4-00cN_1qld5Uw2nhZA1ok",
    authDomain: "animehay-41fcf.firebaseapp.com",
    databaseURL: "https://animehay-41fcf-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "animehay-41fcf",
    storageBucket: "animehay-41fcf.appspot.com",
    messagingSenderId: "909220367300",
    appId: "1:909220367300:web:e8d405e683da33b8f0b291",
    measurementId: "G-MHY40PWCXE"
};

const header_login = document.querySelector('.header-login')
const header_account = document.querySelector('.header-account')
const header_vip = document.querySelector('.header-vip')
    
const account_name = document.getElementById('account-name')
const logout = document.getElementById('logout')

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    const displayName = user.displayName;
    header_login.style.display = 'none'
    header_vip.style.display = 'none'
    header_account.style.display = 'flex'

    account_name.innerHTML = displayName + ' <i class="ti-angle-down"></i>'
  } 
  else{
    header_login.style.display = 'flex'
    header_vip.style.display = 'block'
    header_account.style.display = 'none'
  }
})

logout.addEventListener('click',(e) =>{
    signOut(auth)
})