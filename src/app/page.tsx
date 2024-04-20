import Header from "../components/Header";
import Footer from "../components/Footer";
import NavBar from "../components/Navigation";

export default function Home() {
  return (
    <div>
      <Header />
      <hr />
      <NavBar />
      <hr />
      <h1>홈입니다</h1>
      <hr />
      <Footer />
    </div>
  );
}
