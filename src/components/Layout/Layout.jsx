import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Routers />
      </div>
      <div className="mt-[10rem]">
        <Footer />
      </div>
    </>
  );
};

export default Layout;
