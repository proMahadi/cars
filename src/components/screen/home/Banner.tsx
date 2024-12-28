import BannerSlide from "@/components/common/BannerSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { bannerData} from "@/data/bannerData";



const Banner: React.FC = () => {
  return (
    <section>
      <div className="container pt-[122px]">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {bannerData.map((item) => (
            <SwiperSlide>
              <BannerSlide item={item}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Banner;
