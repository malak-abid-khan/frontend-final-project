import React from "react";
import { Home, Users, LineChart, Star, Settings } from "lucide-react";
import avatar from "../assets/loginImage.jpg";
import { Link, NavLink, Outlet } from "react-router-dom";

const homeLink = [
  {
    name: "Home",
    link: "/dashboard",
    icon: <Home />,
  },
  {
    name: "Customers",
    link: "/customers",
    icon: <Users />,
  },
  {
    name: "Reports",
    link: "/report",
    icon: <LineChart />,
  },
  {
    name: "Settings",
    link: "/settings",
    icon: <Settings />,
  },
];

const Dashboard = () => {
  return (
    <div className="flex min-h-screen w-full">
      <aside className="w-[300px] border-r p-5">
        <div>
          <div className="flex items-center gap-4 bg-foreground/5 p-3 rounded-lg">
            <span className="bg-foreground p-2 rounded text-background">
              <Star />
            </span>
            <div>
              <p className="text-lg font-bold mb-0">Crockery Store</p>
              <p className="text-muted-foreground text-xs">admin@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <ul className="flex flex-col gap-2">
            {homeLink.map((item, index) => (
              <li key={index} className="navLinks">
                <NavLink
                  to={item.link}
                  className="w-full flex gap-3 items-center px-4 py-2 rounded hover:bg-foreground/5 text-muted-foreground hover:text-foreground transition-all"
                >
                  <span>{item.icon}</span> {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <main className="w-full p-5">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
