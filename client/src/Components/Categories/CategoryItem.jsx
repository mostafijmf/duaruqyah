'use client';
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import SubCatItem from "./SubCatItem";
import useSubCategories from "@/hooks/useSubCategories";

const CategoryItem = ({ category }) => {
    const [subCategories] = useSubCategories();
    const catParam = useSearchParams().get('cat_id');

    return (
        <li>
            <Link
                href={`/dua?cat_id=${category.id}`}
                className={`w-full flex items-center justify-between gap-x-3 p-3 hover:bg-gray-100 duration-200 rounded-xl ${catParam == category.id && 'bg-gray-100'}`}
            >
                <div className="bg-gray-50 rounded-md p-3">
                    <Image
                        className=""
                        src={`https://duaruqyah.com/assets/icon/${category.cat_icon}.svg`}
                        alt="Dua" width={34} height={34}
                    />
                </div>
                <div className="w-full">
                    <h3 className="font-medium">{category.cat_name_en}</h3>
                    <p className="mt-1 text-xs text-gray-400">Subcategory: {category.no_of_subcat}</p>
                </div>
            </Link>
            {
                subCategories ?
                    <ul className="ml-8 text-sm font-medium">
                        {
                            subCategories.map(item => {
                                if (item.cat_id === category.id) {
                                    return <SubCatItem key={item.id} item={item} />
                                }
                            })
                        }
                    </ul>
                    : null
            }
        </li>
    );
};

export default CategoryItem;