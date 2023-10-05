'use client';
import React from "react";

interface Props {
    children: React.ReactNode;
    handleCardClick: Function;
}

export default function InteractiveCard({children, handleCardClick}: Props) {
    function onCardMouseAction(event: React.SyntheticEvent){
        if (event.type=='mouseover'){
            event.currentTarget.classList.remove('shadow-lg')
            event.currentTarget.classList.add('shadow-2xl')
            event.currentTarget.classList.add('bg-neutral-200')
        } else {
            event.currentTarget.classList.remove('shadow-2xl')
            event.currentTarget.classList.add('shadow-lg')
            event.currentTarget.classList.remove('bg-neutral-200')
        }
    }
    return (
        <div className="w-full h-[300px] rounded-lg shadow-lg" 
        onMouseOver={(e)=>onCardMouseAction(e)}
        onMouseOut ={(e)=>onCardMouseAction(e)}>
            {children}
        </div>
    );
}