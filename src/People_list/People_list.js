import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function people_list (props) {
    let peoples = [...props.peoples];
    let lists = peoples.map( (list) => 
        <ListGroup.Item key={list.key}>
           <Card className="bg-light border rounded">
                <Card.Body className="text-center display-4 " >
                    <Card.Title className='display-4' style={{ fontFamily: 'Times New Roman',fontWeight: "bold"}}>
                    {list.FirstName} {list.LastName}
                    </Card.Title>
                    <Card.Text style={{ fontFamily: 'serif'}}>{list.Birthday}<br />{list.Telephone}</Card.Text>
                </Card.Body>
                    <div className="text-center">
                    <Button key={list.key}
                              className="btn btn-danger"><i class="fa fa-trash"></i> Delete
                    </Button>
                    </div>
            </Card>
        </ListGroup.Item>   
    )
    return lists;
};


export default people_list;