import Image from "next/image";
import { CustomerFilter, Hero, SearchBar } from "@/components";
export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl">Car Catalogue </h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomerFilter title="fuel" />
            <CustomerFilter title="year" />
          </div>
        </div>
      </div>
    </main>
  );
}
