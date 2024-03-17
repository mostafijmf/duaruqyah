import Link from "next/link";
import useDuaQuery from "@/hooks/useDuaQuery";
import { useSearchParams } from "next/navigation";

const SubCatItem = ({ item }) => {
    const [duas] = useDuaQuery();
    const subParam = useSearchParams().get('subcat_id');
    const duaParam = useSearchParams().get('dua');

    return (
        <li className="border-l-2 border-dotted border-primary">
            <Link
                href={`/dua?cat_id=${item.cat_id}&subcat_id=${item.subcat_id}`}
                className="inline-block pl-5 pb-5 relative"
            >
                <div className="absolute top-1.5 -left-[5px] w-2 h-2 bg-primary rounded-full"></div>
                <p className={subParam == item.id ? 'text-primary' : ''}>
                    {item.subcat_name_en}
                </p>
            </Link>

            {duas ?
                <ul className="ml-5 text-gray-500 text-[13px] font-normal">
                    {duas.map(dua => {
                        if (dua.subcat_id === item.id) {
                            return <li key={dua.id}>
                                <Link
                                    href={`/dua?cat_id=${item.cat_id}&subcat_id=${item.subcat_id}&dua=${dua.id}`}
                                    className="flex gap-x-2 items-center pb-5"
                                >
                                    <img src={'https://duaruqyah.com/assets/duaarrow.svg'} alt="arrow icon" />
                                    <p className={duaParam == dua.id ? 'text-primary' : ''}>
                                        {dua.dua_name_en}
                                    </p>
                                </Link>
                            </li>
                        }
                    })
                    }
                </ul>
                : null
            }
        </li>
    );
};

export default SubCatItem;