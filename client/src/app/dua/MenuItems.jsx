import Icons from "@/lib/Icons";
import Image from "next/image";
import Link from "next/link";

const MenuItems = () => {
    return (
        <aside className="w-max h-[calc(100vh-7%)] p-5 rounded-3xl bg-white overflow-y-auto scrollBar">
            <ul className="flex flex-col items-center gap-6">
                <li>
                    <Link href={'/'} className="block mb-10 hover:drop-shadow-[0_0px_10px_rgb(0,0,0,0.2)] duration-200">
                        <Image src={'https://duaruqyah.com/assets/dua-logo.svg'} alt="Dua logo" width={55} height={55}></Image>
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className="p-3 block bg-gray-100 hover:bg-gray-200 duration-200 rounded-full">
                        <Image src={'https://duaruqyah.com/assets/nav/home.svg'} alt="Home icon" width={20} height={20}></Image>
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className="p-3 block bg-gray-100 hover:bg-gray-200 duration-200 rounded-full">
                        <Image src={'https://duaruqyah.com/assets/nav/alldua.svg'} alt="Home icon" width={20} height={20}></Image>
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className="p-3 block bg-gray-100 hover:bg-gray-200 duration-200 rounded-full">
                        <Image src={'https://duaruqyah.com/assets/nav/memorize.svg'} alt="Home icon" width={20} height={20}></Image>
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className="p-3 block bg-gray-100 hover:bg-gray-200 duration-200 rounded-full">
                        <Image src={'https://duaruqyah.com/assets/nav/bookmark.svg'} alt="Home icon" width={20} height={20}></Image>
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className="p-3 block bg-gray-100 hover:bg-gray-200 duration-200 rounded-full">
                        <Image src={'https://duaruqyah.com/assets/nav/ruqyah.svg'} alt="Home icon" width={20} height={20}></Image>
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className="p-3 block bg-gray-100 hover:bg-gray-200 duration-200 rounded-full">
                        <Image src={'https://duaruqyah.com/assets/nav/dua-info.svg'} alt="Home icon" width={20} height={20}></Image>
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className="p-3 block bg-gray-100 hover:bg-gray-200 duration-200 rounded-full">
                        <Image src={'https://duaruqyah.com/assets/nav/books.svg'} alt="Home icon" width={20} height={20}></Image>
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className="p-3 my-10 block bg-primary text-white hover:drop-shadow-[0_0px_10px_rgb(0,0,0,0.2)] duration-200 rounded-lg">
                        <Icons icon='donate' className='w-6 h-6'/>
                    </Link>
                </li>
            </ul>
        </aside>
    );
};

export default MenuItems;