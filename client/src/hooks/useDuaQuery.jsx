import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const useDuaQuery = () => {
    const [duaQuery, setDuaQuery] = useState(null);
    const catParam = useSearchParams().get('cat_id') || 1;
    const subCatParam = useSearchParams().get('subcat_id') || 1;

    useEffect(() => {
        if (subCatParam) {
            axios.get(`${process.env.NEXT_PUBLIC_API_URL}/dua?cat_id=${catParam}&subcat_id=${subCatParam}`)
                .then(res => setDuaQuery(res.data))
                .catch(err => console.log(err))
        }
    }, [subCatParam]);

    return [duaQuery];
};

export default useDuaQuery;