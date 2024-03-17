'use client';
import { useSearchParams } from "next/navigation";
import useSubCategories from "@/hooks/useSubCategories";
import DuaItem from "./DuaItem";
import { useEffect, useRef } from "react";

const CategorySection = () => {
    const subcatRef = useRef({});
    const subcatParam = useSearchParams().get('subcat_id');
    const [subCategories] = useSubCategories();

    useEffect(() => {
        if (subcatParam) {
            subcatRef.current[`subcat_${subcatParam}`]?.scrollIntoView({
                behavior: 'smooth',
                block: "nearest",
                inline: "start"
            });
        }
    }, [subcatParam]);

    return (
        <section className="w-full h-[calc(100vh-16vh)] overflow-y-auto scrollBar">
            {subCategories?.map(subCat =>
                <div key={subCat.id} className="">
                    <div
                        ref={(ref) => subcatRef.current[`subcat_${subCat.id}`] = ref}
                        className="p-4 bg-white rounded-xl mb-5"
                    >
                        <h3 className="text-base font-medium">
                            <span className="text-primary">Section:</span>&nbsp;
                            {subCat?.subcat_name_en}
                        </h3>
                    </div>

                    <DuaItem subCat={subCat} />
                </div>
            )}
        </section>
    );
};

export default CategorySection;