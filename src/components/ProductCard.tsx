import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import { useState } from 'react';
import RatingStar from './RatingStar';

interface Props {
    imgSrc: string;
    txt: string;
    ratings: Map<string,number>;
    handleRatingChange: Function;
    handleCardClick: Function;
}

export default function ProductCard({imgSrc,txt,ratings,handleRatingChange,handleCardClick}: Props){            
    const [value, setValue] = useState<number|null>(2);

    return (
        <InteractiveCard handleCardClick={()=>handleCardClick(txt)}>
            <div className="w-full h-[70%] relative rounded-t-lg">
                <Image src={imgSrc}
                alt='Product Picture'
                fill={true}
                className='object-cover rounded-t-lg'/>
            </div>
            <div className="w-full h-[15%] p-[10px]">{txt}</div>
            <div className='px-2' onClick={(e)=>{e.stopPropagation()}}>
                <RatingStar txt={txt} ratings={ratings} handleRatingChange={handleRatingChange}/>
            </div>
        </InteractiveCard>
    );
}