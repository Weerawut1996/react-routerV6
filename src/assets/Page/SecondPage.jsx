import {  Link, Outlet } from 'react-router-dom';
import NavberTab from '../Component/NavberTab';
import iconpic from '../pubilc_ico';


function SecondPage() {
   document.title = 'Second Page';
   document.getElementById('page-ico').setAttribute('href',iconpic[2]);
   const navbarSupNav = <nav className='supnav-block'>
      <Link to={'/2ndPage/ChildPage1'}>page 2 supnav 1</Link>
      <Link to={'/2ndPage/ChildPage2'}>page 2 supnav 2</Link>
      <Link to={'/2ndPage/ChildPage3'}>page 2 supnav 3</Link>
      <Link to={'/2ndPage/ChildPage4'}>page 2 supnav 4</Link>
   </nav>
   return (
     <>
       <header>
            <h1>Second page</h1>
         </header>
         <NavberTab />         
         <div className="sidebar"><h2 className="text-fff">Sidebar</h2>{navbarSupNav}</div>
         <section><h2 className="text-fff">Main</h2></section>
         <div className="content1"><h2 className="text-fff">Content1</h2><Outlet/></div>
         <div className="content2"><h2 className='text-fff'>Content2</h2></div>
         <div className="content3"><h2 className='text-fff'>Content3</h2></div>
     </>
   )
 }
 
 export default SecondPage
 