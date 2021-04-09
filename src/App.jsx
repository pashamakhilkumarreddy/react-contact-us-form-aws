import Footer from './components/Footer';
import Header from './components/Header';
import Routes from './routes';

const App = () => {
  return (
    <>
      <Header />
      <main className='container mt-6'>
        <div className='columns is-mobile is-centered is-vcentered'>
          <Routes />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
