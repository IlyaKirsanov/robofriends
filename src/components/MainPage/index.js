import React from 'react'
//import axios from 'axios'
import CardList from '../CardList'
import SearchBox from '../SearcBox'
import ErrorBoundaries from '../ErrorBoundary'
import Scroll from '../Scroll'
import CounterButton from '../CounterButton'
import './MainPage.css'

class MainPage extends React.Component {

	componentDidMount() {
		this.props.onRequestRobots();
	}

	filteredRobots = robots => {
		return robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
		})
	}

	render() {
		const {onSearchChange, robots, isPending } = this.props;


		let robotsList = null;

		if (!isPending) {
			robotsList = <h2>Loading Data ... </h2>
		} else {
			robotsList = <CardList robots={this.filteredRobots(robots)} />
		}

		return (
			<div className="tc">
				<h1>RoboFriends</h1>
				<SearchBox searchChange={onSearchChange} />
				<CounterButton color="cyan" />
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


export default (MainPage);