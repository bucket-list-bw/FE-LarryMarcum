import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemCard from "./ItemCard";
import { data } from "../data-complete";

export default function BucketList() {
  const [items, setItems] = useState(data);

  //   setItems(data);

  //   console.log("Data: ", items);

  return (
    <section className="bucket-list">
      {data.map(item => (
        <ItemCard item={item} />
      ))}
    </section>
  );
}
