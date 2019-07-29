import React from "react";
import { Switch, Route } from "react-router-dom";

import BucketList from "./BucketList";
import CompletedList from "./CompletedList";
import NewItem from "./NewItem";

export default function AppRouter(props) {
  //   console.log("items: ", props.items);

  return (
    <div className="page-view ui bottom attached segment active tab">
      <Switch>
        <Route
          path="/active"
          render={props => <BucketList {...props} items={props.items} />}
        />
        <Route path="/completed" component={CompletedList} />
        <Route
          path="/new"
          render={props => <NewItem {...props} addItem={props.addItem} />}
        />
      </Switch>
    </div>
  );
}
