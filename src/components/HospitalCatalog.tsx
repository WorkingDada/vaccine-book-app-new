import ProductCard from "./ProductCard"
import Link from "next/link"

export default async function HospitalCatalog({hospitaljson}:{hospitaljson:Object}){
    const hospitaljsonReady = await hospitaljson
    return (
        <>
        Explore {hospitaljsonReady.count} Hospitals in service
        <div style={{margin:"20px", display: "flex", flexDirection: "row",  flexWrap: "wrap", justifyContent: "space-evenly", alignContent: "space-around"
            }}>
                {
                    hospitaljsonReady.data.map((hospitalItem:Object)=>(
                        <Link href={`/hospital/${hospitalItem.id}`} className="w-1/5">
                        <ProductCard 
                        txt={hospitalItem.name} 
                        imgSrc={hospitalItem.picture}/>
                        </Link>
                    ))
                }
        </div>
        </>
    )
}