import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Feature.css";
import FeatureCard from "./FeatureCard";
import Data from "../../api";

import './Feature.css';

const Feature = () => {
const games = Data
  console.log('games', games)

  return (
    <div className="feature-section spad">
      <Container>
        <Row>
          {
            games && games.map((game) => (
              <FeatureCard
                key={game.id}
                id={game.id}
                img={game.img}
                title={game.title}
                description={game.description}
                genre={game.genre} />))
          }
         </Row>
      </Container>
    </div>
  );
};

export default Feature;
