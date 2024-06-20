import Timeline from "/src/assets/Timeline.jpg"

export default function About(){
    return(
        <div className="container mx-auto p-4">
            <h1 className="text-7xl font-bold text-center">About Us</h1>
            <img src={Timeline} alt="Timeline"></img>
            <h1 className="text-3xl font-bold mb-4 text-center">Our Culture</h1>
            <p className="text-lg mb-4">
            Creating a vibrant company culture for an IT company involves fostering an environment where innovation thrives, creativity is encouraged, and collaboration is paramount. We prioritize continuous learning and development, offering ample opportunities for our employees to expand their skills and explore new technologies.
            </p>
            <p className="text-lg mb-4">
            Teamwork is at the core of our operations, with cross-functional teams collaborating seamlessly to achieve common goals. We value work-life balance, offering flexible arrangements to support our employees' well-being. Transparency and open communication are fundamental, ensuring everyone is informed and empowered to contribute their ideas. Diversity and inclusion are celebrated, creating a culture where every voice is heard and respected. We prioritize employee well-being with comprehensive wellness programs and recognize achievements to boost morale.
            </p>
            <p className="text-lg">
            Accountability and ethical behavior are ingrained in our practices, ensuring integrity in everything we do. Additionally, we are committed to environmental and social responsibility, incorporating sustainable practices and giving back to our communities. Together, these principles define our company culture, driving our success and fostering a positive workplace where employees thrive and innovation flourishes.
            </p>
        </div>
    )
}