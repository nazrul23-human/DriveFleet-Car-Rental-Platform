const MyBookings = () => {
  const bookings = [
    {
      id: 1,
      carName: "Toyota Corolla",
      price: 240,
      date: "2026-06-15"
    },
    {
      id: 2,
      carName: "BMW X5",
      price: 450,
      date: "2026-06-20"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-[#08152f] via-[#0d1f45] to-[#0f4c63] min-h-screen py-16">

      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-white text-center mb-10">
          My Bookings
        </h1>

        <div className="overflow-x-auto">

          <table className="table">

            <thead>
              <tr className="text-cyan-400">
                <th>Car Name</th>
                <th>Total Price</th>
                <th>Booking Date</th>
              </tr>
            </thead>

            <tbody>

              {bookings.map((booking) => (
                <tr key={booking.id} className="text-white">

                  <td>{booking.carName}</td>

                  <td>${booking.price}</td>

                  <td>{booking.date}</td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default MyBookings;