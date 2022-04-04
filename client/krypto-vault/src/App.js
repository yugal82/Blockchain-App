import {Navbar,Welcome,Services,Transaction,Footer} from './components'
function App() {
  return (
    <div className="App min-h-screen">
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transaction />
      <Footer />
    </div>
  );
}

export default App;
