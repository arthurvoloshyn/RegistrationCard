import * as React from "react"
import Form from "./views/containers/Form";
import Header from "./views/components/Header";
import Layout from "./views/components/Layout";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./styles/app.scss";

const App: React.FC = () => (
  <>
    <Layout />
    <Header />
    <Form />
  </>
);

export default App;
