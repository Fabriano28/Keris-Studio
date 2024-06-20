import Card from "../../components/Card"
import Serv01 from "/src/assets/Serv01.png"
import Serv02 from "/src/assets/Serv02.png"
import Serv03 from "/src/assets/Serv03.png"

export default function ServicesSection() {
    const cardsData = [
        {
            title: 'Interactive Education',
            imageUrl: Serv01,
            description: 'Have fun learning with our interactive media',
        },
        {
            title: 'Game Development',
            imageUrl: Serv02,
            description: 'Blow-off some steam with our wide variety of games',
        },
        {
            title: 'IT Consulting',
            imageUrl: Serv03,
            description: 'In need of help with IT projects? You have come to the right place',
        },
    ];

    return(
        <div className="p-4">
            <div className="text-center">
                    <h1 className="text-4xl font-bold mb-10">Our Services</h1>
            </div>
            <div className="flex justify-center text-center bg-white">
                <div className="max-w-screen-lg w-full p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cardsData.map((card, index) => (
                            <Card
                            key={index}
                            title={card.title}
                            imageUrl={card.imageUrl}
                            description={card.description}
                            />
                        ))}
                    </div>
                </div>
            </div> 
        </div>  
    )
}