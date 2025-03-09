import Home from "../sections/home";
import Header from "../sections/header";
import Footer from "../sections/footer";

function App() {
  return (
    <div>
      <Header />
      {/* Padding superior para compensar la altura del header fijo */}
      <main className="pt-20">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;