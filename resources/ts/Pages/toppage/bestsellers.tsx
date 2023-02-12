import ProductCard from "../../Components/productCard";

const Bestsellers = () => {
  return (
    <div className="my-10 mx-auto md:w-[80%]">
      <div className="pb-5 text-xl font-bold">BestSellers</div>
      <div className="flex items-center justify-between">
        <ProductCard
          imageSrc="/images/product1.jpg"
          imageAlt="product1"
          productName="product1"
          productPrice="25"
        />
        <ProductCard
          imageSrc="/images/product1.jpg"
          imageAlt="product1"
          productName="product1"
          productPrice="25"
        />
        <ProductCard
          imageSrc="/images/product1.jpg"
          imageAlt="product1"
          productName="product1"
          productPrice="25"
        />
        <ProductCard
          imageSrc="/images/product1.jpg"
          imageAlt="product1"
          productName="product1"
          productPrice="25"
        />
      </div>
    </div>
  );
};

export default Bestsellers;
