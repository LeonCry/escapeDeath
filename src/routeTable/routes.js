import {lazy} from 'react'
import ErrorPage from '../pages/ErrorPage'
import Loading from '../components/Loading'
const Start = lazy(()=>import('../pages/Start'))
const Main = lazy(()=>import('../pages/Main'))
const routes = [

    //首页登录
    {
        path:'/',
        element:<Start/>
    },
    //主页
    {
        path:'/main',
        element:<Main/>
    },
    //loading界面
    {
        path:'/loading',
        element:<Loading/>
    },
    
    //兜底--错误页面
    {
        path:'*',
        element:<ErrorPage/>
    }

]

export default routes;