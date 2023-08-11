import { Link, Outlet } from 'react-router-dom';
import NavberTab from '../Component/NavberTab';

function FirstPage() {
   document.title = 'First Page';
   const navbarSupNav = <nav className='supnav-block'>
      <Link to={'/1stPage/ChildPage1'}>sup nav 1st</Link>
      <Link to={'/1stPage/ChildPage2'}>sup nav 2nd</Link>
      <Link to={'/1stPage/ChildPage3'}>sup nav 3rd</Link>
   </nav>
   return (
      <>
         <header>
            <h1>First Page</h1>
         </header>
         <NavberTab />
         <section><p>Main</p></section>
         <div className="sidebar"><p>Sidebar</p>{navbarSupNav}</div>
         <div className="content1"><p>Content1</p><Outlet/></div>
         <div className="content2">Content2</div>
         <div className="content3">Content3</div>
         <footer>Footer</footer>
      </>
   )
}

export default FirstPage
