import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

export default function CharacterCard({ character }) {
  // image={image}
  return (
    <Card>
      <Image src={character.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{character.name}</Card.Header>
        <Card.Meta>
          <span className="date">
            {character.species} {character.status}
          </span>
        </Card.Meta>
        <Card.Description>Location: {character.location.name}</Card.Description>
        <Card.Description>Origin: {character.origin.name}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          Episodes
        </a>
      </Card.Content>
    </Card>
  );
}
