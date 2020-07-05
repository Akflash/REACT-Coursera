import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Comment from './CommentForm';
import { Loading } from './LoadingComponent';
import { baseUrl } from './baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';


function RenderComments({ comments, postComment, dishId }) {

    
    if (comments != null)
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    <Stagger in>
                        {comments.map(comment => {
                            return (

                                <div className="comments-container" key={comment.id}>
                                    <Fade in>
                                        <li key={comment.id}>
                                            <p>{comment.comment}</p>
                                            <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' })
                                                    .format(new Date(Date.parse(comment.date)))}
                                            </p>
                                        </li>
                                    </Fade>
                                </div>
                            )
                        })}
                    </Stagger>
                </ul>
                <Comment dishId={dishId} postComment={postComment} />
            </div>
        )
}

function RenderDish({ dish }) {
    console.log(dish.image)
    return (

        <div className='col-12 col-md-5 m-1'>
            <FadeTransform in transformProps={{ exitTransform: 'scale(0.5) translateY(-50%)' }}>
                <Card>
                    <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        </div>
    )

}

const Dishdetail = (props) => {

    const dish = props.dish
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return (
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
            postComment={props.postComment}
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