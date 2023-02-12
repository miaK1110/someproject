import React from "react";

const InstagramPosts = () => {
  return (
    <div className="w-full">
      <p className="pt-10 text-center font-bold">
        Shop the gram | follow us @someids10103879645
      </p>
      <div className="flex flex-row">
        <img
          className="xs:w-xs mb-3 h-[500px] w-[500px] pt-10"
          src="/images/instagram1.jpg"
        />
        <img
          className="xs:w-xs mb-3 h-[500px] w-[500px] pt-10"
          src="/images/instagram2.jpg"
        />
        <img
          className="xs:w-xs mb-3 h-[500px] w-[500px] pt-10"
          src="/images/instagram3.jpg"
        />
        <img
          className="xs:w-xs mb-3 h-[500px] w-[500px] pt-10"
          src="/images/instagram4.jpg"
        />
      </div>
    </div>
  );
};

export default InstagramPosts;
