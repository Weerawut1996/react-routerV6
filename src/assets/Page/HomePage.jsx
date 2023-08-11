import { useEffect, useState } from 'react';
import NavberTab from '../Component/NavberTab';

function HomePage() {
   document.title = 'Home';
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
            <p>Main</p>
            <p>window wight : {dimensions}</p>
         </section>
         <div className="sidebar">Sidebar</div>
         <div className="content1">Content1</div>
         <div className="content2">Content2</div>
         <div className="content3">Content3</div>
         <footer>Footer</footer>
      </>
   )
}

export default HomePage