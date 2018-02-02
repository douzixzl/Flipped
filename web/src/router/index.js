import React from 'react'
import {Route,IndexRoute} from 'react-router'

import HomePage from '../components/homePage/homePageComponent'
import Topic from '../components/Topic/homePageComponent'
import Designer from '../components/designer/homePageComponent'
import Detail from '../components/detail/homePageComponent'
import Cart from '../components/cart/homePageComponent'
import Login from '../components/login/homePageComponent'
import Register from '../components/register/homePageComponent'
import ProductList from '../components/productList/homePageComponent'

 const route = (
			<Route>
				<Route path = "homepage" component = {HomePage}/>
				<Route path = "topic" component = {Topic}/>
				<Route path = "designer" component = {Designer}/>
				<Route path = "detail" component = {Detail}/>
				<Route path = "cart" component = {Cart}/>
				<Route path = "login" component = {Login}/>
				<Route path = "register" component = {Register}/>
				<Route path = "productList" component = {ProductList}/>
			</Route>
			)

export default route;