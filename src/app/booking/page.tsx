import LocationDateReserve from "@/components/LocationDateReserve";
import { getServerSession } from "next-auth";
import { AuthOptions } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";
import { authOptions } from "../api/auth/[...nextauth]/route";
import BookingForm from "@/components/BookingForm";

export default async function Booking() {
  const session = await getServerSession(authOptions)
  
  if (!session||!session.user.token) return null

  const profile = await getUserProfile(session.user.token)
  var createdAt = new Date(profile.data.createdAt)

  return (
    <div className="bg-white p-5 text-black">
      <div className='bg-slate-300 rounded-lg m-5 p-5'>
        <div className="text-2xl">{profile.data.name}</div>
        <table className="table-auto border-separate border-spacing-2">
          <tbody>
            <tr>
              <td>Email</td>
              <td>{profile.data.email}</td>
            </tr>
            <tr>
              <td>Tel.</td>
              <td>{profile.data.tel}</td>
            </tr>
            <tr>
              <td>Member Since</td>
              <td>{createdAt.toString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <BookingForm/>
    </div>
  );
}
