export default function () {

  this.namespace = '/api';

  let rentals = [
    {
      type: 'rentals',
      id: 'ideapad-310',
      attributes: {
        price: 10000,
        name: "Ideapad 310",
        brand: "Lenovo",
        photo: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
      }
    },
    {
      type: 'rentals',
      id: 'ideapad-320',
      attributes: {
        price: 10000,
        name: "Ideapad-320",
        brand: "HP",
        photo: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
      }
    }
  ];

  this.get('/rentals', function (db, request) {
    if (request.queryParams.city !== undefined) {
      let filteredRentals = rentals.filter(function (i) {
        return i.attributes.brand.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
      });
      return { data: filteredRentals };
    } else {
      return { data: rentals };
    }
  });

  // Find and return the provided rental from our rental list above
  this.get('/rentals/:id', function (db, request) {
    return { data: rentals.find((rental) => request.params.id === rental.id) };
  });

}
