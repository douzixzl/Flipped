import React,{Component} from 'react'
import {connect} from 'react-redux'

import * as HomePageAction from './homePageAction'

class HomePage extends Component{
	state = {
		text:''
	}

	componentDidMount(){
		this.props.homePge({page:1,qty:10});
	}

	render(){
		console.log('22222222222222',this.props.pageProduct);
		return(
			<div>
				<h1>这是主页</h1>
			</div>
		)
	}
}


let mapStateToProps = (state) => {
    return {
        pageProduct: state.pageProduct.data
    }
}

export default connect(mapStateToProps,HomePageAction)(HomePage);