
import Difference from "../components/contentSection/Difference.jsx";

// import {getDatabase,ref,set} from 'firebase/database'
// import {app} from '../firebase.js';
// import ProductGrid from '../components/ProductGrid/ProductGrid.jsx';
import MultiProductTab from '../components/ProductGrid/MultiProductTab.jsx'
import ProductSliders from '../components/productCTA/ProductSliders.jsx';
import PetHead from '../components/ProductGrid/PetHead.jsx';
import Faq from '../components/Faq/Faq.jsx';
// import FirebaseDataImport from '../firebaseDataImport.jsx'

// const db = getDatabase(app);

const Home = () => {

  return (
    <div>

      <ProductSliders CtaCategory={"Dog"}/>
      <PetHead/>
      <MultiProductTab category={"Dog"} sortInclude={false}/>
      <ProductSliders CtaCategory={"Cat"}/>
      <MultiProductTab category={"Cat"} sortInclude={false}/>
      <Faq/>
      {/* <FirebaseDataImport/> */}
      {/* <ProductGrid category={'Cat'} sub_category={'Treats'}/> */}
      <Difference/>

    </div>
  );
};

export default Home;
