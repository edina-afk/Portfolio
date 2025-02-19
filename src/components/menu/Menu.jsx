import'./menu.scss'

export default function Menu({menuOpen,setMenuOpen}) {
  return (
    <div className={'menu '+(menuOpen && "active")}>
        <ul>
            <li  onClick={()=>setMenuOpen(false)}>
                <a href="#intro">Home</a>
            </li>
            <li  onClick={()=>setMenuOpen(false)}>
                <a href="#portfolio">About Me</a>
            </li>
            
            <li  onClick={()=>setMenuOpen(false)}>
                <a href="#contact">Contact Me</a>
            </li>
         </ul>   
    </div>
  )
}
