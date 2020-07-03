import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Comment from './CommentForm';
import { Loading } from './LoadingComponent';



function RenderComments({ comments, addComment, dishId }) {

    const result = comments.map(comment => {
        return (
            <div className="comments-container" key={comment.id}>
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' })
                        .format(new Date(Date.parse(comment.date)))}
                </p>
            </li>
            </div>
            
        )
    })
    return (
        <div className='col-12 col-md-5 m-1'>
            <h4> Comments </h4>
            <ul className='list-unstyled'>
                {result}
            </ul>
            <Comment dishId={dishId} addComment={addComment}/>
        </div>
    )
}

function RenderDish({ dish }) {
    console.log(dish.image)
    return (
       
        <div className='col-12 col-md-5 m-1'>
            <Card>
                <CardImg width="100%" src={`/${dish.image}`}alt={dish.name} />
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
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (dish != null) {

        // console.log(dish.name)
        const dishItem = dish && <RenderDish dish={dish} />
        const commentItem = dish && <RenderComments comments={props.comments}
        addComment={props.addComment}
        dishId={props.dish.id} />
        //console.log(dishItem)
        return (
            <div className="container" key={props.dish.id}>
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {dishItem}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {commentItem}
                    </div>
                </div>
            </div>
        );
    }
}


export default Dishdetail