import React, { useState } from "react";
import { Card, Image, Modal, Header } from "semantic-ui-react";
import career from "../career.jpg";
import experience from "../experience.jpg";
import travel from "../travel.jpg";
import education from "../education.jpg";
import family from "../family.jpg";

export default function ItemCard(props) {
  const [updatedItem, setUpdatedItem] = useState(props.item);

  function handleChange(event) {
    const newUpdatedItem = {
      ...updatedItem,
      [event.target.name]: event.target.value
    };
    setUpdatedItem(newUpdatedItem);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.updateItem(props.item, updatedItem);
  }
  return (
    <Card>
      <Image
        src={
          props.item.photoUrl === "career"
            ? career
            : props.item.photoUrl === "experience"
            ? experience
            : props.item.photoUrl === "travel"
            ? travel
            : props.item.photoUrl === "education"
            ? education
            : props.item.photoUrl === "family"
            ? family
            : "http://dummyimage.com/200x200.jpg/ff4444/ffffff"
        }
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{props.item.goal}</Card.Header>

        <Card.Description>{props.item.journalEntry}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="check-container">
          <input type="checkbox" onClick={() => props.moveItem(props.item)} />
          <label>Complete</label>
        </div>
        <Modal trigger={<button className="edit">Edit</button>}>
          <Modal.Header>Edit</Modal.Header>

          <Modal.Content image>
            <Image
              className="modal-img"
              wrapped
              size="medium"
              src={
                updatedItem.photoUrl === "career"
                  ? career
                  : updatedItem.photoUrl === "experience"
                  ? experience
                  : updatedItem.photoUrl === "travel"
                  ? travel
                  : updatedItem.photoUrl === "education"
                  ? education
                  : updatedItem.photoUrl === "family"
                  ? family
                  : "http://dummyimage.com/200x200.jpg/ff4444/ffffff"
              }
            />
            <form onSubmit={event => handleSubmit(event)}>
              <Modal.Description>
                <Header>
                  <label>
                    <select name="photoUrl" onChange={handleChange}>
                      <option value="default">Select Category</option>
                      <option value="travel">Travel</option>
                      <option value="experience">Experience</option>
                      <option value="career">Career</option>
                      <option value="education">Education</option>
                      <option value="family">Family</option>
                    </select>
                  </label>
                  <label>
                    Title:&nbsp;&nbsp;
                    <input
                      type="text"
                      name="goal"
                      value={updatedItem.goal}
                      onChange={handleChange}
                    />
                  </label>
                </Header>
                <p />
                <p>
                  <label>
                    Description:&nbsp;&nbsp;
                    <input
                      type="text"
                      name="journalEntry"
                      value={updatedItem.journalEntry}
                      onChange={handleChange}
                    />
                  </label>
                </p>
                <button>Submit</button>
              </Modal.Description>
            </form>
          </Modal.Content>
        </Modal>

        <button
          className="delete"
          onClick={() => props.deleteItem(props.item, props.isCompleted)}
        >
          &times;
        </button>
      </Card.Content>
    </Card>
  );
}
