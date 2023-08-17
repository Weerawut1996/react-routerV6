import { Link, Outlet } from 'react-router-dom';
import NavberTab from '../Component/NavberTab';
import iconpic from '../pubilc_ico';

function FirstPage() {
   document.title = 'First Page';
   document.getElementById('page-ico').setAttribute('href',iconpic[1]);
   const navbarSupNav = <nav className='supnav-block'>
      <Link to={'/1stPage/ChildPage1'}>sup nav 1st</Link>
      <Link to={'/1stPage/ChildPage2'}>sup nav 2nd</Link>
      <Link to={'/1stPage/ChildPage3'}>sup nav 3rd</Link>
      <Link to={'/1stPage/ChildPage4'}>sup nav 4rd</Link>
   </nav>
   return (
      <>
         <header>
            <h1>First Page</h1>
         </header>
         <NavberTab />
         <div className="sidebar"><h2 className="text-fff">Sidebar</h2>{navbarSupNav}</div>
         <section><h2 className="text-fff">Main</h2><Outlet/></section>
         <div className="content1"><h2 className="text-fff">Content1</h2></div>
         <div className="content2"><h2 className='text-fff'>Content2</h2></div>
         <div className="content3"><h2 className='text-fff'>Content3</h2></div>
      </>
   )
}

export default FirstPage
