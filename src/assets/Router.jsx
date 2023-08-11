import { createBrowserRouter } from 'react-router-dom'
import Firstpage from './Page/FirstPage'
import {FirstpageChild1st ,FirstpageChild2st,FirstpageChild3st } from './Page/1stPageChildPage/FirstpageChildPage'
import SecondPage from './Page/SecondPage';
import ThirdPage from './Page/ThirdPage';
import ErrorPage from './Page/ErrorPage';
import HomePage from './Page/HomePage';


const router = createBrowserRouter([
   {
      path: "/",
      element: < HomePage />,
      errorElement: <ErrorPage />,
   },
   {
      path: "/1stPage",
      element: <Firstpage />,
      errorElement: <ErrorPage />,
      children: [
         { path: "/1stPage/ChildPage1", element: <FirstpageChild1st /> },
         { path: "/1stPage/ChildPage2", element: <FirstpageChild2st /> },
         { path: "/1stPage/ChildPage3", element: <FirstpageChild3st /> },
       ],
   },
   {
      path: "/2ndPage",
      element: <SecondPage />,
      errorElement: <ErrorPage />,
   },
   {
      path: "/3rdPage",
      element: <ThirdPage />,
      errorElement: <ErrorPage />,
   },
]);

export default router

const id = [
   { id: "aaa", pass: 1000 }, { id: "bbb", pass: 9999 }
]
console.table(id)