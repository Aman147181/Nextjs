
import { User } from "@nextui-org/react";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
const Header = () => {
  const loggeduser = null;
  return (
    <div className="fixed top-0 h-[72px] bg-white z-50 w-full px-5 sm:px-12 md:px-16 lg:px-20 flex items-center justify-between text-base">
      <Link href="/">
        {" "}
        <div className="flex justify-start space-x-2 items-center">
          <img src="/logo.png" className="h-8 rounded-full" />
          <h1 className="font-volkhov whitespace-nowrap text-xl font-bold text-[#254D4D]">
            Urban Dwellings
          </h1>
        </div>
      </Link>
      {console.log(process.env.PORT)}

      <div className="md:flex items-center justify-center hidden xl:space-x-12 lg:space-x-8 md:space-x-5 ml-2 font-roboto uppercase text-base text-[#254D4D]">
        <Link href="/">
          <h1 className="hover:text-[#C14E07]">home</h1>
        </Link>
        <Link href="/shop">
          {" "}
          <h1 className="hover:text-[#C14E07]">shop</h1>
        </Link>
        <Link href="/contact">
          <h1 className="hover:text-[#C14E07]">contact</h1>
        </Link>
      </div>
      <div className=" sm:flex items-center space-x-2 hidden  sm:space-x-3 justify-center text-[#254D4D]">
        {loggeduser ? (
          <User
            name={loggeduser.username}
            description={loggeduser.email}
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
          />
        ) : (
          <button className="rounded-full   flex items-center space-x-1  ">
            <h1 className=" pr-1">
              <FaUser />
            </h1>{" "}
            <h1 className="md:hover:text-[#254D4D]  hover:font-medium">
              Login
            </h1>{" "}
            <h1 className="sm:block hidden">/</h1>
            <h1 className="md:hover:text-[#254D4D] hover:font-medium ">
              Sign up
            </h1>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
