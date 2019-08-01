import React, { useState, useEffect } from "react";
import { Card, Image } from "semantic-ui-react";

export default function ItemCard(props) {
  const [item, setItem] = useState({});

  function handleChange(event) {
    const newItem = { ...item, [event.target.name]: event.target.value };
    setItem(newItem);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.addItem(item);
    setItem({ title: "", first_name: "", description: "" });
  }

  return (
<<<<<<< HEAD
    <form onSubmit={event => handleSubmit(event)}>
      <label>
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          value={item.title}
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          type="text"
          name="first_name"
          placeholder="Enter first name"
          value={item.first_name}
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          type="text"
          name="description"
          placeholder="Enter description"
          value={item.description}
          onChange={handleChange}
        />
      </label>

      <button>Submit</button>
    </form>
=======
    <>
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            value={item.title}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="first_name"
            placeholder="Enter first name"
            value={item.first_name}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="description"
            placeholder="Enter description"
            value={item.description}
            onChange={handleChange}
          />
        </label>
        <button>Submit</button>
      </form>

      <div>
        <Card>
          <Image
            src="http://dummyimage.com/200x200.jpg/ff4444/ffffff"
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>{item.title}</Card.Header>
            <Card.Meta>
              <span className="date">Created by {item.first_name}</span>
            </Card.Meta>
            <Card.Description>{item.description}</Card.Description>
          </Card.Content>

          <Card.Content extra />
        </Card>
      </div>
    </>
>>>>>>> master
  );
}
