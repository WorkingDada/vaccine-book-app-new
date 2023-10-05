'use client'
import { useReducer } from "react"
import ProductCard from "./ProductCard"
import { RatingsAction } from "@/types"
import Link from "next/link"

export default function CardPanel(){
    const ratingsReducer = (
        state: Map<string,number>, 
        action: RatingsAction
    )=>{
        switch(action.type){
            case 'SET': {
                const {name,rating} = action.payload;
                const updatedRatingSet = new Map(state);
                updatedRatingSet.set(name,rating !== null ? rating :0);
                return updatedRatingSet;
            }
            case 'DELETE': {
                const {hospitalToDelete} = action.payload;
                const updatedRatingDelete = new Map(state);
                updatedRatingDelete.delete(hospitalToDelete);
                return updatedRatingDelete;
            }
            default: 
                return state;
        }
    }
    
    const initialRatings = new Map([
        ["Chulalongkorn Hospital",0],
        ["Rajavithi Hospital",0],
        ["Thammasat University Hospital",0],
    ]);
    
    const [ratings, dispatchRating] = useReducer(ratingsReducer, initialRatings);
    
    const handleRatingChange = (txt:string, newRating:number) => {
        dispatchRating({type: "SET", payload: { name: txt, rating: newRating}})
    }

    const handleCardClick = (txt:string) => { 
        dispatchRating({type: "DELETE", payload: { hopsitalToDelete: txt}})
    }

    // Mock Data for Demonstration Only
    const mockHospitalRepo = [
        {hid: "001", name:"Chulalongkorn Hospital", image:"/img/chula.jpg"},
        {hid: "002", name:"Thammasat University Hospital", image:"/img/thammasat.jpg"},
        {hid: "003", name:"Rajavithi Hospital", image:"/img/rajavithi.jpg"}
    ]

    return (
            <div style={{margin:"20px", display: "flex", flexDirection: "row",  flexWrap: "wrap", 
            justifyContent: "space-around", alignContent: "space-around"}}>
                {
                    mockHospitalRepo.map((hospitalItem)=>(
                        <Link href={`/hospital/${hospitalItem.hid}`} className="w-1/5">
                        <ProductCard 
                        txt={hospitalItem.name} 
                        imgSrc={hospitalItem.image}
                        ratings={ratings}
                        handleRatingChange={handleRatingChange}
                        handleCardClick={handleCardClick}/>
                        </Link>
                    ))
                }
            <div className="border-t pt-4">
                <h2 className="text-xl font-semibold mb-2 px-3">Hospital Ratings:</h2>
                <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Hospital Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Rating
                    </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {Array.from(ratings)
                    .sort((a, b) => b[1] - a[1])
                    .map(([name, rating]) => (
                        <tr key={name} onClick={() => handleCardClick(name)}>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-black lg:w-60 xl:w-72">{name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-gray-600">{rating}</span>
                        </td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    );
}