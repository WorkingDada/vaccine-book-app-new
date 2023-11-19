import getHospitals from "@/libs/getHospitals"
import HospitalCatalog from "@/components/HospitalCatalog"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
import AddHospitalForm from "@/components/AddHospitalForm";

export default async function hospitals(){
    
    const Hospitals = getHospitals()

    return (
        <main className="text-center p-5 bg-white text-black">
            <h1 className="text-xl font-medium">Hospital</h1>
            <Suspense fallback={<p>Loading ...<LinearProgress/></p>}>
                <HospitalCatalog hospitaljson={Hospitals}/>
                <AddHospitalForm/>
            </Suspense>
        </main>
    )
}