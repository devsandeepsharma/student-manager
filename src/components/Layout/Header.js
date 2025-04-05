import "./header.css";

import { GraduationCap, Users } from "lucide-react"

const Header = () => {
    return (
        <header className="header">
            <h1 className="flex-container">
                <GraduationCap strokeWidth={2} size={25} />
                Student Manager
            </h1>
            <div className="header_label flex-container">
                <Users strokeWidth={2} size={20} />
                1
            </div>
        </header>
    )
}

export default Header;