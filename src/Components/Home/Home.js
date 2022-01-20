import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useRouteMatch } from "react-router-dom";
import { Link, Route, Switch } from "react-router-dom";
import HtmlSection from "../Html-Section/HtmlSection";
import BootstrapCollection from "./BootstrapCollection/BootstrapCollection";
import CssCollection from "./CollectionCSS/CssCollection";
import ExpressCollection from "./ExpressCollection/ExpressCollection";
import FirebaseCollection from "./FirebaseCollection/FirebaseCollection";
import HerokuCollection from "./HerokuCollection/HerokuCollection";

import "./Home.css";
import JavaScriptCollection from "./JavaScriptCollection/JavaScriptCollection";
import MaterialUiCollection from "./MaterialUICollection/MaterialUiCollection";
import MongoDbCollection from "./MongoDB/MongoDbCollection";
import NetlifyCollection from "./NetlifyCollection/NetlifyCollection";
import NodeCollection from "./NodeCollection/NodeCollection";
import ReactCollection from "./ReactCollection/ReactCollection";
import TailwindCssCollection from "./TailwindCssCollection/TailwindCssCollection";

const Home = () => {
  let { path, url } = useRouteMatch();
  return (
    <div className="my-dashboard">
      <Container fluid className="mt-1">
        <Row>
          <Col className="left-bar" xs={12} md={3} lg={3}>
            <div className="left-div">
              <h4>Front End Development</h4>
              <Link to={`${url}/html-collection`}>
                <Button className="mt-2">HTML</Button>
              </Link>
              <Link to={`${url}/css-collection`}>
                <Button className="mt-2">CSS</Button>
              </Link>
              <Link to={`${url}/react-collection`}>
                <Button className="mt-2 mb-2">React.js</Button>
              </Link>
            </div>
            <div className="left-div mt-2">
              <h4>UI Frameworks</h4>
              <Link to={`${url}/bootstrap-collection`}>
                <Button className="mt-2">Bootstrap</Button>
              </Link>
              <Link to={`${url}/materialUI-collection`}>
                <Button className="mt-2">Material-UI</Button>
              </Link>
              <Link to={`${url}/tailwind-css`}>
                <Button className="mt-2 mb-2">Tailwind CSS</Button>
              </Link>
            </div>
            <div className="left-div mt-2">
              <h4>Back End Development</h4>
              <Link to={`${url}/node-collection`}>
                <Button className="mt-2">Node.js</Button>
              </Link>
              <Link to={`${url}/express-collection`}>
                <Button className="mt-2">Express.js</Button>
              </Link>
              <h4>Programming Language & Database</h4>
              <Link to={`${url}/javascript-collection`}>
                <Button className="mt-2 mb-2">JavaScript</Button>
              </Link>
              <Link to={`${url}/mongodb-collection`}>
                <Button className="mt-2 mb-2">MongoDB</Button>
              </Link>
            </div>
            <div className="left-div mt-2">
              <h4>Hosting Platform</h4>
              <Link to={`${url}/netlify-collection`}>
                <Button className="mt-2">Netlify</Button>
              </Link>
              <Link to={`${url}/firebase-collection`}>
                <Button className="mt-2">Firebase</Button>
              </Link>
              <Link to={`${url}/heroku-collection`}>
                <Button className="mt-2 mb-2">Heroku</Button>
              </Link>
            </div>
          </Col>
          <Col xs={12} md={9} lg={9}>
            <Switch>
              <Route path={`${path}/html-collection`}>
                <HtmlSection></HtmlSection>
              </Route>
              <Route path={`${path}/css-collection`}>
                <CssCollection></CssCollection>
              </Route>
              <Route path={`${path}/react-collection`}>
                <ReactCollection></ReactCollection>
              </Route>
              <Route path={`${path}/bootstrap-collection`}>
                <BootstrapCollection></BootstrapCollection>
              </Route>
              <Route path={`${path}/materialUI-collection`}>
                <MaterialUiCollection></MaterialUiCollection>
              </Route>
              <Route path={`${path}/tailwind-css`}>
                <TailwindCssCollection></TailwindCssCollection>
              </Route>
              <Route path={`${path}/node-collection`}>
                <NodeCollection></NodeCollection>
              </Route>
              <Route path={`${path}/express-collection`}>
                <ExpressCollection></ExpressCollection>
              </Route>
              <Route path={`${path}/javascript-collection`}>
                <JavaScriptCollection></JavaScriptCollection>
              </Route>
              <Route path={`${path}/mongodb-collection`}>
                <MongoDbCollection></MongoDbCollection>
              </Route>
              <Route path={`${path}/netlify-collection`}>
                <NetlifyCollection></NetlifyCollection>
              </Route>
              <Route path={`${path}/firebase-collection`}>
                <FirebaseCollection></FirebaseCollection>
              </Route>
              <Route path={`${path}/heroku-collection`}>
                <HerokuCollection></HerokuCollection>
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
