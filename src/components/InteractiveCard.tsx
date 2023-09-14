'use client';
import React from "react";

export default function InteractiveCard({children, contentName}:{children:React.ReactNode, contentName:string}) {
    function onSelect(){
        alert("Card is "+contentName)
    }

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
        <div className="w-1/5 h-[300px] rounded-lg shadow-lg" 
        onClick={()=>onSelect()} 
        onMouseOver={(e)=>onCardMouseAction(e)}
        onMouseOut ={(e)=>onCardMouseAction(e)}>
            {children}
        </div>
    );
}