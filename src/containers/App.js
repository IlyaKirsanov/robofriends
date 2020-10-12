import React from 'react'
//import axios from 'axios'
import CardList from '../components/CardList'
import SearchBox from '../components/SearcBox'
import ErrorBoundaries from '../components/ErrorBoundary'
import Scroll from '../components/Scroll'
import './App.css'
import * as actions from '../redux/actions'
import { connect } from 'react-redux'

class App extends React.Component {

	// async componentDidMount(){
	// 	const users = await axios('https://jsonplaceholder.typicode.com/users')
	// 	this.setState((prevState) => {
	// 		return { ...prevState, robots: users.data }
	// 	})
	// }

	componentDidMount() {
		this.props.onRequestRobots();
	}

	render() {
		const { searchField, onSearchChange, robots, isPending, error } = this.props;
		const filteredRobots = robots.filter((robot) => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		})

		let robotsList = null;

		if (!isPending) { 
			robotsList = <h2>Loading Data ... </h2>
		} else {
			robotsList = <CardList robots={filteredRobots} />
		}

		return (
			<div className="tc">
				<h1>RoboFriends</h1>
				<SearchBox searchChange={onSearchChange} />
				<hr style={{ backgroundColor: 'cyan', border: 'none', height: '1px' }} />
				<Scroll>
					<ErrorBoundaries>
						{robotsList}
					</ErrorBoundaries>
				</Scroll>
			</div>
		)
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