import Header from "./components/Layout/Header";
import Students from "./components/Students/Students";

const App = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <Students />
      </main>
    </div>
  )
}

export default App;