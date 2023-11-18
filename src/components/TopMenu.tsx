import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import Link from "next/link";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function TopMenu() {

  const session = await getServerSession(authOptions)

  return (
    <div className='h-13 bg-white fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-4'>
      {/* Left-aligned items */}
      <div className='flex items-center'>
        {session ? (
          <>
            <Link href='/api/auth/signout' className='px-2 text-cyan-600'>
              Sign-Out
            </Link>
            <TopMenuItem title='My booking' pageRef='/mybooking' />
          </>
        ) : (
          <>
            <Link href='/api/auth/signin' className='px-2 text-cyan-600'>
             Sign-In
            </Link>
          </>
        )}
      </div>

      {/* Right-aligned items */}
      <div className='flex items-center'>
        <TopMenuItem title='Booking' pageRef='/booking' />
        <Link href='/' className='ml-4'>
          <Image src={'/img/logo.png'} alt='logo' width={50} height={50} />
        </Link>
      </div>
    </div>
  );
}
