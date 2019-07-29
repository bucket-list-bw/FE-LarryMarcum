import React from "react";
import { Switch, Route } from "react-router-dom";

import BucketList from "./BucketList";
import CompletedList from "./CompletedList";

export default function AppRouter() {
  return (
    <div className="page-view ui bottom attached segment active tab">
      <Switch>
        <Route path="/active" component={BucketList} />
        <Route path="/completed" component={CompletedList} />
      </Switch>
    </div>
  );
}
