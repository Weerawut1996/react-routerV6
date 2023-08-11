import { Link, Outlet } from 'react-router-dom';
import NavberTab from '../Component/NavberTab';

function SecondPage() {
   document.title = 'Second Page';
   return (
     <>
       <header>
            <h1>Second page</h1>
         </header>
         <NavberTab />
         <section><p>Main</p></section>
         <div className="sidebar">Sidebar</div>
         <div className="content1"><p>Content1</p><Outlet/></div>
         <div className="content2">Content2</div>
         <div className="content3">Content3</div>
         <footer>Footer</footer>
     </>
   )
 }
 
 export default SecondPage
 