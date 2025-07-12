import Main from "./Main"
import TerminalWindow from "./TerminalWindow"

function Layout() {
    return (
        <div className="flex flex-row justify-center items-center w-full fixed top-21.25 bottom-8.25">
            <Main />
            <TerminalWindow />
        </div>
    )
}

export default Layout;