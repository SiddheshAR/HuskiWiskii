import React,{useState} from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { FaCircleMinus } from "react-icons/fa6";
const Faq = () =>{ 
    
    const QuestionsList =[
          {
            "question": "How can I transition my pet to a new food?",
            "answer": "Gradually introduce the new food by mixing it with the old one over 7-10 days, increasing the proportion of the new food each day. This helps prevent digestive upset and allows your pet to adjust gradually."
          },
          {
            "question": "What's the shelf life of pet food?",
            "answer": "The shelf life varies depending on the type of food and its ingredients. Dry kibble usually lasts up to one year if stored properly in a cool, dry place. Wet food typically lasts 2-3 years if unopened and stored according to instructions."
          },
          {
            "question": "Should I choose grain-free food for my pet?",
            "answer": "Grain-free diets may be suitable for pets with specific dietary needs or sensitivities, but they're not necessary for all pets. Consult with a veterinarian to determine if a grain-free diet is appropriate for your pet's health and nutritional requirements."
          },
          {
            "question": "How much food should I feed my pet daily?",
            "answer": "Feeding guidelines vary based on factors like age, size, and activity level. Generally, dogs require 1-2% of their body weight in food per day, while cats typically need 3-5 ounces of food daily."
          },
          {
            "question": "Are there any ingredients I should avoid in pet food?",
            "answer": "Avoid ingredients like artificial preservatives, colors, and flavors. Look for foods with named meat sources as the primary ingredients and avoid by-products or fillers like corn or wheat."
          }
        ]
    const [Fquestion,setQuestion] = useState(0);
    const ToggleState = (i)=>{
      if(i==Fquestion){
        setQuestion(null)
      }else{
        setQuestion(i)
      }
    }   

  return (
    <div className="bg-white w-full">
        <div className=" px-4 py-4 md:max-w-3xl mx-auto bg-white">
            <div >
    {/* Doggo Img */}
            </div>
            <div>
                <div className="text-center  pt-6 pb-2">
                    {/* Faq Heading */}
                    <h2 className=" text-2xl md:text-4xl font-semibold text-gray-800">FREQUENTLY ASKED QUESTIONS</h2>
                </div>   
                <div className="w-[250px] m-auto">
                    <img src="https://cdn.shopify.com/s/files/1/0086/0795/7054/files/separater_ba3aafe9-f88a-47e4-a52a-dcaa99cbaef7.png?v=1640585753"/>
                </div>
                <div className="py-6 flex flex-col gap-8 md:gap-6">
                    {/* Accordian Sec */}
                    {QuestionsList.map((e,index)=>{
                        return(
                            <div key={index} className=" flex flex-row rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-6 ">
                            {/* Accord CArd */}
                                <div className="w-full">
                                    {/* Content */}
                                    <div className="flex flex-row w-full justify-between cursor-pointer" onClick={()=>ToggleState(index)}>
                                      
                                        <h2 className="text-gray-800 text-lg md:text-xl font-semibold">{e.question}</h2>
                                        
                                     
                                        <div className="flex flex-col align-middle justify-center">
                                            {/* Plus icon */}
                                            <IoIosAddCircle className="text-2xl text-orange-500"/>
                                            {/* <FaCircleMinus/> */}
                                        </div>
                                    </div>

                                    <div className={`py-4 ${index==Fquestion?'block':'hidden'}`}> 
                                        <p className="duration-700 text-gray-500 font-medium ">
                                        {e.answer}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        )
                    })}


                </div>
            </div>

        </div>
    </div>
  )
}

export default Faq