import React from "react";

const categories = [
  {
    name: "New",
    subCategory: [
      {
        name: "test",
        path: "/",
      },
      {
        name: "test",
        path: "/",
      },
      {
        name: "test",
        path: "/",
      },
      {
        name: "test",
        path: "/",
      },
    ],
  },
  {
    name: "Lips",
    subCategory: [
      {
        name: "test",
        path: "/",
      },
      {
        name: "test",
        path: "/",
      },
      {
        name: "test",
        path: "/",
      },
      {
        name: "test",
        path: "/",
      },
      {
        name: "test",
        path: "/",
      },
    ],
  },
  {
    name: "Face",
    subCategory: [
      {
        name: "test",
        path: "/",
      },
    ],
  },
  {
    name: "Eyes",
    subCategory: [
      {
        name: "test",
        path: "/",
      },
      {
        name: "test",
        path: "/",
      },
      {
        name: "test",
        path: "/",
      },
    ],
  },
  {
    name: "Brushes",
    subCategory: [
      {
        name: "test",
        path: "/",
      },
      {
        name: "test",
        path: "/",
      },
      {
        name: "test",
        path: "/",
      },
    ],
  },
];

const megaMenu = () => {
  return (
    <ul className="flex justify-center">
      {categories.map((category, index) => (
        <li
          className="hoverable hover:bg-pink-500 hover:text-white"
          key={index}
        >
          <a
            href=""
            className="relative block py-6 px-4 text-sm font-bold hover:bg-pink-500 hover:text-white lg:p-6 lg:text-base"
          >
            {category.name}
          </a>
          <div className="mega-menu mb-16 bg-white p-6 shadow-xl sm:mb-0">
            <div className="container mx-auto mx-2 flex w-full flex-wrap justify-between">
              <div className="mb-8 w-full text-white">
                <h2 className="text-2xl font-bold text-black">
                  {category.name}
                </h2>
              </div>
              <ul className="w-full px-4 pb-6 pt-6 sm:w-1/2">
                {category.subCategory.map((subCategory, index) => (
                  <li className="mb-2 font-bold text-black" key={index}>
                    {subCategory.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default megaMenu;
