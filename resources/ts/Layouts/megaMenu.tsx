import React from "react";

const categories = [
  {
    name: "New",
    image: "/images/new1.jpg",
    subCategory: [
      {
        name: "Spring Lipgloss collenctions",
        path: "/",
      },
      {
        name: "Liquid glitter eyeshadow collenctions",
        path: "/",
      },
      {
        name: "EyeShadow Pallets",
        path: "/",
      },
      {
        name: "Black Eyeliner",
        path: "/",
      },
      {
        name: "Brushes",
        path: "/",
      },
      {
        name: "Face Primers",
        path: "/",
      },
    ],
  },
  {
    name: "Lips",
    image: "/images/lipsticks.jpg",
    subCategory: [
      {
        name: "Lip Sticks",
        path: "/",
      },
      {
        name: "Liquid LipSticks",
        path: "/",
      },
      {
        name: "Lip Grosses",
        path: "/",
      },
      {
        name: "Lip Liners",
        path: "/",
      },
      {
        name: "Lip Pallets",
        path: "/",
      },
      {
        name: "Lip Care",
        path: "/",
      },
    ],
  },
  {
    name: "Face",
    image: "images/foundations.jpg",
    subCategory: [
      {
        name: "Foundations",
        path: "/",
      },
      {
        name: "Powders",
        path: "/",
      },
      {
        name: "Blushes",
        path: "/",
      },
      {
        name: "Concealers",
        path: "/",
      },
      {
        name: "Highlighters",
        path: "/",
      },
      {
        name: "Face Primers",
        path: "/",
      },
    ],
  },
  {
    name: "Eyes",
    image: "/images/eyeliners.jpg",
    subCategory: [
      {
        name: "Eye Liners",
        path: "/",
      },
      {
        name: "Eye Shadows",
        path: "/",
      },
      {
        name: "Mascaras",
        path: "/",
      },
      {
        name: "Lashes",
        path: "/",
      },
    ],
  },
  {
    name: "Brushes",
    image: "/images/brushes.jpg",
    subCategory: [
      {
        name: "Eye Brushes",
        path: "/",
      },
      {
        name: "Lip Brushes",
        path: "/",
      },
      {
        name: "Face Brushes",
        path: "/",
      },
      {
        name: "Others",
        path: "/",
      },
    ],
  },
];

type SubCategory = {
  name: string;
  path: string;
};

type Category = {
  name: string;
  image: string;
  subCategory: SubCategory[];
};

const megaMenu = () => {
  const itemNum = 3;
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
              <div className="mb-8 flex w-full items-center justify-center">
                <div>
                  <h2 className="pb-2 text-2xl font-bold text-black">
                    {category.name}
                  </h2>
                  <img
                    src={category.image}
                    alt={`${category.name}_image`}
                    className="h-[300px] w-[300px]"
                  />
                </div>
                <ul className="ml-8 w-full px-4 pb-6 sm:w-1/2">
                  {category.subCategory
                    .reduce<SubCategory[][]>((acc, subCategory, index) => {
                      const chunkIndex = Math.floor(index / itemNum);
                      if (!acc[chunkIndex]) {
                        acc[chunkIndex] = [];
                      }
                      acc[chunkIndex].push(subCategory);
                      return acc;
                    }, [])
                    .map((subCategoryGroup, groupIndex) => (
                      <div key={groupIndex} className="mb-10 flex gap-10">
                        {subCategoryGroup.map((subCategory, index) => (
                          <li className="mb-2 font-bold text-black" key={index}>
                            <a href="">{subCategory.name}</a>
                          </li>
                        ))}
                      </div>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default megaMenu;
