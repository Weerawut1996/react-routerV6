import { useEffect, useState } from 'react';
import NavberTab from '../Component/NavberTab';
import iconpic from '../pubilc_ico';

function HomePage() {
   document.title = 'Home';
   document.getElementById('page-ico').setAttribute('href',iconpic[0]);
   const [dimensions, setDimensions] = useState(window.innerWidth)
   useEffect(() => {
      function handleResize() { setDimensions(window.innerWidth) }
      window.addEventListener('resize', handleResize)
   })
   return (
      <>
         <header>
            <h1>Home</h1>
         </header>
         <NavberTab />
         <section>
            <h2>Main</h2>
            <p>window wight : {dimensions}</p>
         </section>
         <div className="sidebar"><h2>Sidebar</h2></div>
         <div className="content1"><h2>Content1</h2></div>
         <div className="content2"><h2>Content2</h2></div>
         <div className="content3"><h2>Content3</h2></div>
      </>
   )
}

export default HomePage