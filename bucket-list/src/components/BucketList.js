import React from "react";
import axios from "axios";
import ItemCard from "./ItemCard";

export default function BucketList(props) {
  return (
    <section className="bucket-list">
      {props.items.map(item => (
        <ItemCard
          {...props}
          item={item}
          deleteActiveItem={props.deleteActiveItem}
        />
      ))}
    </section>
  );
}
