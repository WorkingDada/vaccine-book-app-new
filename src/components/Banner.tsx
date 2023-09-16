'use client'
import { useState } from 'react';
import styles from './banner.module.css'
import Image from 'next/image';
import TopMenu from './TopMenu';

export default function Banner(){
    const coverImgSrc = [
    '/img/cover.jpg',
    '/img/cover2.jpg',
    '/img/cover3.jpg',
    '/img/cover4.jpg']
    
    const [coverImgIdx, setCoverImgIdx] = useState(0);
    
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
        </div>
    );
}