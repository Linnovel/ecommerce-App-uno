import Navbar from "./Navigation/Navbar";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebard from "./SideBar/Sidebard";

function App() {
  return (
    <>
      <Sidebard />
      <Navbar />
      <Recommended />
      <Products />
    </>
  );
}

export default App;
