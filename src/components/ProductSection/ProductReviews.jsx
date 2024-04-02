import { BiSolidStar } from "react-icons/bi";
import { BiSolidStarHalf } from "react-icons/bi";
import { BiStar } from "react-icons/bi";


// const ReviewBar

const StarCount = ({num})=>{

    function starCounter(n){
        let abc = n*10;
        let list1 = [];
        for(let i=1;i<6;i++){
          if((i*10)<=abc){
            //   console.log('x');
              list1.push(1)
          }
          else{
            if(((i*10)-abc)<=5 && ((i * 10) - abc) !== 0){
            //   console.log("Half")
              list1.push(2)
            }else{
            //   console.log('0')
              list1.push(0)
            }
          }}
        //   console.log(list1);
          return list1;
    }
    let StarCreate = starCounter(num);

    return(
        <div className="flex flex-row ">
        {StarCreate.map((e,index)=>{
                if(e===1){
                    return(<BiSolidStar className="text-yellow-500 text-2xl " key={index}/>)
                }
                else if(e===2){
                    return(<BiSolidStarHalf className="text-yellow-500 text-2xl" key={index}/>)
                }
                else{
                    return(<BiStar className="text-yellow-500 text-2xl" key={index}/>)
                }
            })}
        </div>
    )
}

const StarBar = ({total,starCount})=>{
    let abc = (starCount/total)*100;
    
    return(
       
            <div className="border h-[19px] mt-1  w-[100px] border-gray-200">
                <div style={{width:`${abc}px`}} className={`h-[17px] bg-yellow-500`}>
                
                </div>
            </div>
        
    )
}

const ReviewSection = ({reviews})=>{

    // console.log(reviews.userReviews)
    let UserReviews =reviews.userReviews ;

    return(
        <div className="py-5">
            {/* <h2>Load data here.</h2> */}
            <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4">
            {UserReviews.map((e,index)=>{
                return(
                    <div 
                    className="bg-gray-50 p-3 md:w-[48%]  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]" key={index}>
                            {}
                            <h2 className="font-semibold text-xl">{e.username}</h2>
                            <p>{e.date}</p>
                            <StarCount num={e.rating}/>
                            <p>{e.comment}</p>                        
                    </div>
                )
            })}
            </div>
        </div>
    )
}

const MainReviewSect = ({avgRating,Stars,reviews,starCounter})=>{


return(
    <div className=" flex flex-col md:flex-row gap-4 md:gap-14">
        <div>
            <StarCount num={avgRating}/> 
            <p className="text-gray-500">Based on {reviews.total} reviews</p>
            <div className="display flex flex-col my-2 md:hidden">
                <button className="w-full border cursor:pointer text-lg text-blue-700 mx-auto border-blue-700 my-2 py-2">Write a Review</button>
                <button className="w-full border cursor:pointer text-lg text-blue-700  mx-auto border-blue-700 my-2 py-2">Ask a Question</button>
            </div>
        </div>
        <div>
                <div className="flex flex-row">
                    <StarCount num={5}/>
                    <StarBar total={reviews.total} starCount={reviews.five} />
                    <span className="text-md ml-2">{Math.floor((reviews.five/reviews.total)*100)}%  <span className="ml-3">({reviews.five})</span> </span>
                </div>
                <div className="flex flex-row">
                    <StarCount num={4}/>
                    <StarBar total={reviews.total} starCount={reviews.four} />
                        <span className="text-md ml-2">{Math.floor((reviews.four/reviews.total)*100)}% <span className="ml-3">({reviews.four})</span></span>
                </div>
                <div className="flex flex-row">

                                    <StarCount num={3}/>
                                    <StarBar  total={reviews.total} starCount={reviews.three} />    
                                    <span className="text-md ml-2">{Math.floor((reviews.three/reviews.total)*100)}% <span className="ml-3">({reviews.three})</span></span>
                </div>
                <div className="flex flex-row">
                <StarCount num={2}/> 
                <StarBar total={reviews.total} starCount={reviews.two} />
                            <span className="text-md ml-2">{Math.floor((reviews.two/reviews.total)*100)}% <span className="ml-3">({reviews.two})</span></span>

                </div>
                <div className="flex flex-row">
                <StarCount num={1}/> 
                <StarBar total={reviews.total} starCount={reviews.one} />
                                                    <span className="text-md ml-2">{Math.floor((reviews.one/reviews.total)*100)}% <span className="ml-3">({reviews.one})</span></span>

                </div>
        </div>
    </div>
)
}

const ProductReviews = ({reviews}) => {
    // const reviews={
    //     "total":16,
    //     "five":8,
    //     "four":2,
    //     "three":2,
    //     "two":3,
    //     "one":1,
    //     "userReviews":[{
    //         "username": "Rajesh",
    //         "date": "22-11-23",
    //         "comment": "This product is awesome! My pet Labrador really loved it.",
    //         "rating": 4.5
    //     },
    //     {
    //         "username": "Priya",
    //         "date": "23-12-05",
    //         "comment": "Great quality! Perfect for my dog who can't get enough of it.",
    //         "rating": 3.8
    //     },
    //     {
    //         "username": "Arun",
    //         "date": "22-12-15",
    //         "comment": "Impressed with the durability. Ideal for my energetic dog.",
    //         "rating": 4.2
    //     },
    //     {
    //         "username": "Neha",
    //         "date": "23-12-28",
    //         "comment": "Excellent product! My Labrador enjoys it thoroughly.",
    //         "rating": 4.7
    //     }]
    // }

    function avgCalc(reviews){
        let totalStars = reviews.total*5;
        let currTotal = ((reviews.five*5)+(reviews.four*4)+(reviews.three*3)+(reviews.two*2)+(reviews.one));
        return((currTotal/totalStars)*5)
        // return((160)/16)
    }

    function starCounter(n){
        let abc = n*10;
        let list1 = [];
        for(let i=1;i<6;i++){
          if((i*10)<=abc){
            //   console.log('x');
              list1.push(1)
          }
          else{
            if(((i*10)-abc)<=5 && ((i * 10) - abc) !== 0){
            //   console.log("Half")
              list1.push(2)
            }else{
            //   console.log('0')
              list1.push(0)
            }
          }}
        //   console.log(list1);
          return list1;
    }
    let avgRating = avgCalc(reviews);
    let Stars = starCounter(avgRating);
    // let Star1 = starCounter(1);
  return (
    <div className="max-w-7xl mx-auto p-8 ">
        <h2 className="text-3xl font-semibold my-2"> Customers Reviews</h2>
        <div className="p-1 flex flex-col md:flex-row gap-1 justify-between ">
            <MainReviewSect  reviews={reviews} avgRating={avgRating} Stars={Stars}/>
            <div  className=" flex flex-row ">
                <div className="hidden md:flex md:flex-col lg:flex-row my-2  h-16 md:5 lg:gap-10">
                    <button className="w-36 py-1 border cursor:pointer text-lg text-blue-700  border-blue-700 my-2 ">Write a Review</button>
                    <button className="w-36 py-1 border cursor:pointer text-lg text-blue-700 lg:ml-4 border-blue-700 my-2 ">Ask a Question</button>
                </div>
            </div>
        </div>
        <div className="border-t border-t-gray-300 my-5">
            <ReviewSection reviews={reviews}/>
        </div>
    </div>
  )
}

export default ProductReviews