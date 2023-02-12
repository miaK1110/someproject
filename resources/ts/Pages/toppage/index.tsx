import Header from "../../Layouts/header";
import Bestsellers from "./bestsellers";
import InstagramPosts from "./instagramPosts";
import NewProducts from "./newProducts";

const TopPage = () => {
  return (
    <div className="font-main">
      <Header />
      <div className="h-[600px] w-[100wh] bg-hero-image bg-cover bg-fixed bg-center bg-no-repeat"></div>
      <Bestsellers />
      <NewProducts />
      <InstagramPosts />
    </div>
  );
};

export default TopPage;