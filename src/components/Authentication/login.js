import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import {logo} from '../../assets/images/dc_logo.png';


export default class Login extends Component {
	render() {
		return (
			<div className="auth">
				<div className="auth_left">
					
					<div className="card">
						<div className="text-center mb-2">
							<Link className="header-brand" to="/">
								{/* <i className="fe fe-command brand-logo" /> */}
								<img src= {"assets/images/slogo.png"} height="50" width ="50" alt="Company Logo" />
								<img src= {"assets/images/dc_logo.png"} alt="Company Logo" />
								
							</Link>
						</div>
						<div className="card-body">
							<div className="card-title">Login to your account</div>
							{/* <div className="form-group">
								<select className="custom-select">
									<option>HR Dashboard</option>
									<option>Project Dashboard</option>
									<option>Job Portal</option>
								</select>
							</div> */}
							<div className="form-group">
								<input
									type="email"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									placeholder="Enter Emploee Code"
								/>
							</div>
							<div className="form-group">
								
								<input
									type="password"
									className="form-control"
									id="exampleInputPassword1"
									placeholder="Password"
								/>
								<label className="form-label">
									
									<Link className="float-right small" to="/forgotpassword">
										I forgot password
									</Link>
								</label>
							</div>
							<div className="form-group">
								<label className="custom-control custom-checkbox">
									<input type="checkbox" className="custom-control-input" />
									<span className="custom-control-label">Remember me</span>
								</label>
							</div>
							<div className="form-footer">
								<a className="btn btn-primary btn-block" href="/">
									Click to login
								</a>
							</div>
						</div>
						{/* <div className="text-center text-muted">
							Don't have account yet? <Link to="/signup">Sign Up</Link>
						</div> */}
					</div>
				</div>
				<div className="auth_right">
					<div className="carousel slide" data-ride="carousel" data-interval={3000}>
						<div className="carousel-inner">
							<div className="carousel-item active">
								<img src="assets/images/slide1.jpg" className="img-fluid" alt="login page" />
								<div className="px-4 mt-4">
									<h4>Derbe</h4>
									<p>A FinTech Platform , Gateway to Crisis Management .</p>
								</div>
							</div>
							<div className="carousel-item">
								<img src="assets/images/slide2.jpg" className="img-fluid" alt="login page" />
								<div className="px-4 mt-4">
									<h4>Employee to Entrepreneur</h4>
									<p> Transforms an Employee into an Entrepreneur Financial World.</p>
								</div>
							</div>
							<div className="carousel-item">
								<img src="assets/images/slide3.jpg" className="img-fluid" alt="login page" />
								<div className="px-4 mt-4">
									<h4>Start-up  recognized by the DPIIT,ISO 9001:2015 certified </h4>
									<p>Ministry of Commerce & Industry and Ministry of Micro, Small and Medium Enterprises.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
