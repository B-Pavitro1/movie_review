import logo from './logo.png'
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Session from '../session/session';
function MyLinks() {
	const nav = useNavigate();
	function logout() {
		Session.setrole(false);
		sessionStorage.setItem("key", null);
		nav('/');
	}


	var session = sessionStorage.getItem("key");
	//alert(Session.getrole()==0)
	if (Session.getrole() == false && session == 'null' || session == null) {

		return (
			<>
				<div class="nav-header">
				<li class="menu-item ">  <Link to="/"> Home</Link></li>
				<li class="menu-item"><Link to="/Login">Login</Link></li>
				<li class="menu-item ">  <Link to="/TopMovies"> Top 10 Movies</Link></li>
				<li class="menu-item"><Link to="/SignUp">Sign Up</Link></li>
				</div>

			</>)
	}
	else if (Session.getrole() == 0 && session != 'null') {
		return (
			<>
			<div class="nav-header">
				<li class="menu-item ">  <Link to="/"> Home</Link></li>
				<li class="menu-item ">  <Link to="/TopMovies"> Top 10 Movies</Link></li>
				<li class="menu-item"><Link to="/Watchlist">Watch List</Link></li>
				<li class="menu-item">
					<input type="button"
						class="text-centre mybtn"
						name="submit"
						value="Logout"
						onClick={() => logout()} />

				</li>
				</div>


			</>)
	}
	else if (Session.getrole() == 1 && session != 'null') {
		return (
			<>
			<div class="nav-header">
				<li class="menu-item "> <span>  |</span>  Welcome Admin</li>
				<li class="menu-item ">  <Link to="/"> Home</Link></li>
				<li class="menu-item"><Link to="/AddMovie">Add Movies</Link></li>
				<li class="menu-item"><Link to="/AdminReview">Reviews</Link></li>
				<li class="menu-item"><Link to="/Users">Users</Link></li>
				<li class="menu-item ">  <Link to="/TopMovies"> Top 10 Movies</Link></li>
				<li class="menu-item">
					<input type="button"
						class="text-centre mybtn"
						name="submit"
						value="Logout"
						onClick={() => logout()} />

				</li>
				</div>


			</>)
	}
	else if (Session.getrole() == 2 && session != 'null') {
		return (
			<>
			<div class="nav-header">
				<li class="menu-item "> <span>  |</span> Welcome Critic</li>
				<li class="menu-item ">  <Link to="/"> Home</Link></li>
				<li class="menu-item ">  <Link to="/TopMovies"> Top 10 Movies</Link></li>
				<li class="menu-item"><Link to="/Watchlist">Watch List</Link></li>
				<li class="menu-item">
					<input type="button"
						class="text-centre mybtn"
						name="submit"
						value="Logout"
						onClick={() => logout()} />

				</li>
			</div>


			</>)
	}

}

function Header() {

	return (
		<>
			<div id="site-content">
				<div class="site-header">
					<div class="container">
						<a id="branding">
							<img src={logo} alt="" class="logo" />
							<div class="logo-copy">
								<h1 class="site-title">MOVIE-REVIEW-APP.com</h1 >
								<small class="site-description">Find the accurate review</small>
							</div>
						</a>
						<div class="main-navigation">
							<button type="button" class="menu-toggle"><i class="fa fa-bars"></i></button>
							<ul class="menu">
								<MyLinks />
							</ul>

							

							<div class="mobile-navigation"></div>
						</div>
					</div>
				</div>
			</div>
			<Outlet />
		</>
	)


}


export default Header;