const users = [
  {
    fullName: "Shourav",
    age: 200,
    contact: [{ phoneNo: "0184" }, { contactno: "212344" }],
  },
  {
    fullName: "Takshit",
    age: 20,
    contact: [{ phoneNo: "018466" }, { contactno: "2123" }],
  },
];

const Example = () => {
  return (
    <div>
      <h1>Nested List</h1>
      {users.map((user, index) => {
        return (
          <div key={index}>
            <h2>{user.fullName}</h2>
            <h2>{user.age}</h2>
            {user.contact.map((phone, index) => {
              return (
                <div key={index}>
                  <h2>Nested shit</h2>
                  <p>{phone.phoneNo}</p>
                  <p>{phone.contactno}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Example;
