import Link from "next/link";

export default function TopMenuItem({title,pageRef}: {title:string,pageRef:string}) {
    return (
        <Link href={pageRef} className='px-4 py-2 text-gray-600'>
            {title}
        </Link>
    );
}