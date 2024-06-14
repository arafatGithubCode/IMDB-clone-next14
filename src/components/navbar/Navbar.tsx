import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className="flex dark:bg-gray-500 bg-amber-100 p-4 justify-center gap-6 lg:text-lg">
      <NavbarItem title="Trending" param="fetchingTrending" />
      <NavbarItem title="Top Rated" param="fetchingTopRated" />
    </div>
  );
};

export default Navbar;
