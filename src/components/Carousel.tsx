import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CarouselProps {
    slides: {
      imageUrl: string;
      title: string;
      description: string;
    }[];
}

export default function Carousel(props: CarouselProps) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
    };

    return(
        <div className="w-full md:w-2/3 lg:w-1/2 mx-auto">
            <Slider {...settings}>
                {props.slides.map((slide, index) => (
                    <div key={index}>
                        <div className="relative">
                        <img src={slide.imageUrl} alt={`Slide ${index + 1}`} className="w-full h-auto" />
                            <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 p-4 text-white">
                                <h2 className="text-xl font-bold">{slide.title}</h2>
                                <p className="text-lg">{slide.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}