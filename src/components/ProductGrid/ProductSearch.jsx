import React,{useState,useEffect,useRef} from 'react'
import  {useParams} from "react-router-dom"
import ItemCard from '../common/cards/ItemCard.jsx';
import {nanoid} from 'nanoid';
import {app} from '../../firebase.js';
import CardSkeleton from '../common/CardSkeleton.jsx';
import { getFirestore,collection, query, getDocs } from 'firebase/firestore';
import { MdOutlineArrowDropDown } from "react-icons/md";
const firestore =getFirestore(app);

const ProductSearch = () => {
    const {category,sub_category}  = useParams();
    const [currCat,setCate]= useState();
    const [itemsList,setItemsList] = useState([]);
    const [loading,setLoading] =useState(true);
    const [originalList,setOriginialList]=useState([]);
    
    async function DataCategFetch (){

        let collectionRef = collection(firestore,'categories',category,sub_category);
        let q = query(collectionRef);
        const dataFetch = await getDocs(q);
        let fetchedData =[];
        dataFetch.forEach((e)=>{ 
            fetchedData.push(e.data());
            // console.log(e.id);
        })
        // setCate(category);
        setItemsList(fetchedData);
        setOriginialList(fetchedData);
    }
    async function AllDataFetch (){
        let CatList = ["Food","Treats","Bed","Grooming"];
        let fetchedData = [];
        for(const sub of CatList){
            let collectionRef=collection(firestore,'categories',category,sub);
            const q = query(collectionRef);
            const dataFetch = await getDocs(q);
            dataFetch.forEach((f)=>{fetchedData.push(f.data())});
    }
    setItemsList(fetchedData);
    setOriginialList(fetchedData);}

    useEffect(()=>{
        setLoading(true)
        if(sub_category=="all"){
            
            AllDataFetch();
        }
        else{
            // setItemsList(["Not all"]);
            DataCategFetch();
        }
        setLoading(false)
        // console.log("Data fetched.")
    },[category]);
    // const {category,sub_category}  = useParams();
  return (
    <div>
        <ProductSort originalList={itemsList} setItemsList={setItemsList}/>
        <div className="max-w-6xl  my-8 px-4 mx-auto grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8 ">
        {
        !loading?(
        itemsList.map((e)=><ItemCard data={e} key={nanoid()}/>)):(
            itemsList.map((e)=><CardSkeleton data={e} key={nanoid()}/>)
        ) } 
        </div>
    </div>
  )
}

const ProductSort = ({originalList,setItemsList}) => {
    const sort =["Featured","Price, Low to High","Price, High to Low"];
    const [currentSort,setSort]=useState(1);   
    const [activeToggle,setActiveToggle]=useState(false);
        
        function LowtoHighSort(arr){
            if(arr.length <= 1){
                return arr;
            }
            let pivot = arr[Math.floor(arr.length/2)];
            arr.splice(Math.floor(arr.length/2),1);
            const left = [];
            const right = [];
            for(let i = 0;i<arr.length;i++){
                if(arr[i].price<=pivot.price){
                    left.push(arr[i]);
                }else{
                    right.push(arr[i]);
                }
            }
            return([...LowtoHighSort(left),pivot,...LowtoHighSort(right)])
        }
        // console.log(QuickSort(originalList))
        function HightoLowSort(arr){
            if(arr.length <= 1){
                return arr;
            }
            let pivot = arr[Math.floor(arr.length/2)];
            arr.splice(Math.floor(arr.length/2),1);
            const left = [];
            const right = [];
            for(let i = 0;i<arr.length;i++){
                if(arr[i].price>=pivot.price){
                    left.push(arr[i]);
                }else{
                    right.push(arr[i]);
                }
            }
            return([...HightoLowSort(left),pivot,...HightoLowSort(right)])
        }
  return (
    <div className=" filter bg-orange-200 py-6 md:py-8 ">
    <div className=" mx-3  md:max-w-7xl md:mx-auto relative flex flex-row">
        <div className="flex flex-row gap-2">
            <h2 className="text-[12px] pt-1 md:text-xl text-gray-800">Sort By:</h2>
            <div className="relative bg-white w-[180px] ">
                <div onMouseOver={()=>setActiveToggle(true)}
                    onMouseOut={()=>setActiveToggle(false)}
                className="p-2 flex flex-row cursor-pointer justify-between">
                    <h3>{sort[currentSort]}</h3>
                    <MdOutlineArrowDropDown className="text-2xl"/>
                </div>
                <div onMouseOver={()=>setActiveToggle(true)} onMouseOut={()=>setActiveToggle(false)} className={` ${activeToggle?`block`:'hidden'} absolute w-[180px] bg-white p-2 flex flex-col gap-2 pt-0`}>
                      <h2 className="cursor-pointer" onClick={()=>{setSort(0); setActiveToggle(false); setItemsList(originalList);} }>{sort[0]}</h2>  
                      <h2 className="cursor-pointer" onClick={()=>{setSort(1); setActiveToggle(false); setItemsList(LowtoHighSort(originalList));}}>{sort[1]}</h2>  
                      <h2 className="cursor-pointer" onClick={()=>{setSort(2); setActiveToggle(false); setItemsList(HightoLowSort(originalList))}}>{sort[2]}</h2>  
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ProductSearch