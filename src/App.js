import { useContext } from "react";

import Header from "./components/Layout/Header";
import AddStudent from "./components/Students/AddStudent";
import Students from "./components/Students/Students";
import Notification from "./components/UI/Notification";
import UIContextProvider from "./store/UIContextProvider";
import UIContext from "./store/UIContext";
import StudentContextProvider from "./store/StudentContextProvider";

const AppContent = () => {

  const {isModalOpen} = useContext(UIContext)
  const {notification} = useContext(UIContext)

  return (
    <div className="container">
      {isModalOpen && <AddStudent />}
      {notification.showNotification && <Notification />}
      <Header />
      <main>
        <Students />
      </main>
    </div>
  )
}

const App = () => {
  return (
    <StudentContextProvider>
      <UIContextProvider>
        <AppContent />
      </UIContextProvider>
    </StudentContextProvider>
  )
}

export default App;