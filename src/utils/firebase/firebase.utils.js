


import { initializeApp } from "firebase/app";
import{getAuth,
  signInWithPopup,
  GoogleAuthProvider,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged} 
  from 'firebase/auth';
  import {getFirestore,doc,getDoc,setDoc,collection,writeBatch,query,getDocs} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCCoQA66K8zOHwCLE0y5IQ5jI1839OcWSM",
  authDomain: "simple-shopping-a2db8.firebaseapp.com",
  projectId: "simple-shopping-a2db8",
  storageBucket: "simple-shopping-a2db8.appspot.com",
  messagingSenderId: "253882074873",
  appId: "1:253882074873:web:ba0d804fc5d96e3b0b8428"
};

export const firebaseApp = initializeApp(firebaseConfig);

const provider=new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:"select_account"
});

export const auth=getAuth();
export const signInWithGooglePopup=()=>{ return signInWithPopup(auth,provider);};

export const db=getFirestore();

export const addCollectionAndDocuments=async(collectionKey,objectsToAdd)=>{
  const collectionRef=collection(db,collectionKey);
  const batch=writeBatch(db);
  objectsToAdd.forEach((object)=>{
    const docRef=doc(collectionRef,(object.title).toLowerCase());
    batch.set(docRef,object);
  })
  await batch.commit();
  console.log('done')
}

export const getCategoriesAndDocuments=async()=>{
  const collectionRef=collection(db,'categories');
  const q=query(collectionRef);
  const querySnapShot=await getDocs(q);
  const categoryMap=querySnapShot.docs.reduce((acc,docSnapShot)=>{
    const {title,items}=docSnapShot.data();
    acc[title.toLowerCase()]=items;
    return acc;
  },{});
  return categoryMap;
}

export const createUserDocumentFromAuth= async (userAuth,additionalnformation)=>{
  if(!userAuth)return;

  const userDocRef = doc(db,'users',userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  
  if(!userSnapshot.exists()){
    const {displayName,email}=userAuth;
    const createdAt=new Date();
    try{
      await setDoc(userDocRef,{
        displayName,
        email,
        createdAt,
        ...additionalnformation
      });
    }
    catch(error){
      console.log('error creating the user',error.message);
    }
  }
  return userDocRef;
};
export const createAuthUserWithEmailAndPassword=async(email,password)=>{
  if(!email || !password) return;
  
 return await createUserWithEmailAndPassword(auth,email,password);

};
export const signInAuthUserWithEmailAndPassword=async(email,password)=>{
  if(!email || !password) return;
  
 return await signInWithEmailAndPassword(auth,email,password);

};

export const signOutUser=async ()=>{ await signOut(auth);}

export const onAuthStateChangedListner=(callback)=>{onAuthStateChanged(auth,callback);}



