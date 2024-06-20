import Carousel from "../../components/Carousel";

export default function Testimonials() {
    const slides = [
        {
            imageUrl: '/src/assets/Testi01.jpg',
            title: 'Michell',
            description: 'Never was a studious person, but Keris products makes it easy for me to learn!',
        },
        {
            imageUrl: '/src/assets/Testi02.jpg',
            title: 'Mark',
            description: 'I like games, I hate studying, so this is perfect for me!',
        },
        {
            imageUrl: '/src/assets/Testi03.jpg',
            title: 'Troy',
            description: 'Keris products was recommended to me by my college professor, it was revolutionary.',
        },
        {
            imageUrl: '/src/assets/Testi04.jpg',
            title: 'Ned',
            description: 'I am an elementary school teacher and i can safely say that my students loves Keris products!',
        },
        ];

    return (
        <div className="min-h-screen text-center">
            <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-10">Words From Our Customer</h1>
            <Carousel slides={slides} />
            </div>
        </div>
    )
}