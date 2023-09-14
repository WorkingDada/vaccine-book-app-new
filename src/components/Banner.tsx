import styles from './banner.module.css'
import Image from 'next/image';
import TopMenu from './TopMenu';

export default function Banner(){
    return (
        <div className={styles.banner}>
            <Image src={'/img/cover.jpg'}
            alt='cover'
            fill={true}
            priority
            objectFit='cover'/>
            <div className={styles.bannerText}>
                <h1 className='text-5xl font-medium'>Finding a place for Vaccine?</h1>
                <h2 className='text-1xl font-sans'>Contact us for more info</h2>
            </div>
        </div>
    );
}