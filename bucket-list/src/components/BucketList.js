import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemCard from "./ItemCard";
import { data } from "../data";

export default function BucketList() {
  const [items, setItems] = useState(data);

  //   setItems(data);

  //   console.log("Data: ", data);

  return (
    <section>
      {data.map(item => (
        <ItemCard item={item} />
      ))}
    </section>
  );
}
