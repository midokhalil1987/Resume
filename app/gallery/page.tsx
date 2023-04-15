import BackToTop from "app/components/backToTop";
import ImageBox from "app/components/imageBox";
import Navbar from "app/components/navbar";

export default function Home() {
  return (
    <>
      <div className="bg-no-repeat bg-cover bg-center bg-gradient-to-b from-fuchsia-500">
        <Navbar />
        <ImageBox />
        <BackToTop />
      </div>
    </>
  );
}
