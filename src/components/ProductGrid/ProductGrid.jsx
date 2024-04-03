import React,{useState,useEffect,useRef} from 'react'
import ItemCard from '../common/cards/ItemCard.jsx';
import {nanoid} from 'nanoid';
import {app} from '../../firebase.js';
import CardSkeleton from '../common/CardSkeleton.jsx';
import { MdOutlineArrowDropDown } from "react-icons/md";
import { getFirestore,collection, query, getDocs } from 'firebase/firestore';

const firestore =getFirestore(app);

const ProductGrid = ({category,sub_category,optionalCount=0,sortInclude=true}) => {
  const [products,setProduct] = useState([]);
  const [loading,setLoading] = useState(true);
  const [originalList,setOriginialList]=useState([]);
  let sortInclude1  = sortInclude;
  // console.log(sortInclude);
    useEffect(()=>{
      const fetchData =async () =>{
        try{const subCatRef = collection(firestore,'categories',category,sub_category);
        setLoading(true);
        const q = query(subCatRef);
        const querySnapshot = await getDocs(q);
        let listItems = [];
        querySnapshot.forEach((e)=>{listItems.push(e.data())});
        // querySnapshot.forEach((e)=>{listItems.push({...e.data()})});
        optionalCount==0?setProduct(listItems):setProduct(listItems.slice(0,optionalCount));
        setOriginialList(listItems);
        // console.log(category,sub_category);
      }
        catch(error){
          console.error('Error retrieving data from subcategory:', error);
        }finally{
          setLoading(false);
        }
      }
      fetchData();
    },[category,sub_category])
  

  return (
    <>
      <ProductSort originalList={originalList} setItemsList={setProduct} sortInclude={sortInclude1}/>

    <div className="max-w-7xl my-8 mx-auto">
        {/* <div className="flex flex-row flex-wrap gap-20 justify-center align-middle"> */}
        <div className="max-w-6xl  my-8 px-4 mx-auto grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8 ">
          {
            loading?(
              products.map(()=><CardSkeleton key={nanoid()} />)
            ):(
              products.map((e)=><ItemCard key={nanoid()} data={e}/>)
            )
          }
        </div>
    </div>
    </>
  )

  }

  const ProductSort = ({originalList,setItemsList,sortInclude}) => {
    const sort =["Featured","Price, Low to High","Price, High to Low"];
    const [currentSort,setSort]=useState(1);   
    const [activeToggle,setActiveToggle]=useState(false);
    const sortRef = useRef(null);

    useEffect(()=>{
      function addTrigger(event){
       if(sortRef.current && !sortRef.current.contains(event.target)){
        setActiveToggle(false);
        // console.log("okokok")
       }else{
        // console.log("Junior")
       }

      }
      document.addEventListener('mousedown',addTrigger);

      return () =>{
        document.removeEventListener('mousedown',addTrigger);
      }
    },[])


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
  if(sortInclude===false){
    return <></>
  }else{
  return (
    <div  className=" filter bg-orange-200 py-6 md:py-8 ">
    <div className=" mx-3 md:max-w-7xl  md:mx-10 relative flex flex-row">
        <div className="flex flex-row gap-2 ml-5">
            <h2 className="text-[15px] pt-1 mx-2 md:text-xl text-gray-800">Sorts By:</h2>
            <div ref={sortRef} className="relative bg-white w-[180px] ">
                <div onClick={()=>setActiveToggle(true)}
                className="p-2 flex flex-row cursor-pointer justify-between " >
                    <h3 >{sort[currentSort]}</h3>
                    <MdOutlineArrowDropDown className="text-2xl"/>
                </div>
                <div className={` ${activeToggle===true?'block':'hidden'}  absolute w-[180px] bg-white p-2 flex flex-col gap-2 pt-0`}>
                      <h2 className="cursor-pointer" onClick={()=>{setSort(0); setActiveToggle(false); setItemsList(originalList);} }>{sort[0]}</h2>  
                      <h2 className="cursor-pointer" onClick={()=>{setSort(1); setActiveToggle(false); setItemsList(LowtoHighSort(originalList));}}>
                        {sort[1]}</h2>  
                      <h2 className="cursor-pointer" onClick={()=>{setSort(2); setActiveToggle(false); setItemsList(HightoLowSort(originalList))}}>{sort[2]}</h2>  
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
}
export default ProductGrid