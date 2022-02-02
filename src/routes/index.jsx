import { Switch, Route } from "react-router-dom";
import PageHome from "../pages/PageHome";
import PageWedding from "../pages/PageWedding";
import PageConfraternization from "../pages/PageConfraternization";
import PageGraduation from "../pages/PageGraduation";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <PageHome />
      </Route>

      <Route path="/pageWedding">
        <PageWedding />
      </Route>

      <Route path="/pageConfraternization">
        <PageConfraternization />
      </Route>

      <Route path="/pageGraduation">
        <PageGraduation />
      </Route>
    </Switch>
  );
};

export default Routes;
