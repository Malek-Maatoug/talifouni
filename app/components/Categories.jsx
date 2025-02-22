"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Categories() {
  const categories = [
   
    { name: "HTC Desire", image: "/images/htc-desire.jpg" },
    { name: "Huawei Mate", image: "/images/huawei_mate.jpg" },
    { name: "Infinix", image: "/images/infinix.jpg" },
    { name: "Lenovo", image: "/images/lenovo.jpg" },
    { name: "LG G3", image: "/images/lg-g3.jpg" },
    { name: "Redmi", image: "/images/redmi.jpg" },
    { name: "Samsung", image: "/images/samsung.jpg" },
    { name: "Sony Xperia", image: "/images/sonyxperia.jpg" },
   
  ];

  return (
    <section className="py-6">
      <div className="container mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="mySwiper"
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <div className="w-33 h-45 md:h-45 bg-gray-100 flex items-center justify-center shadow-md overflow-hidden rounded-xl">
                <img src={category.image} alt={category.name} className="w-33 h-45 object-cover" />
              </div>
              <p className="mt-2 text-center text-sm font-semibold">{category.name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
