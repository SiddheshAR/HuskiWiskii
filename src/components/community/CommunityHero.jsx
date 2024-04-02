import React from "react";

const CommunityHero = () => {
  return (
    <div className="w-full">
      <button>
        <img src="https://shorturl.at/efr45" />
      </button>

      <div className="w-full min-h-screen flex justify-between items-center">
        <div className="flex flex-col gap-5 ml-[120px]">
          <div>
            <span className="font-semibold text-3xl text-orange-600">PETS ARE FAMILY </span><br />
            <span className="font-semibold text-6xl">Facebook Page</span>
            <div className="border border-gray-500 w-[120px] my-3" />
          </div>
          <div className="text-xl font-medium text-gray-800">
            Wondering where you can find people who love pets as
            <br />
            much as you do? Our Pets are family Facebook page is
            <br />
            the place for you!
          </div>
          <div className="text-xl font-medium text-gray-800">
            Connect with other pet parents, post your pets’ latest,
            <br />
            favourite moments and share what you love most about
            <br />
            pet parenting with this friendly community.
          </div>
          <span><button className="bg-orange-700 text-white font-bold p-4 rounded-3xl">
            Join Now
          </button></span>
        </div>
        <img src="https://shorturl.at/bcrvQ" className="w-[650px]"/>
      </div>

      <div className="w-full min-h-screen flex justify-between items-center">

        <img src="https://shorturl.at/ltU17" className="w-[650px]"/>

        <div className="flex flex-col gap-5 mr-[140px]">
          <div>
            <span className="font-semibold text-3xl text-orange-600">OUR INSTAGRAM </span><br />
            <span className="font-semibold text-5xl">Community Of Followers</span>
            <div className="border border-gray-500 w-[120px] my-3" />
          </div>
          <div className="text-xl font-medium text-gray-800">
            Brought together by our love for animals, the HUFT Insta
            <br />
            Fam is about all things pets.
          </div>
          <div className="text-xl font-medium text-gray-800">
            Follow us for details on our upcoming collections,
            <br />
            sales, useful pet parenting info, live sessions and, of
            <br />
            course, adorable photos of furries from all over the
            <br />
            country!
          </div>
          <div className="text-xl font-medium text-gray-800">
            Use the #HUFTForFamily hashtag on your pet’s photos
            <br />
            for a chance to be featured on our page!
          </div>
          <span><button className="bg-orange-700 text-white font-bold p-4 rounded-3xl">
            Join Now
          </button></span>
        </div>
      </div>
    </div>
  );
};

export default CommunityHero;
