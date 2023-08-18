import { Outlet } from 'react-router-dom';
import NavberTab from '../Component/NavberTab';
import iconpic from '../pubilc_ico';

function ThirdPage() {
   document.title = 'Third Page';   
   document.getElementById('page-ico').setAttribute('href',iconpic[3]);
   return (
     <>
       <header>
            <h1>Third Page</h1>
         </header>
         <NavberTab />        
         <div className="sidebar"><h2>Sidebar</h2></div>
         <section><h2>Main</h2><Outlet/></section>
         <div className="content1"><h2>Content1</h2></div>
         <div className="content2"><h2>Content2</h2></div>
         <div className="content3"><h2>Content3</h2></div>
     </>
   )
 }
 
 export default ThirdPage