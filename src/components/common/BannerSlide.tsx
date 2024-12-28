import { BannerItem } from "@/data/bannerData";
import { FaExternalLinkAlt } from "react-icons/fa";

interface BannerSlideProps {
  item : BannerItem
}

const BannerSlide: React.FC<BannerSlideProps> = ({item}) => {
  return (
    <div className={`bg-${item.img} bg-no-repeat bg-center bg-cover py-80 relative left-0`}>
      <h5 className="p-4 text-2xl font-semibold bg-teal w-fit rounded-r-xl absolute top-0">
        {item.price}$
      </h5>
      <h1 className="lg:text-5xl font-bold text-light text-center uppercase">
        {item.brand} {item.model}
      </h1>
      <button className="flex items-center gap-x-2 capitalize font-semibold text-xl px-5 py-3 bg-teal rounded-3xl text-white border-2 border-teal hover:bg-light hover:text-teal duration-200 mx-auto mt-8">
        <span>view details</span>
        <span>
          <FaExternalLinkAlt />
        </span>
      </button>
    </div>
  );
};

export default BannerSlide;
