import "./App.scss";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";
import styled from "styled-components"
import { flexContainer } from './components/mixin';


const MainSection = styled.section`
  ${props => flexContainer(
    'flex', 
    'start',
    'stretch', 
    'row',  
    '20px',       
    'wrap',   
    '20px 40px'
  )}`;

function App() {
  return (
    <main>
      <Header />
      <MainSection>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </MainSection>
    </main>
  );
}

export default App;
