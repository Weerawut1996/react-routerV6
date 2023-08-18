import iconpic from "../pubilc_ico";

function ErrorPage() {
   document.title = 'Error 404';
   document.getElementById('root').style.display = 'block';
   document.getElementById('page-ico').setAttribute('href',iconpic[0]);
   return (
     <>
       <h1 style={{textAlign:"center"}}>404 Not found page</h1>
     </>
   )
 }
 
 export default ErrorPage