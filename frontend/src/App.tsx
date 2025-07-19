import { FunctionComponent } from 'react';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';


const App: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Container />
      <Footer />
    </>
  )
};

export default App;