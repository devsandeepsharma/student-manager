import Header from "./components/Layout/Header";
import AddStudent from "./components/Students/AddStudent";
import Students from "./components/Students/Students";

const App = () => {
  return (
    <div className="container">
      <AddStudent />
      <Header />
      <main>
        <Students />
      </main>
    </div>
  )
}

export default App;