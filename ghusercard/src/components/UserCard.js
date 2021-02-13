import React from "react";
import "../App.css";

class UserCard extends React.Component {
	render(){
		//console.log("my props: " ,this.props);
		const {login, name, location, avatar_url,followers, following, bio } = this.props.data;
		return (
			<div className="user_card">
				<h2 className="username">{login}</h2>
			<div className="userImage">
				<img src={avatar_url} alt='user_image'/>
			</div>
			<p className="name" >Name: {name}</p>
			<p>Location: {location}</p>
			<p>Followers: {followers}</p>
			<p>Following: {following}</p>
			<p>Bio: {bio}</p>
			</div>
		)
	}
}

export default UserCard;