import Navigation from "./Navigation";

function Header() {
  return (
    <header className="p-4 bg-yellow-400 flex flex-row justify-between">
      <div>
        LOGO
      </div>
      <div>
        <Navigation />
      </div>
      <div>
        <button className="">
          Button
        </button>
      </div>
    </header>
  )
}

export default Header
