import Footer from './components/Footer';
import Header from './components/Header';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Intro />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
