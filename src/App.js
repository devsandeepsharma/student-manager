import { useContext } from "react";

import Header from "./components/Layout/Header";
import AddStudent from "./components/Students/AddStudent";
import Students from "./components/Students/Students";
import UIContextProvider from "./store/UIContextProvider";
import UIContext from "./store/UIContext";

const AppContent = () => {

  const {isModalOpen} = useContext(UIContext)

  return (
    <div className="container">
      {isModalOpen && <AddStudent />}
      <Header />
      <main>
        <Students />
      </main>
    </div>
  )
}

const App = () => {
  return (
    <UIContextProvider>
      <AppContent />
    </UIContextProvider>
  )
}

export default App;