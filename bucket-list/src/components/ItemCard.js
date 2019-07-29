import React from "react";
import { Card, Image } from "semantic-ui-react";

export default function ItemCard({ item }) {
  return (
    <Card>
      <Image src={item.img} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{item.title}</Card.Header>
        <Card.Meta>
          <span className="date">Created by {item.first_name}</span>
        </Card.Meta>
        <Card.Description>{item.description}</Card.Description>
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
        <button className="delete">&times;</button>
        {/* <p>Test</p> */}
      </Card.Content>
    </Card>
  );
}
