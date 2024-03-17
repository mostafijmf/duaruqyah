import Icons from "@/lib/Icons";
import CategoryItem from "./CategoryItem";
import { getCategories } from "@/lib/apiServices";


const Categories = async () => {
    const categories = await getCategories();
    

    return (
        <aside className="block bg-white w-full max-w-xs h-max pb-5 rounded-xl">
            <div className="w-full h-max py-4 rounded-t-xl text-center text-base text-white bg-primary">
                <h2>Categories</h2>
            </div>
            <div className="px-2 py-3">
                <label htmlFor="categories" className="inline-block w-full h-max flex justify-between p-1 rounded-md bg-white cursor-text border">
                    <div className="bg-transparent text-gray-500 px-2 py-1 rounded-md">
                        <Icons icon={'searchIcon'} className={'w-8 h-8 '} />
                    </div>
                    <input
                        type="text"
                        id="categories"
                        placeholder="Search Categories"
                        className="outline-none bg-transparent text-sm w-full"
                    />
                </label>
            </div>
            <ul className="px-3 pt-2 pb-5 w-full h-[calc(100vh-40vh)] overflow-y-auto scrollBar">
                {
                    categories.map(category =>
                        <CategoryItem key={category.id} category={category} />
                    )
                }
            </ul>
        </aside>
    );
};

export default Categories;