'use client'
import { useReducer } from "react"
import ProductCard from "./ProductCard"
import { RatingsAction } from "@/types"

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

    return (
            <div style={{margin:"20px", display: "flex", flexDirection: "row",  flexWrap: "wrap", 
            justifyContent: "space-around", alignContent: "space-around"}}>
                <ProductCard 
                txt="Chulalongkorn Hospital" 
                imgSrc="/img/chula.jpg"
                ratings={ratings}
                handleRatingChange={handleRatingChange}
                handleCardClick={handleCardClick}/>
                <ProductCard 
                txt="Thammasat University Hospital" 
                imgSrc="/img/thammasat.jpg"
                ratings={ratings}
                handleRatingChange={handleRatingChange}
                handleCardClick={handleCardClick}/>
                <ProductCard 
                txt="Rajavithi Hospital" 
                imgSrc="/img/rajavithi.jpg"
                ratings={ratings}
                handleRatingChange={handleRatingChange}
                handleCardClick={handleCardClick}/>
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