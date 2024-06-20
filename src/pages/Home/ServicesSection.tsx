import Card from "/src/components/Card"

export default function ServicesSection() {
    const cardsData = [
        {
            title: 'Interactive Education',
            imageUrl: '/src/assets/Serv01.png',
            description: 'Have fun learning with our interactive media',
        },
        {
            title: 'Game Development',
            imageUrl: '/src/assets/Serv02.png',
            description: 'Blow-off some steam with our wide variety of games',
        },
        {
            title: 'IT Consulting',
            imageUrl: '/src/assets/Serv03.png',
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