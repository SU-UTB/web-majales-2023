import { BrowserRouter } from 'react-router-dom';
import Layout from './components/shared/Layout';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Home />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
