import Image from "next/image"
import getHospital from "@/libs/getHospital"

export default async function HospitalDetailPage({params} : {params: {hid:string}}) {
    const hospitalDetail = await getHospital(params.hid)

    return (
        <main className="text-center p-5 bg-white text-black">
            <h1 className="text-lg font-medium">{hospitalDetail.data.name}</h1>
            <div className="flex flex-row my-5">
                <Image src={ hospitalDetail.data.picture }
                alt='Hospital Image'
                width={0} height={0} sizes="100vw"
                className="rounded-lg w-[30%]"/>
                <div>
                    <div className="text-md mx-5">Address : {hospitalDetail.data.address}</div>
                    <div className="text-md mx-5">District : {hospitalDetail.data.district}</div>
                    <div className="text-md mx-5">Province : {hospitalDetail.data.province}</div>
                    <div className="text-md mx-5">Postalcode : {hospitalDetail.data.postalcode}</div>
                    <div className="text-md mx-5">Telephone : {hospitalDetail.data.tel}</div>
                </div>
            </div>
        </main>
    )
}

export async function generateStaticParams() {
    return [{hid:'001'},{hid:'002'},{hid:'003'}]
}