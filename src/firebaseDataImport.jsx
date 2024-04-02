import React from 'react'
import {getFirestore,collection,addDoc} from 'firebase/firestore'
import {app} from './firebase.js'
import {rabbitProducts} from './api/otherPets/rabbitFood.js'
const firestore = getFirestore(app);

const FirebaseDataImport = () => {

  // Add Product Data
  const addJsonData =(data,category,subcategory)=>{
    data.map((e)=>addData(e,category,subcategory))
  }
  const addData = async (data,category,subcategory)=>{
    try{
      const collectionRef = collection(firestore,'categories',category,subcategory);
      const docRef = addDoc(collectionRef,data);
      console.log("Document Added succsfully:",docRef.id);
    }catch(error){console.log(error)}
  }

  // Add Product in Search IndexDB.
  const searchIndexDb = (JsonData)=>{
    JsonData.map(e=>{
      addDataSearch(e.title,e.images[0],e.category,e.sub_category,e.handle)
    })
  }
  const addDataSearch =(title,images,category,sub_cat,handle)=>{

    const words = handle.split('-');
    const trimmedWords = words.map(word => {
        // Remove special characters
        const trimmedWord = word.replace(/[^a-zA-Z]/g, '');
        // Remove last two characters
        return trimmedWord.slice(0, -2);
    });
// console.log(trimmedWords);

    let data = {
      id:title,
      images:images,
      category:category,
      sub_category:sub_cat,
      tags:trimmedWords
    }
      try{
          const collectionRef = collection(firestore,'searchIndex');
          const docRef = addDoc(collectionRef,data);
          console.log("Data added to Search Index. ID:",docRef.id);
      }catch(error){
        console.log(error);
      }
  }

  return(
    <div>
        <h2>Firebase COnfig</h2>
    <button onClick={()=>searchIndexDb(rabbitProducts)}>Add Data</button>

        {/* <button onClick={()=>addJsonData(rabbitProducts,"Others","Rabbit")}>Add Data</button> */}
    </div>
  )
}

export default FirebaseDataImport