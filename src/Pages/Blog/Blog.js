import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Blog = ({blog}) => {
    const {name, text, img} = blog;
    return (
        <Col>
            <Card className='h-100'>
                <Card.Img variant='top' src={img} />
                <Card.Body>
                    <Card.Title className='fs-4'>{name}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Blog;