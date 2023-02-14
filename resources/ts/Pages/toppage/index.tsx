import Header from "../../Layouts/header";
import Bestsellers from "./bestsellers";
import InstagramPosts from "./instagramPosts";
import NewProducts from "./newProducts";
import MegaMenu from "../../Layouts/megaMenu";
import Footer from "../../Layouts/footer";

const TopPage = () => {
  return (
    <div className="font-main">
      <Header />
      <MegaMenu />
      <div className="h-[600px] w-[100wh] bg-hero-image bg-cover bg-fixed bg-center bg-no-repeat"></div>
      <Bestsellers />
      <NewProducts />
      <InstagramPosts />
      {/* temporarily space */}
      <div className="h-[180px]"></div>
      <Footer />
    </div>
  );
};

export default TopPage;
