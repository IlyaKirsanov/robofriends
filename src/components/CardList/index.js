import React from 'react'
import Card from '../Card';

const CardList = ({robots}) => {
	const robotsComponents = robots.map((robot, idx) => {
		return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
	})
	return (
		<div>
			{robotsComponents}
		</div>
	)
}

export default CardList;