export function Navbar() {
  return (
    <div className="container mx-auto items-center">
      <div className="items-center justify-between w-full px-5 overflow-y-auto tflex whitespace-nowrap scroll-hidden ">
        <div className="flex flex-col flex-wrap mx-auto md:items-center md:flex-row">
          <a href="/" className="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
            <div className="inline-flex items-center">
              <div className="w-4 h-4 p-4 mr-2 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600"></div>
              <h2 className="block p-2 text-xl font-medium tracking-tighter text-black transition duration-500 ease-in-out transform cursor-pointer hover:text-gray-500 lg:text-x lg:mr-8">
                Courses
              </h2>
            </div>
          </a>
          <nav className="flex flex-wrap items-center justify-start text-base ">
            <NavItem name="Courses" />
            <NavItem name="About" />
            <NavItem name="Blog" />
          </nav>
          <button className="w-auto px-8 py-2 my-2 ml-auto text-base font-medium text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:b-gblue-700">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
}

interface NavItemProps {
  name: string;
}

function NavItem(props: NavItemProps) {
  return (
    <a
      href="#"
      className="px-2 py-4 text-base text-gray-500 transition duration-1000 ease-in-out transform border-b-2 border-transparent hover:text-blue-600 focus:outline-none focus:shadow-none focus:text-blue-400 md:my-0 hover:border-blue-600 "
    >
      {props.name}
    </a>
  );
}
