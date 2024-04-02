import React,{useState,useEffect} from 'react'
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import {app} from '../../../firebase.js';

const CatTreatCategory = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
      const db = getFirestore(app);
        const dataFetch = async ()=>{
            let fetchedList=[];
            const doc = await getDocs(collection(db, 'cat-food'));
            doc.forEach((doc)=>{
                const data = doc.data();
                // console.log('Document data:', data);
                fetchedList.push(data);
            })
            setProducts(fetchedList);
            // setProducts(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        }   
        dataFetch();
    },[]);


  return (
    <div className="max-w-7xl my-12 m-auto ">
        <div>{products.map((e,index)=><h2 key={index}>{e.title}</h2>)}</div>
    </div>
  )
}

export default CatTreatCategory