import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemCard from "./ItemCard";

export default function BucketList(props) {
  // const [items, setItems] = useState(data);

  //   setItems(data);

  //   console.log("Data: ", items);

  return (
    <section className="bucket-list">
      {props.items.map(item => (
        <ItemCard item={item} />
      ))}
    </section>
  );
}
