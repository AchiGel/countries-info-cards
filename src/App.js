import "./index.css";
import styled from "styled-components";
import Header from "./components/Header";
import Form from "./components/Form";
import Main from "./components/Main";

const Wrapper = styled.div`
  width: 80%;
  max-width: 1280px;
`;

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Form />
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;
