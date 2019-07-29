import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemCard from "./ItemCard";
// import { data } from "../data";

export default function BucketList(props) {
  //   const [items, setItems] = useState(props.items);

  //   setItems(data);

  //   console.log("Data: ", data);
  //   console.log("items: ", props.items);
  console.log("props: ", props);

  return (
    <section className="bucket-list">
      {props.items.map(item => (
        <ItemCard item={item} />
      ))}
    </section>
  );
}
