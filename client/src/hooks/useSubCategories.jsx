import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const useSubCategories = () => {
    const [subCategories, setSubCategories] = useState(null);
    const catParam = useSearchParams().get('cat_id') || 1;

    useEffect(() => {
        if (catParam) {
            axios.get(`${process.env.NEXT_PUBLIC_API_URL}/sub_category?cat_id=${catParam}`)
                .then(res => setSubCategories(res.data))
                .catch(err => console.log(err))
        }
    }, [catParam]);

    return [subCategories];
};

export default useSubCategories;