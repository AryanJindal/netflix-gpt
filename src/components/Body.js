import React from 'react'
import Browse from './Browse'
import { createBrowserRouter} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Login from './Login'

import ErrorPage from './ErrorPage'
import GPTseach from './GPTseach'
import DefaultVideoPlayer from './DefaultVideoPlayer'

const Body = () => {
    
    const appRouter = createBrowserRouter([
        {
            path:"/", 
            element:<Login/>
        }, 
        {
            path:"/browse", 
            element:<Browse/>
        }, 
        {
            path: "/error",
            element: <ErrorPage/>
        },
        {
            path: "/search",
            element:<GPTseach/>

        },{
            path:"/video/:id",
            element:<DefaultVideoPlayer/>
        }
    ])

    

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
