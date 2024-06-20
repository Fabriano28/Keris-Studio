import { useState, useEffect } from "react"
import Card from "../components/Card"
import axios from "axios"

export default function Teams(){
    const [members, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://randomuser.me/api/?results=10');
                setUsers(response.data.results); 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchUsers();
    }, []);

    return(
        <div>
            <div className="p-4">
                <div className="text-center">
                        <h1 className="text-4xl font-bold mb-10">Our Team Members</h1>
                </div>
                <div className="flex justify-center text-center bg-white">
                    <div className="max-w-screen-lg w-full p-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {members.map((member, index) => (
                                <Card
                                key={index}
                                title={member.name.first + " " + member.name.last}
                                imageUrl={member.picture.large}
                                description={member.email}
                                />
                            ))}
                        </div>
                    </div>
                </div> 
            </div> 
        </div>
    )
}