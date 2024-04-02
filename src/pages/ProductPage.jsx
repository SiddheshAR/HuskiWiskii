
import ProductSection from '../components/ProductSection/ProductSection.jsx'
import ProductReviews from '../components/ProductSection/ProductReviews.jsx'
// import ProductDescription from '../components/ProductSection/ProductDescription.jsx'
import ProductServices from '../components/ProductSection/ProductServices.jsx'

// import { dogProducts as importedDogProducts } from '../components/ProductSection/index.js'
// import { dogGroom as importedDogProducts } from '../api/dogs/groomDog.js';
import {useState,useEffect} from 'react';
import {useParams,useLocation } from 'react-router-dom';
import { getFirestore,collection, query, where,getDocs } from 'firebase/firestore';
import {app} from '../firebase.js';

const firestore = getFirestore(app);

const ProductPage = () => {
  const location = useLocation();
  const url = location.pathname.split('/');
  const [dogProducts, setDogProducts] = useState([]);
  const {  productId,sub_category,category } = useParams();
  // console.log(sub_category,category,productId);

  useEffect(() => {
        const ProductFetch=async ()=>{
          try{
            const subCollectionRef = collection(firestore,'categories',category,sub_category);
            const q = query(subCollectionRef,where('id','==',parseInt(productId)));
            const queryFetch = await getDocs(q);
            if(!queryFetch.empty){
              const doc = queryFetch.docs[0];
              setDogProducts(doc.data())
            }else{
              console.log('No product found with ID:', productId);
            }
          }catch(error){
            console.log("Error Fetching data",error)
          }
        }
        ProductFetch();
  }, []);

  if (!dogProducts || dogProducts.length === 0) {
    return <div>Loading...</div>; // You can replace this with a loading indicator or any other logic
  }

  return (
    <div >
            {/* <Navbar /> */}
                {/* <Navitems/> */}
                <div className="max-w-7xl mx-auto px-8 mt-6 pt-6">
                    <div className="text-lg text-gray-600">
                      {/* <span className="hover:text-orange-500 cursor-pointer">{url[1].toUpperCase()}</span>/ */}
                      <span className="hover:text-orange-500 cursor-pointer">{url[2].toUpperCase()}</span>/<span className="hover:text-orange-500 cursor-pointer">{dogProducts?.title}</span>  </div>
                </div>
                <ProductSection data={dogProducts}/>
                <ProductServices />
                <ProductReviews reviews={dogProducts.reviews}/>
                {/* <ProductDescription data={dogProducts.description}/> */}

            {/* <Footer /> */}
    </div>
  )
}

export default ProductPage