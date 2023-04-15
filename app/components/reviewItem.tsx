import Image from "next/image";

type Props = {
  boxStyle?: string;
  src: any;
  alt: string;
  imgStyle?: string;
};

const ReviewItem = (props: Props) => {
  const { boxStyle, src, alt, imgStyle } = props;
  return (
    <>
      <div
        className={`relative box-content w-96 h-96 md:w-72 md:h-72 lg:h-52 lg:w-52 p-4 ${boxStyle}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          className={`p-2 hover:p-0 hover:shadow-2xl transition-all ease-in-out duration-500 rounded-xl ${imgStyle}`}
        />
      </div>
    </>
  );
};

export default ReviewItem;
