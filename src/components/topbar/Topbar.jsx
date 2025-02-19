import {Mail}from  "@mui/icons-material"
import "./topbar.scss"
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
         <div className="left">
           <a href="#intro" className="logo">Edu.</a>
           <div className="itemContainer">
           <Mail className="icon"/>
           <span>edenb928@gmail.com</span>
           </div>
         </div>
         <div className="right">
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
        </div>
      </div>
    </div>
  )
}
