import React from "react";
import { Card, Image } from "semantic-ui-react";

export default function ItemCard(props) {
  console.log("card props: ", props);
  return (
    <Card>
      <Image src={props.item.img} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.item.title}</Card.Header>
        <Card.Meta>
          <span className="date">Created by {props.item.first_name}</span>
        </Card.Meta>
        <Card.Description>{props.item.description}</Card.Description>
      </Card.Content>
      {/* <Card.Content className="check">
        <input type="checkbox" />
        <label>Mark Complete</label>
      </Card.Content> */}
      <Card.Content extra>
        <div className="check-container">
          <input type="checkbox" />
          <label>Complete</label>
        </div>

        <button className="edit">Edit</button>
        <button
          className="delete"
          onClick={() => props.deleteActiveItem(props.item)}
        >
          &times;
        </button>
        {/* <p>Test</p> */}
      </Card.Content>
    </Card>
  );
}
