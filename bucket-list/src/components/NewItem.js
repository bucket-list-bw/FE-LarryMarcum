import React, { useState, useEffect } from "react";
import { Card, Image } from "semantic-ui-react";
import career from "../career.jpg";
import experience from "../experience.jpg";
import travel from "../travel.jpg";
import education from "../education.jpg";
import family from "../family.jpg";

export default function ItemCard(props) {
  const [item, setItem] = useState({});

  function handleChange(event) {
    const newItem = { ...item, [event.target.name]: event.target.value };
    setItem(newItem);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.addItem(item);
    setItem({ photoUrl: "", title: "", first_name: "", description: "" });
  }

  return (
    <>
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Category
          <select name="photoUrl" onChange={handleChange}>
            <option value="default">Select...</option>
            <option value="travel">Travel</option>
            <option value="experience">Experience</option>
            <option value="career">Career</option>
            <option value="education">Education</option>
            <option value="family">Family</option>
          </select>
        </label>
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
            src={
              item.photoUrl === "career"
                ? career
                : item.photoUrl === "experience"
                ? experience
                : item.photoUrl === "travel"
                ? travel
                : item.photoUrl === "education"
                ? education
                : item.photoUrl === "family"
                ? family
                : "http://dummyimage.com/200x200.jpg/ff4444/ffffff"
            }
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
  );
}
