import './Header.css'
export default function Header (){
    return(
        <nav className="sidebar">
            <h1>AI Forge</h1>
            <ul>
                <li><a href="#">IA Models</a></li>
                <li><a href="#">Datasets</a></li>
            </ul>
        </nav>
    )
}