import React from "react"
import styled from "styled-components"
import "../index.css"

const Card = styled.div`

	 img {
		width: 150px;
		height: 150px;
		border-radius: 3px;
		margin-right: 20px;
	}
	
	.name {
		font-size: 1.7rem;
	}
	
	p {
		font-size: 1.2rem;
		margin-bottom: 3px;
	}
	
	.username {
		font-size: 2rem;
		margin: 3px 0 10px;
	}
`

const UserCard = (props) => {
	return (
		<Card className="cardD">
			<h2 className="username">{props.gitcard.login}</h2>
			<div className="userImage">
				<img src={props.gitcard.avatar_url} alt='user_image'/>
			</div>
			<p className="name" >Name: {props.gitcard.name}</p>
			<p>Location: {props.gitcard.location}</p>
			<p>Followers: {props.gitcard.followers}</p>
			<p>Following: {props.gitcard.following}</p>
			<p>Bio: {props.gitcard.bio}</p>
		</Card>
	)
}

export default UserCard;