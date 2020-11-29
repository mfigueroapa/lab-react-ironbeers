import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllBeers } from '../services/beers';
import { Row, Col, Card, Typography } from 'antd';

const { Title, Text } = Typography;

export default function AllBeers() {
  const [beers, setBeers] = useState(null);

  useEffect(() => {
    async function getBeers() {
      const { data: allBeers } = await getAllBeers();
      setBeers(allBeers);
    }
    getBeers();
  }, []);

  return (
    <div style={{ padding: '1rem 3rem' }}>
      <Title level={1}>Beers</Title>
      <Row gutter={[16, 16]}>
        {beers?.map((beer) => (
          <Col xs={24} sm={24} md={24} key={beer._id}>
            <img
              style={{ width: '90px', padding: '10px' }}
              src={beer.image_url}
              alt=""
            />
            <Card extra={<Link to={`/beer/${beer._id}` }>details</Link>}>
              <p>{beer.name}</p>
              <p>{beer.tagline}</p>
              <p>{beer.contributed_by}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
