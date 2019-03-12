import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';


function people_list (props) {
    let peoples = [...props.peoples];
    let lists = peoples.map( (list) =>
        <ListGroup.Item key={list.key}>
           <Card className="bg-light border rounded">
           <span key={list.key}
                className="text-right"
                onClick={props.closer.bind(null,list.key)}>{'\u274e'}</span>
           <Card.Body className="text-left">
       
           <Card.Title>{list.FirstName} {list.LastName}</Card.Title>
                <Card.Text>{list.Birthday}<br />{list.Telephone}</Card.Text>
                </Card.Body>
            </Card>
        </ListGroup.Item>
        
    )
    return lists;
};


export default people_list;