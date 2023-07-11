import WebGLScene from "./WebGLScene";

function Navigation() {
  return (
    <nav className="flex flex-row items-center">
      <div className="flex flex-row items-center">
        <div className="text-3xl">LOGO</div>
        <div className="h-16 w-16"><WebGLScene /></div>
      </div>
      <ul className="text-1xl">
        <li>
          <a href="">One</a>
        </li>
        <li>
          <a href="">Two</a>
        </li>
        <li>
          <a href="">Three</a>
        </li>
        <li>
          <a href="">Four</a>
        </li>
      </ul>
      <button className="cta-contact">
        Button
      </button>
    </nav>
  )
}

export default Navigation
