import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithCredential } from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_FIREBASE_APPID
}
initializeApp(firebaseConfig)
const auth = getAuth()

// ChromeアプリからGoogleログインしてトークン取得
chrome.identity.getAuthToken(
  {interactive: true},
  (token: string) => {
    console.log('token', token)
    // Googleログイン成功時に受け取るトークンを使ってGoogleのクレデンシャル作成
    const credential = GoogleAuthProvider.credential(null, token)
    console.log('credential:', credential)
    console.log('auth:', auth)

    // Googleユーザーのクレデンシャルを使ってサインイン
    signInWithCredential(auth, credential).then((result) => {
      console.log("Sign In Success", result)
    }).catch((error) => {
      console.log("Sign In Error", error)
    })
  }
)
