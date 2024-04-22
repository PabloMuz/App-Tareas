import CrossIcon from "./icons/components/CrossIcon";
import Moon from "./icons/components/MoonIcon";

const App = () => { 
  return (
    <div className="bg-no-repeat bg-contain min-h-screen bg-gray-300" style={{ backgroundImage: `url('src/assets/images/bg-mobile-light.jpg')` }}>
      <header className="container mx-auto px-4">
        <div className="flex justify-between">
          <h1 className="uppercase text-white pt-4 text-2xl font-bold tracking-widest">
            Tareas
          </h1>
          <button>
            <Moon className="fill-white" />
          </button>
        </div>
        <form action="" className="bg-white rounded-md overflow-hidden py-3 flex gap-3 items-center px-2 mt-6">
          <span className="inline-block border-2 rounded-full  h-5 w-5"></span>
          <input className="w-full text-gray-400 outline-none" type="text" placeholder="Crear Tarea" />
        </form>
      </header>
      <main className="container mx-auto px-4 mt-6 ">
        <div className=" bg-white rounded-md [&>article]:p-4 [&>article]:border-b-gray-400">
        <article className="flex gap-4  border-b">
          <button className="inline-block border-2 rounded-full  h-5 w-5 flex-none"></button>
          <p className="text-gray-600 grow">Completar curso</p>
          <button className="flex-none">
            <CrossIcon />
          </button>
        </article>
        <article className="flex gap-4  border-b">
          <button className="inline-block border-2 rounded-full  h-5 w-5 flex-none"></button>
          <p className="text-gray-600 grow">Completar curso</p>
          <button className="flex-none">
            <CrossIcon />
          </button>
        </article>
        <section className="flex justify-between text-gray-400 p-4 "> 
          <span>items</span>
          <button>Clear Completed</button>
        </section>
        </div>
        
        
      </main>

      <section className="container mx-auto px-4 mt-6">
        <div className="flex justify-center gap-5 rounded-md bg-white p-4">
        <button className="text-blue-500">all</button>
        <button className="hover:text-blue-500">Active</button>
        <button className="hover:text-blue-500">Complete</button>
        </div>

      </section>
      <p className="text-center">Drag and Drop</p>
    </div>
  );
};

export default App;
