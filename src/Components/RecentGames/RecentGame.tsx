import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './RecentGame.css';
import img1 from '../../assets/recent-game/1.jpg';
import img2 from '../../assets/recent-game/2.jpg';
import recentImg from '../../assets/recent-game-bg.png'

const RecentGame = () => {
    return (
        <section className="recent-game-section spad set-bg"
           >
		<Container>
			<div className="section-title">
				<div className="cata new">new</div>
				<h2>Recent Games</h2>
			</div>
			<Row>
				<Col lg={4} md={6} >
					<div className="recent-game-item">
						<img className="rgi-thumb set-bg" src={img1} alt=""/>
											
						<div className="rgi-content">
							<h5>Suspendisse ut justo tem por, rutrum</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit amet, consectetur elit. </p>
							<Link to="#" className="comment">3 Comments</Link>
							<div className="rgi-extra">
                                    <div className="rgi-star">
                                        <img src="img/icons/star.png" alt="" /></div>
                                    <div className="rgi-heart">
                                        <img src="" alt="" /></div>
							</div>
						</div>
					</div>	
				</Col>
					<Col lg={4} md={6} >
					<div className="recent-game-item">
						<img className="rgi-thumb set-bg" src={img2} alt=""/>
											
						<div className="rgi-content">
							<h5>Suspendisse ut justo tem por, rutrum</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit amet, consectetur elit. </p>
							<Link to="#" className="comment">3 Comments</Link>
							<div className="rgi-extra">
                                    <div className="rgi-star">
                                        <img src="img/icons/star.png" alt="" /></div>
                                    <div className="rgi-heart">
                                        <img src="" alt="" /></div>
							</div>
						</div>
					</div>	
				</Col>
					<Col lg={4} md={6} >
					<div className="recent-game-item">
						<img className="rgi-thumb set-bg" src={img1} alt=""/>
											
						<div className="rgi-content">
							<h5>Suspendisse ut justo tem por, rutrum</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit amet, consectetur elit. </p>
							<Link to="#" className="comment">3 Comments</Link>
							<div className="rgi-extra">
                                    <div className="rgi-star">
                                        <img src="img/icons/star.png" alt="" /></div>
                                    <div className="rgi-heart">
                                        <img src="" alt="" /></div>
							</div>
						</div>
					</div>	
				</Col>
			</Row>
		</Container>
	</section>
    );
};

export default RecentGame;