import React from "react";
import Box from "../components/dogProducts/Box";
import FilterDog from "../components/dogProducts/FilterDog";
import { NavigationFeatured } from "../components/dogProducts/useFeatured";
import Hero from "../components/dogProducts/Hero";

const DogProducts = () => {
  return (
    <div>
      <Hero />
      <NavigationFeatured />
      <FilterDog />
      <Box />
    </div>
  );
};

export default DogProducts;
