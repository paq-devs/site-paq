
import Image from "next/image"
import Swiper from 'swiper';
import './swiper.css';
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
export function Depoimentos() {


    return (
        <>
            <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">Slide 1</div>
                    <div className="swiper-slide">Slide 2</div>
                    <div className="swiper-slide">Slide 3</div>
                    <div className="swiper-slide">Slide 4</div>
                    <div className="swiper-slide">Slide 5</div>
                    <div className="swiper-slide">Slide 6</div>
                    <div className="swiper-slide">Slide 7</div>
                    <div className="swiper-slide">Slide 8</div>
                    <div className="swiper-slide">Slide 9</div>
                </div>
                <div className="swiper-pagination"></div>
            </div>

        </>
    )
}