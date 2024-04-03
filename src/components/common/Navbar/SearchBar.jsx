import React,{useState,useRef,useEffect} from 'react'
import {Link} from 'react-router-dom';

const SearchBar = () => {
    const searchRef = useRef(null);
    const [searchKey,SetSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [showResults,setShowResults]=useState(false);

    useEffect(()=>{
        function handleClickOutside(event){
            if(searchRef.current && !searchRef.current.contains(event.target)){
                setShowResults(false);
            }   
        }
        document.addEventListener('mousedown',handleClickOutside)
        return()=>{
            document.removeEventListener('mousedown',handleClickOutside);
        }
    },[])

        function SearchFetch(m){

            const SearchKeywords = 
            [["Dog","/search/Dog/all"],
            ["Cat","/search/Cat/all"],
            ["Dog Food","/Dog_Food"],
            ["Cat Food","/Cat_Food"],
            ["Cat Treats","/Cat_Treats"],
            ["Dog Treats","/Dog_Treats"],
            ["Dog Grooming","/Dog_Grooming"],
            ["Cat Grooming","/Cat_Grooming"],
            ["Dog Bed","/Dog_Bed"],
            ["Cat Bed","/Cat_Bed"],
            ["Rabbit","/Rabbit"],
            ["Bird","/Birds"]
        ];

            let q=m.target.value;
            // console.log(q.length);
            if(q===""){
                setSearchResults([]);
            }else{
                let srchResults = SearchKeywords.filter(keyword=>keyword[0].toLowerCase().includes(q.toLowerCase()));
                setSearchResults(srchResults);
            }

            // console.log(srchResults)
        }

    function HandleSearchQuery(e){
        SetSearch(e.target.value.trim());
        setShowResults(true);
        // console.log("Changed Sataet")
        SearchFetch(e)
    }

  return (  
    <div className="relative" ref={searchRef}>
        <input  type="text" name="Search" onChange={(e)=>HandleSearchQuery(e)} className="w-full  md:w-full text-md text-gray-600 p-1 md:p-2 border   focus:border-orange-500 focus:border-2 focus:outline-none border-orange-400 rounded-lg" placeholder={"Search"} value={searchKey}   />
      
        {showResults &&  (
            <div className="absolute z-50 bg-white w-full">
                {/* <h3>Hahaha</h3> */}
            {searchResults.map((e,index)=>{
            return(<div key={index} className="py-1 px-4">
                <Link to={e[1]} onClick={()=>showResults(false)}>
                <h2 className="text-gray-700 hover:text-orange-500 hover:underline cursor-pointer">{e[0]}</h2>
                </Link>
            </div>)
            })}

            </div>
        )}
    </div>
  )
}

export default SearchBar



