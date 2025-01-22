import HeroCarousel from "@/components/HeroCarousel"
import Searchbar from "@/components/Searchbar"
import Image from "next/image"
import { getAllProducts } from "@/lib/actions"
import ProductCard from "@/components/ProductCard"

const Home = async () => {
  const allProducts = await getAllProducts();

  return (
    <>
      <section className="px-6 md:px-20 py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center"> 
            <p className="small-text">
              <span className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                Smart Shopping Starts Here
                <Image 
                  src="/assets/icons/arrow-right.svg"
                  alt="arrow-right"
                  width={16}
                  height={16}
                  className="inline-block ml-2"
                />
              </span>
            </p>

            <h1 className="head-text">
              Unleash the Power of
              <span className="text-primary relative">
                PricePulse
                <span className="absolute bottom-0 left-0 w-full h-2 bg-primary/20 -z-10"></span>
              </span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg max-w-lg">
              Track prices, get alerts, and never miss a deal. Your smart shopping companion for the best online deals.
            </p>

            <Searchbar />
          </div>

          <HeroCarousel />
        </div>
      </section>

      <section className="trending-section">
        <div className="flex items-center justify-between mb-8">
          <h2 className="section-text">
            Trending Products
            <span className="ml-2 px-4 py-1 text-sm bg-primary/10 text-primary rounded-full">
              {allProducts?.length || 0} items
            </span>
          </h2>
          
          <div className="flex gap-3">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Latest
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Popular
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {allProducts?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Home