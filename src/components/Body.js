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
            element:<Login/>,
            errorElement:<ErrorPage/>
        }, 
        {
            path:"/browse", 
            element:<Browse/>,
            errorElement:<ErrorPage/>

        }, 
        {
            path: "/search",
            element:<GPTseach/>,
            errorElement:<ErrorPage/>

        },
        {
            path:"/video/:id",
            element:<DefaultVideoPlayer/>,
            errorElement:<ErrorPage/>
        },
        {
            path:"/error",
            element:<ErrorPage/>
        }
    ])

    

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
