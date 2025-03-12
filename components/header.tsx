export default function Header() {
    return (
      <header>
        <nav className="flex flex-cols-1 justify-end p-4 items-center">
          <ul className="flex flex-row space-x-4">
            <li>
              <a href="/" className="text-black p-0.5">Gmail</a>
            </li>
            <li>
              <a href="/about" className="text-black p-0.5">images</a>
            </li>
            <li>
              <a href="/about" className=""><img src="/flask.png" alt="flask" className="w-6 h-6 p-0.5" /></a>
            </li>
            <li>
              <a href="/about" className=""><img src="/al-icon.png" alt="icon" className="w-6 h-6 p-0.5" /></a>
            </li>
            <li>
              <a href="/about" className=""><img src="/profile.png" alt="profile" className="w-8 h-8" /></a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }