import React from "react";

function Productform() {
  const [formdata, setFormData] = React.useState({
    title: "",
    description: "",
    price: null,
    negotiable: false,
    location: "",
  });
  const handleformsubmit = () => {
    console.log("form submitted");
    fetch("http://localhost:3001/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    });
  };
  return (
    <>
      <form className="productform" onSubmit={handleformsubmit}>
        <label>
          Title:
          <input
            type="text"
            name="name"
            value={formdata.title}
            onChange={(e) => {
              setFormData({ ...formdata, title: e.target.value });
            }}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={formdata.description}
            onChange={(e) =>
              setFormData({ ...formdata, description: e.target.value })
            }
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={formdata.price}
            onChange={(e) =>
              setFormData({ ...formdata, price: e.target.value })
            }
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formdata.location}
            onChange={(e) =>
              setFormData({ ...formdata, location: e.target.value })
            }
          />
        </label>
        <label>
          Negotiable:
          <input
            type="checkbox"
            name="negotiable"
            value={formdata.negotiable}
            onChange={(e) =>
              setFormData({ ...formdata, negotiable: e.target.checked })
            }
          ></input>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default Productform;
