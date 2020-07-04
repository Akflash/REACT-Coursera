import React, { Component } from 'react';
import {
     Nav, Row, Col, NavItem, 
    Button, Modal, ModalHeader, ModalBody,
     Label
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
class Comment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalOpen: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)

        this.toggleModal = this.toggleModal.bind(this);
        
    }
    handleSubmit(values) {

        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
        // event.preventDefault();
    }


    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        const required = (val) => val && val.length;
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const minLength = (len) => (val) => val && (val.length >= len);
        return (
            <React.Fragment>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button outline color="primary" onClick={this.toggleModal}>Submit Comment</Button>
                    </NavItem>
                </Nav>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                                <Col className="col-12">
                                    <Label htmlFor="rating">Rating</Label>
                                </Col>
                                <Col className="col-12">
                                    <Control.select model=".rating" name="rating"
                                        id="rating" className="form-control" defaultValue="1">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group" md={2}>
                                <Col md={10}>
                                    <Label htmlFor="author">Your Name</Label>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group" md={2}>
                                <Col md={10}>
                                    <Label htmlFor="Comment">Comment</Label>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        className="form-control"
                                        rows="6"
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".comment"
                                        show="touched"
                                        messages={{
                                            required: 'Required',

                                        }}
                                    />
                                </Col>
                            </Row>
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>

        )
    }
}
export default Comment;