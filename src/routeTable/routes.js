import {lazy} from 'react'
import ErrorPage from '../pages/ErrorPage'
import Loading from '../components/Loading'
const Start = lazy(()=>import('../pages/Start'))
const Main = lazy(()=>import('../pages/Main'))

const Atlas = lazy(()=>import('../pages/Atlas'))
const FleaMarket = lazy(()=>import('../pages/FleaMarket'))
const Refuge = lazy(()=>import('../pages/Refuge'))
const Setting = lazy(()=>import('../pages/Setting'))
const WareHouse = lazy(()=>import('../pages/WareHouse'))
const WinkBar = lazy(()=>import('../pages/WinkBar'))
const Maps = lazy(()=>import('../pages/Maps'))
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
    //图鉴
    {
        path:'/atlas',
        element:<Atlas/>
    },
    //跳蚤市场
    {
        path:'/fleaMarket',
        element:<FleaMarket/>
    },
    //避难所
    {
        path:'/refuge',
        element:<Refuge/>
    },
    //设置
    {
        path:'/setting',
        element:<Setting/>
    },
    //仓库
    {
        path:'/wareHouse',
        element:<WareHouse/>
    },
    //酒馆
    {
        path:'/winkBar',
        element:<WinkBar/>
    },
    //地图
    {
        path:'/maps',
        element:<Maps/>
    },
    //测试：：loading界面
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