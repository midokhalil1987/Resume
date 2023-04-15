import Image from "next/image";
import image01 from "public/01-unsplash.jpeg";
import image02 from "public/02-unsplash.jpeg";
import image03 from "public/03-unsplash.jpeg";
import image04 from "public/04-unsplash.jpeg";
import image05 from "public/05-unsplash.jpeg";
import image06 from "public/06-unsplash.jpeg";
import image07 from "public/07-unsplash.jpeg";
import image08 from "public/08-unsplash.jpeg";
import image09 from "public/09-unsplash.jpeg";
import ReviewItem from "./reviewItem";

type Props = {};

const images = [
  { src: image01, alt: "image01" },
  { src: image02, alt: "image02" },
  { src: image03, alt: "image03" },
  { src: image04, alt: "image04" },
  { src: image05, alt: "image05" },
  { src: image06, alt: "image06" },
  { src: image07, alt: "image07" },
  { src: image08, alt: "image08" },
  { src: image09, alt: "image09" },
];

const ReviewSection = (props: Props) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-10 space-y-16">
        <div className="flex flex-col text-center w-full lg:w-3/5 xl:w-2/5 px-3">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 capitalize">
            walt sed <span className="text-purple-500">orci rhous</span> get
            augue
          </h1>
          <p className="pt-5">
            Maecenas lorem neque, consectetur sit amet ullamcorper id, pulvinar
            nec massa. sollicitudin risus at nulla egestas
          </p>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img) => {
            return <ReviewItem src={img.src} alt={img.alt} key={img.alt} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ReviewSection;
