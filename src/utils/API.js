// This code is meant to serve as a mock fetch from an API.
export const getDeveloper = new Promise(function(resolve) {
  setTimeout(() => {
    resolve(
      [
      {
      id: 0,
      title: "Engineer",
      firstName: "Chris",
      lastName: "Gomez",
    },
    {
      id: 1,
      title: "Customer Service Agent",
      firstName: "Eric",
      lastName: "Smith",
    },
    {
      id: 2,
      title: "Engineer ",
      firstName: "Christina",
      lastName: "Gerry",
    },
    {
      id: 3,
      title: "Intern",
      firstName: "Bob",
      lastName: "Scott",
    },
    {
      id: 4 ,
      title: "Engineer",
      firstName: "Adam",
      lastName: "Jones",
    },
    {
      id: 5 ,
      title: "Manager",
      firstName: "Tomas",
      lastName: "Anderson",
    },
    {
      id: 6 ,
      title: "Engineer",
      firstName: "Andy",
      lastName: "Nguyen",
    }
      ]
    );
  }, 1000);
});
