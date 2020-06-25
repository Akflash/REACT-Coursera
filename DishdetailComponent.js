import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';



    function RenderComments({comments}) {
        
        const result = comments.map(comment => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'})
                    .format(new Date(Date.parse(comment.date)))}
                    </p>
                </li>
            )
        })
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {result}
                </ul>

            </div>
        )
    }

   function RenderDish({dish}) {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
       
    }

    const Dishdetail = (props) => {
        const dish = props.dish

      // console.log(dish.name)
        const dishItem = dish && <RenderDish dish={dish} />
        const commentItem = dish && <RenderComments comments={dish.comments} />
        //console.log(dishItem)
        return (
            <div className='row'>
                {dishItem}
                {commentItem}
               
               
                
            </div>
        )
    }


export default Dishdetail