import { Route, Switch } from "react-router-dom"
import Account from "../pages/Account.pages"
import HomePage from "./Home"

const Navigation=()=>{
    return(
        <Switch>
        <Route path="/" exact component={() => <HomePage  />} />
        <Route path="/account" component={() => <Account />} />
      </Switch>
    )
}
export default Navigation