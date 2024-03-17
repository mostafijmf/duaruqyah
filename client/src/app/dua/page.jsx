import MenuItems from "./MenuItems";
import Navbar from "@/Components/Navbar";
import Categories from "@/Components/Categories/Categories";
import CategorySection from "@/Components/Categories/CategorySection";

export default function Home() {
  return (
    <main className="w-screen max-w-full h-screen max-h-full overflow-hidden px-6 pt-6 flex justify-between">
      <MenuItems />
      <div className="w-full ml-7">
        <Navbar />
        <div className="w-full h-full mt-5 flex items-start justify-between gap-x-7">
          <Categories />
          <CategorySection />
        </div>
      </div>
    </main>
  );
}
