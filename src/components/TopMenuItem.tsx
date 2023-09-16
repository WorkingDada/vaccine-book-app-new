import Link from "next/link";

export default function TopMenuItem({title,pageRef}: {title:string,pageRef:string}) {
    return (
        <Link href={pageRef} className='w-32 text-center mt-auto mb-auto text-slate-600 text-xs'>
            {title}
        </Link>
    );
}