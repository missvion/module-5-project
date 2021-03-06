import React from "react";
import { Link } from "react-router-dom";
import { Modal, Dropdown } from "semantic-ui-react";
import { UserLoginForm } from "./UserLoginForm";
import { EmployeeLoginForm } from "./EmployeeLoginForm";

export class PublicNavBar extends React.Component {
	state = {
		open: false,
		displayModal: ""
	};

	showPetOwnerLogin = size => () => this.setState({ size, open: true, displayModal: "petownerlogin" });
	showEmployeeLogin = size => () => this.setState({ size, open: true, displayModal: "employeelogin" });
	close = () => this.setState({ open: false });

	render() {
		const { open, size } = this.state;
		return (
			<div>
				<div className='ui menu' style={{ borderRadius: "0px" }}>
					<Link className='item' to='/'>
						Home
					</Link>

					<div className='right menu'>
						<div>
							<Dropdown text='Login' pointing className='link item'>
								<Dropdown.Menu>
									<Dropdown.Item onClick={this.showPetOwnerLogin("mini")}>Pet Portal</Dropdown.Item>
									<Dropdown.Divider />
									<Dropdown.Item onClick={this.showEmployeeLogin("mini")}>Employee Portal</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div>
						<Link className='ui teal button' style={{ fontFamily: "Montserrat", borderRadius: "0px" }} to='/signup'>
							Sign Up
						</Link>
					</div>
				</div>

				<Modal size={size} open={open} onClose={this.close}>
					<Modal.Header>{this.state.displayModal === "employeelogin" ? "Employee Portal" : "Pet Portal"}</Modal.Header>
					<Modal.Content>{this.state.displayModal === "employeelogin" ? <EmployeeLoginForm /> : <UserLoginForm />}</Modal.Content>
				</Modal>
			</div>
		);
	}
}
