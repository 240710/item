import Vue from "vue";
import VueRouter from 'vue-router'
import Layout from '../views/Layout/index'
import Login from '../views/Login/Login'
import Home from '../views/Home/index'
import User from '../views/User/index'
import TaskList from '../views/TaskList/index'
import Schedule from '../views/Schedule/index'

Vue.use(VueRouter)

//创建并暴露路由器
export default new VueRouter({
    routes: [{
            path: '/Layout',
            component: Layout,
            //这是对导航菜单的路由设置
            children: [{
                path: 'Home',
                name: 'Home',
                component: Home
            }, {
                path: 'User',
                name: 'User',
                component: User
            }, {
                path: 'TaskList',
                name: 'TaskList',
                component: TaskList
            }, {
                path: 'Schedule',
                name: 'Schedule',
                component: Schedule
            }]
        },
        {
            path: '',
            name: 'Login',
            component: Login
        }
    ]
})