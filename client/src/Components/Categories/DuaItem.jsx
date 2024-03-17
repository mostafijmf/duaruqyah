import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const DuaItem = ({ subCat }) => {
    const [duas, setDuas] = useState(null);
    const duaParam = useSearchParams().get('dua');
    const duaRef = useRef({});

    useEffect(() => {
        if (subCat) {
            axios.get(`${process.env.NEXT_PUBLIC_API_URL}/dua?subcat_id=${subCat.id}`)
                .then(res => setDuas(res.data))
                .catch(err => console.log(err))
        }

        if (duaParam) {
            duaRef.current[`dua_${duaParam}`]?.scrollIntoView({
                behavior: 'smooth',
                block: "nearest",
                inline: "start"
            });
        }
    }, [duaParam, subCat]);

    return (
        <div>
            {duas?.map(dua =>
                <div
                    key={dua.id}
                    ref={(ref) => duaRef.current[`dua_${dua.id}`] = ref}
                    className="p-5 bg-white rounded-xl mb-5"
                >
                    <div className="text-base font-medium text-primary flex items-center gap-x-2">
                        <img src="https://duaruqyah.com/assets/duacard.svg" alt="" />
                        <h4>
                            {dua.id}.&nbsp;{dua.dua_name_en}
                        </h4>
                    </div>
                    <p className="text-lg leading-8 font-medium my-5">
                        {dua.top_en}
                    </p>
                    <p className="w-full text-2xl text-end leading-8 font-medium my-8">
                        {dua.dua_arabic}
                    </p>
                    <p className="text-lg leading-8 font-medium my-5 italic">
                        <span className="font-bold">Transliteration: </span>
                        {dua.transliteration_en}
                    </p>
                    <p className="text-lg leading-8 font-medium my-5">
                        <span className="font-bold">Translation: </span>
                        {dua.translation_en}
                    </p>
                    <p className="text-lg font-medium">
                        <span className="text-primary">Reference:</span><br />
                        <span>{dua.refference_en}</span>
                    </p>
                    <div className="flex items-center justify-end gap-x-8 mt-10">
                        <div className="w-6 h-auto cursor-pointer">
                            <img src="https://duaruqyah.com/assets/others/copy.svg" alt="" />
                        </div>
                        <div className="w-6 h-auto cursor-pointer">
                            <img src="https://duaruqyah.com/assets/others/bookmark.svg" alt="" />
                        </div>
                        <div className="w-6 h-auto cursor-pointer">
                            <img src="https://duaruqyah.com/assets/others/plan.svg" alt="" />
                        </div>
                        <div className="w-6 h-auto cursor-pointer">
                            <img src="https://duaruqyah.com/assets/others/share.svg" alt="" />
                        </div>
                        <div className="w-6 h-auto cursor-pointer">
                            <img src="https://duaruqyah.com/assets/others/report.svg" alt="" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DuaItem;