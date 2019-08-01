import React from "react";
import axios from "axios";
import ItemCard from "./ItemCard";

import { Twitter } from "react-social-sharing";
import { Facebook } from "react-social-sharing";
import { Pinterest } from "react-social-sharing";
import { Reddit } from "react-social-sharing";
import { Tumblr } from "react-social-sharing";

export default function BucketList(props) {
  return (
    <>
      <section className="bucket-list">
        {props.items.map(item => (
          <ItemCard
            {...props}
            item={item}
            deleteActiveItem={props.deleteActiveItem}
          />
        ))}
      </section>

      <Twitter link="https://github.com" />
      <Pinterest link="http://sharingbuttons.io" />
      <Reddit link="http://sharingbuttons.io" />
      <Tumblr link="http://sharingbuttons.io" />
      <Facebook link="http://sharingbuttons.io" />
    </>
  );
}
