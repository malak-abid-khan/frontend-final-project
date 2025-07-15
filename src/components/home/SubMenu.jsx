import React from "react";
import { Link } from "react-router-dom";

const subMenu = [
  { name: "New Arrivals", link: "/" },
  { name: "Trending", link: "/" },
  { name: "Dinner Sets", link: "/dinner-sets" },
  { name: "Tea Sets", link: "/tea-sets" },
  { name: "Serving Bowls", link: "/serving-bowls" },
  { name: "Plates & Dishes", link: "/plates-dishes" },
  { name: "Glassware", link: "/glassware" },
  { name: "Kitchen Accessories", link: "/kitchen-accessories" },
  { name: "Cutlery", link: "/cutlery" },
  { name: "Bakeware", link: "/bakeware" },
  { name: "Storage Containers", link: "/storage-containers" },
  { name: "Mugs & Cups", link: "/mugs-cups" },
  { name: "Serving Trays", link: "/serving-trays" },
];

const SubMenu = () => {
  return (
    <div className="bg-primary/5 hidden md:block py-2 border-b border-foreground">
      <nav className="container mx-auto">
        <ul className="flex gap-3 items-center">
          {subMenu.map((item, index) => (
            <li key={index}>
              <Link className="text-sm hover:underline" to={item.link}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SubMenu;
