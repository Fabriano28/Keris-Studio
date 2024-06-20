interface CardProps {
    title: string;
    imageUrl: string;
    description: string;
  }

  export default function Card(props: CardProps) {
    return(
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={props.imageUrl} alt={props.title} className="object-cover object-center" />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{props.title}</h2>
                <p className="text-gray-600">{props.description}</p>
            </div>
        </div>
    )
  }