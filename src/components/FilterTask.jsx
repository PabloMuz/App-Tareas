const FilterTask = () => {
  return(
    <section className="container mx-auto px-4 mt-6">
          <div className="flex justify-center gap-5 rounded-md bg-white p-4">
            <button className="text-blue-500">All</button>
            <button className="hover:text-blue-500">Active</button>
            <button className="hover:text-blue-500">Complete</button>
          </div>
        </section>
  )
};
export default FilterTask;