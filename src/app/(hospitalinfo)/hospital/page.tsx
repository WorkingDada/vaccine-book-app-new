import getHospitals from "@/libs/getHospitals"
import HospitalCatalog from "@/components/HospitalCatalog"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"

export default function hospital(){ 
    const hospitals = getHospitals()


    return (
        <main className="text-center p-5">
            <h1 className="text-xl font-medium">Hospital</h1>
            <Suspense fallback={<p>Loading ...<LinearProgress/></p>}>
                <HospitalCatalog hospitaljson={hospitals}/>
            </Suspense>
        </main>
    )
}