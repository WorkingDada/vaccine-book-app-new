import LocationDateReserve from "@/components/LocationDateReserve";
import { getServerSession } from "next-auth";
import { AuthOptions } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";
import { authOptions } from "../api/auth/[...nextauth]/route";

function InputField({ id, name, type, autoComplete, label }) {
  return (
    <div className="sm:col-span-3">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          name={name}
          type={type}
          autoComplete={autoComplete}
          className="block w-full rounded-md border-0 py-1.5 indent-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
}

export default async function Booking() {
  const session = await getServerSession(authOptions)
  if (!session||!session.user.token) return null

  const profile = await getUserProfile(session.user.token)
  var createdAt = new Date(profile.data.createdAt)
  
  return (
    <div className="bg-white p-5">
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
      <form className="py-24 px-48 lg:px-64 font-sans bg-white">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <InputField
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                label="First name"
              />
              <InputField
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                label="Last name"
              />
              <InputField
                id="National Card ID"
                name="National Card ID"
                type="text"
                autoComplete="id"
                label="National Card ID"
              />
            </div>
          </div>
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Hospital Date and Location
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <LocationDateReserve />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Book
          </button>
        </div>
      </form>
    </div>
  );
}
