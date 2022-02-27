import {useState, useEffect} from 'react';
import { Col } from 'react-bootstrap';
//import  Data from "../../api";
import './Feature.css';

// props
type FeatureProps = {
   id: number;
    img: string;
    title: string;
    description: string;
    genre: string;
}

const FeatureCard = ({img, title, description} : FeatureProps) => {

    return (
      <Col lg={3} md={6} className="p-0">
        <img src={img} alt="" className="feature-item set-bg" />
            <div className="fi-content text-white">
                <h5>{title}</h5>
          <p>{description}</p>
        </div>
      </Col>
    );
};

export default FeatureCard;