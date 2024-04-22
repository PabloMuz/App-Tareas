import Moon from "./icons/MoonIcon";

const Header = () => {
  return(
    <header className="container mx-auto px-4">
        <div className="flex justify-between">
          <h1 className="uppercase text-white pt-4 text-2xl font-bold tracking-widest">
            Tareas
          </h1>
          <button>
            <Moon className="fill-white" />
          </button>
        </div>
      </header>
  )
}

export default Header;