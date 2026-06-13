
const AddCar = () => {
  return (
    <div className="bg-gradient-to-r from-[#08152f] via-[#0d1f45] to-[#0f4c63] min-h-screen py-16">

      <div className="max-w-3xl mx-auto px-6">

        <div className="bg-[#16233b] p-8 rounded-2xl shadow-lg">

          <h1 className="text-4xl font-bold text-white text-center mb-8">
            Add New Car
          </h1>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Car Name"
              className="input input-bordered w-full"
            />

            <input
              type="number"
              placeholder="Daily Rent Price"
              className="input input-bordered w-full"
            />

            <select className="select select-bordered w-full">
              <option>SUV</option>
              <option>Sedan</option>
              <option>Hatchback</option>
              <option>Luxury</option>
            </select>

            <input
              type="text"
              placeholder="Image URL"
              className="input input-bordered w-full"
            />

            <input
              type="number"
              placeholder="Seat Capacity"
              className="input input-bordered w-full"
            />

            <input
              type="text"
              placeholder="Pickup Location"
              className="input input-bordered w-full"
            />

            <textarea
              placeholder="Description"
              className="textarea textarea-bordered w-full h-32"
            ></textarea>

            <select className="select select-bordered w-full">
              <option>Available</option>
              <option>Unavailable</option>
            </select>

            <button
              type="submit"
              className="btn bg-cyan-500 hover:bg-cyan-600 border-none text-white w-full"
            >
              Add Car
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default AddCar;