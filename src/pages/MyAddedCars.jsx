const MyAddedCars = () => {
  const cars = [
    {
      id: 1,
      name: "Toyota Corolla",
      type: "Sedan",
      price: 80,
      image: "https://i.ibb.co.com/Ld0j3Qnx/1-images.jpg"
    },
    {
      id: 2,
      name: "BMW X5",
      type: "SUV",
      price: 150,
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800"
    },
    {
    id: 3,
    name: "Mercedes C-Class",
    type: "Luxury",
    price: 180,
    image: "https://i.ibb.co.com/j99H2Rkd/3-images.jpg"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-[#08152f] via-[#0d1f45] to-[#0f4c63] min-h-screen py-16">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-white text-center mb-10">
          My Added Cars
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-[#16233b] rounded-xl p-4 shadow-lg"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-52 object-cover rounded-lg"
              />

              <h2 className="text-white text-xl font-bold mt-4">
                {car.name}
              </h2>

              <p className="text-gray-300">
                {car.type}
              </p>

              <p className="text-cyan-400 font-bold mt-2">
                ${car.price}/Day
              </p>

              <div className="flex gap-3 mt-5">

                <button className="btn btn-sm bg-cyan-500 border-none text-white flex-1">
                  Update
                </button>

                <button className="btn btn-sm btn-error flex-1">
                  Delete
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default MyAddedCars;