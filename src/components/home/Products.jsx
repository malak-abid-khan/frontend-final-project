import { products } from "@/assets/assets";
import { AlignLeft, Heart, ShoppingCart } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const Products = () => {
  return (
    <section className="mt-24">
      <div className="container mx-5 md:mx-auto">
        <div className="flex items-center justify-between border-b pb-3 mb-5">
          <h1 className="text-3xl font-bold">Our Products</h1>
          <button className="flex items-center gap-2 font-medium">
            Filters <AlignLeft />
          </button>
        </div>

        {/* products */}

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {products.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden cursor-pointer border border-foreground hover:-translate-y-4 transition-all duration-200"
            >
              <div className="relative">
                <span className="absolute right-3 bg-white top-3 p-2 rounded-full">
                  <Heart className="w-4 h-4 text-red-600" />
                </span>
                <img src={item.image} alt="pImage" className="" />

                <button className="absolute -bottom-4 right-2 bg-primary text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <span>
                    <ShoppingCart className="w-3 h-3" />
                  </span>
                  Add
                </button>
              </div>

              <div className="p-4">
                <p className="font-bold text-2xl">${item.price}</p>
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>

                {/* rating system */}
                <div className="flex items-center gap-1 mt-2">
                  {Array.from({ length: 5 }).map((_, i) => {
                    const full = Math.floor(item.rating);
                    const half = item.rating - full >= 0.5;
                    if (i < full) {
                      return (
                        <span key={i} className="text-yellow-400">
                          &#9733;
                        </span>
                      ); // filled star
                    } else if (i === full && half) {
                      return (
                        <span key={i} className="text-yellow-400">
                          &#189;
                        </span>
                      ); // half star (can use a custom icon or leave as is)
                    } else {
                      return (
                        <span key={i} className="text-gray-300">
                          &#9733;
                        </span>
                      ); // empty star
                    }
                  })}
                  <span className="ml-2 text-sm text-gray-600">
                    {item.rating.toFixed(1)} ({item.reviews})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
