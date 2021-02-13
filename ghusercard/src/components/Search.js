import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Label, Input, FormGroup } from "reactstrap";
import "../App.css";

class Search extends React.Component {
	constructor() {
		super();
		this.state = {
			username: ""
		}
	};

	handleChange = (e) => {
		this.setState({
			...this.state,
			username: e.target.value
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		console.log("submitting username: ", this.state.username);
		this.props.search_user(this.state.username);
		this.setState({
			...this.state,
			username: ""
		});
	};

	render() {
		return (
			<Form className="searchForm" onSubmit={this.onSubmit}>
				<FormGroup>
					<Label for="username">Username</Label>
					<Input 
					type="text"
					name="username" 
					id="username"
					className="search_input"
					onChange={this.handleChange}
					value={this.state.username}
					placeholder="enter username"
					/>
					<Button type="submit" className="search_btn" >Submit</Button>
				</FormGroup>
        	</Form>
		)
	}
}

export default Search;