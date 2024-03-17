import Icons from "@/lib/Icons";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="w-full h-max flex items-center justify-between">
            <div className="w-full">
                <h1 className="text-2xl">
                    Duas Page
                </h1>
            </div>
            <div className="w-full flex justify-between items-center">
                <form>
                    <label htmlFor="dua" className="inline-block w-96 h-max flex justify-between p-1 rounded-md bg-white cursor-text shadow">
                        <input
                            type="text"
                            id="dua"
                            placeholder="Search by Dua Name"
                            className="outline-none bg-transparent text-sm ml-3 w-full"
                        />
                        <div className="bg-slate-100 text-gray-500 px-3 py-1 rounded-md cursor-pointer">
                            <Icons icon={'searchIcon'} className={'w-8 h-8 '} />
                        </div>
                    </label>
                </form>
                <div className="flex items-center gap-x-5">
                    <button className="flex items-center gap-x-2">
                        <Image src={'https://duaruqyah.com/assets/settings/profile.svg'} alt="profile icon" width={45} height={45} />
                        <Icons icon={'downArrow'} className={'w-3 h-3'} />
                    </button>
                    <div className="">
                        <Icons icon={'setting'} className={'w-6 h-6 text-primary'} />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;