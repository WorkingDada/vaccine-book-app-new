import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
 
export default function ProductCard({name,src}:{name:string,src:string}) {
    return (
        <InteractiveCard contentName={name}>
            <div className="w-full h-[70%] relative rounded-t-lg">
            <Image src={src}
            alt='Product Picture'
            fill={true}
            className='object-cover rounded-t-lg'/>
            </div>
            <div className="w-full h-[30%] p-[10px]">{name}</div>
        </InteractiveCard>
    );
}