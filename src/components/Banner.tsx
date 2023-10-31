'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './banner.module.css'
import Image from 'next/image';
import TopMenu from './TopMenu';
import { useSession } from 'next-auth/react';

export default function Banner(){
    const router = useRouter()
    const coverImgSrc = ['/img/cover.jpg','/img/cover2.jpg','/img/cover3.jpg','/img/cover4.jpg']
    const [coverImgIdx, setCoverImgIdx] = useState(0);
    const {data : session} = useSession() 
    const onBannerClick = () => {
        setCoverImgIdx((coverImgIdx+1)%coverImgSrc.length)
    };

    return (
        <div className={styles.banner} onClick={()=>onBannerClick()}>
            <div>
                <div className={styles.bannerText}>
                    <h1 className='text-5xl font-medium'>Finding a place for Vaccine?</h1>
                    <h2 className='text-1xl font-sans'>Contact us for more info</h2>
                </div>
                <Image src={coverImgSrc[coverImgIdx]}
                alt='cover'
                fill={true}
                priority
                objectFit='cover'/>
            </div>
            {
                session? <div className='z-30 absolute top-5 right-10 font-semibold text-white text-xl'>{session.user?.name}</div> : null
            }
            <button className='bg-white text-cyan-600 border border-cyan-600
            font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0
            hover:bg-cyan-600 hover:text-white hover:border-transparent' onClick={(e)=> {e.stopPropagation(); router.push('/hospital')}}>
                Select Your Hospital Now
            </button>
        </div>
    );
}