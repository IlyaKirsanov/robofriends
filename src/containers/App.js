import React from 'react'
//import axios from 'axios'
import CardList from '../components/CardList'
import SearchBox from '../components/SearcBox'
import ErrorBoundaries from '../components/ErrorBoundary'
import Scroll from '../components/Scroll'
import './App.css'

class App extends React.Component {

	state = {
		robots: [],
		searchField: ''
	}

	onSearchChange = (event) => {
		const inputValue = event.target.value
		this.setState((prevState) => {
			return { ...prevState, searchField: inputValue }
		})
	}

	// async componentDidMount(){
	// 	const users = await axios('https://jsonplaceholder.typicode.com/users')
	// 	this.setState((prevState) => {
	// 		return { ...prevState, robots: users.data }
	// 	})
	// }

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				return response.json()
			})
			.then(responseData => {
				setTimeout(() => {
					this.setState((prevState) => {
						return {
							...prevState,
							robots: responseData
						}
					})
				}, 1000)
			})
	}

	render() {
		const filteredRobots = this.state.robots.filter((robot) => {
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
		})

		let robotsList = null;

		if (!this.state.robots.length) {
			robotsList = <h2>Loading Data ... </h2>
		} else {
			robotsList = <CardList robots={filteredRobots} />
		}

		return (
			<div className="tc">
				<h1>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
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

export default App;