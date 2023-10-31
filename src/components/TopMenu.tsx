import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import Link from "next/link";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function TopMenu() {

  const session = await getServerSession(authOptions)

  return (
    <div className='h-13 bg-white fixed top-0 left-0 right-0 z-30 flex flex-row-reverse items-center'>
      <Image src={'/img/logo.png'} alt='logo' width={50} height={100} sizes='100vh'/>
      <TopMenuItem title='Booking' pageRef='/booking'/>
      {
        session?
        <Link className='flex items-center absolute left-4 h-full px-2 text-cyan-600' href='/api/auth/signout'>Sign-Out of {session.user?.name}</Link>
        :
        <Link className='flex items-center absolute left-4 h-full px-2 text-cyan-600' href='/api/auth/signin'>Sign-In</Link>
      }
    </div>
  );
}
