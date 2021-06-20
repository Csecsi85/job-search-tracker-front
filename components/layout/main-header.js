import Link from 'next/link';

function MainHeader() {
  return (
    <header>
      <div>
        <Link href="/">Logo</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
