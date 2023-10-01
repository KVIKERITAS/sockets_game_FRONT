import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import GamePage from "./pages/GamePage.tsx";
import { io } from "socket.io-client"
import {useUserStore} from "./store/userStore.ts";
import ArenaPage from "./pages/ArenaPage.tsx";
import BattleRequestModal from "./components/BattleRequestModal.tsx";
import {useState} from "react";
export const socket = io("http://localhost:8000", {
    autoConnect: false
})

function App() {

    const [showBattleModal, setShowBattleModal] = useState(false);
    const [modalText, setModalText] = useState("")

    const setOnlineUsers = useUserStore(state => state.setOnlineUsers)
    const setUserSocketId = useUserStore(state => state.setUserSocketId)
    const setUserGeneratedItems = useUserStore(state => state.setUserGeneratedItems)
    const setUser = useUserStore(state => state.setUser)

    socket.on("connect", () => setUserSocketId(socket.id))

    socket.on("onlineUsers", users => setOnlineUsers(users))

    socket.on("weapons", (weapons, user) => {
        console.log(weapons)
        console.log(user)
        setUserGeneratedItems(weapons)
        setUser(user[0])
    })

    socket.on("inventoryUpdate", updatedUser => setUser(updatedUser[0]))

    socket.on("receiveBattleRequest", message => {
        setModalText(message)
        setShowBattleModal(true)
    })

  return (
    <>
        <BattleRequestModal showBattleModal={showBattleModal} setShowBattleModal={setShowBattleModal} text={modalText} />
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/game" element={<GamePage/>}/>
            <Route path="/arena" element={<ArenaPage/>}/>
        </Routes>
    </>
  )
}

export default App
