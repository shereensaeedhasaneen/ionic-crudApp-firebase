import { User } from './../model/user';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData:any
  constructor(
    private afStore:AngularFirestore,
    private fireAuth:AngularFireAuth,
    private router:Router
  ) {
    this.fireAuth.authState.subscribe(user=>{
      if(user){
        this.userData = user
        localStorage.setItem('user' , JSON.stringify(this.userData) )
        JSON.parse(localStorage.getItem('user')??'')
      }
      else{
        localStorage.setItem('user' , '')

      }
    })
  }

  signIn(email:string , password:string){
    return this.fireAuth.signInWithEmailAndPassword(email,password)
    // .then(res=>console.log(res))
    // .catch(err=>console.log(err))
  }

  Register(email:string , password:string){
    return this.fireAuth.createUserWithEmailAndPassword(email,password)
  }

  get IsLoggedIn():boolean{
    const user = JSON.parse(localStorage.getItem('user')??'')
    return (user)?true:false
  }

  setUserData(user:any){
    const userRef : AngularFirestoreDocument= this.afStore.doc(`users/${user.id}`)
    const userData:User={
      uid:user.uid,
      email:user.email,
      name:user.name,
      displayName:user.displayName,
      photoURL:user.photoURL,
    }
    return userRef.set(userData,{merge:true})
  }

  signOut(){
    return this.fireAuth.signOut()
    .then(()=>{
      localStorage.removeItem('user')
      this.router.navigateByUrl('/login')
    })
  }
}
