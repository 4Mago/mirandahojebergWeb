import "./App.css"
import styled from "styled-components"
import { Route, Switch } from "react-router-dom"
import About from "./pages/about.component"
import Kontakt from "./pages/kontakt.component"
import Home from "./pages/home.component"
import Sidebar from "./components/navbar/sidebar"
import Forsbergs from "./pages/forsbergs"

const Container = styled.div`
  min-height: 80vh;
`



function App() {
  return (
    <Container className="App">
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path={"/ommig"} component={About} />
        <Route exact path={"/kontakt"} component={Kontakt} />
        <Route exact path={"/arbeten"} component={Forsbergs} />
      </Switch>
    </Container>
  )
}

export default App
