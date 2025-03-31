import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Header from './layoutcomponents/header';
import ContentBody from './layoutcomponents/contentbody';
import Footer from './layoutcomponents/footer';
import BuildBlock from './pages/buildblock';
import MyBlocks from './pages/myblocks';
import BuildQuilt from './pages/buildquilt';
import MyQuilts from './pages/myquilts';

function App() {
  return (
      <div className="App">
          <Header />
          <ContentBody>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/buildblock" element={<BuildBlock />} />
                  <Route path="/myblocks" element={<MyBlocks />} />
                <Route path="/buildquilt" element={<BuildQuilt />} />
                  <Route path="/myquilts" element={<MyQuilts />} />
              </Routes>
          </ContentBody>
          <Footer />
      </div>
  );
}

export default App;
