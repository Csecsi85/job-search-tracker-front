import Link from 'next/link';
import classes from './main-header.module.css';

function MainHeader() {
  return (
    <header className={classes['main-header']}>
      <div>
        <Link href="/">Logo</Link>
      </div>
      <nav>
        <ul className={classes['nav-list']}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/add-application">New Application</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
