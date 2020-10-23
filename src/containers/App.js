import React from 'react'
import './App.css'
import * as actions from '../redux/actions'
import { connect } from 'react-redux'
import MainPage from '../components/MainPage'

class App extends React.Component {
	render() {
		return <MainPage {...this.props}/>
	}
}

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSearchChange: (event) => dispatch(actions.setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(actions.requestRobots())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);