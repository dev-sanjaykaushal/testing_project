import React, { useState } from "react";
import "../../style.css/AfterLogin/TeamDashboard.css";
import { Link } from "react-router-dom";
import { HiPlus } from "react-icons/hi";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';

const TeamDashboard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="main_box">
        <div className="mainwrapper">
          <div className="row">
            <div className="col-lg-12">
              <div className="Dash_block div_add">
                <div className="contents1 d-flex justify-content-between align-items-start">
                  <h4>Create Team</h4>
                  <Link onClick={handleShow} className="btn small_btn" >
                    <HiPlus /> Create Team
                  </Link>
                </div>
                <div className="row mb-5">
                  <div className="col-md-8">
                    <label className="mt-3" htmlFor="select">
                      Select Team
                    </label>
                    <select className="formSelect"></select>
                  </div>
                </div>
                <hr />
                <div className="contents1 d-flex justify-content-between align-items-start">
                  <h4>Your Team Members</h4>
                </div>
                <hr />
              </div>
            </div>           

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add Team</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Team Name</Form.Label>
                    <Form.Control
                      type="name"
                      placeholder="Enter Team Name"
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Email address (test@example.com,test@example.com)</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamDashboard;
