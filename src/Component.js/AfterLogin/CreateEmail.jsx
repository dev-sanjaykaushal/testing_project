import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiPlus } from "react-icons/hi";
import "../../style.css/AfterLogin/createEmail.css";
import Form from "react-bootstrap/Form";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";

const CreateEmail = ({collapsed}) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };
  return (
    <>
      <div className={`app sidebarstyle ${collapsed ? 'maxwidth_content':'main_box'}`}>
        <div className="mainwrapper">
          <div className="head45 ">
            <h2>All Trips</h2>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="Dash_block div_add">
                <div className="contents1 d-flex justify-content-between align-items-start">
                  <h4> Trip list </h4>
                  <Link className="btn small_btn" to={"/emailtamlets"}>
                    <HiPlus /> Create Template List
                  </Link>
                </div>
                <div className="row mb-5">
                  <div>
                    <label className="mt-3" htmlFor="select">
                      Template Name
                    </label>
                    <select className="formSelect formWidth">
                      <option value="#">Select Tamplate</option>
                      <option value="#">Forgot Password</option>
                      <option value="#">Invite Email</option>
                      <option value="#">Attendance Approve Request</option>
                      <option value="#">Attendance Approval Response</option>
                      <option value="#">Trip Approve Request</option>
                    </select>
                  </div>

                  <div className="name_group form_group mt-3">
                    <label htmlFor="">Subject</label>
                    <Form.Control type="text" placeholder="Email Subject" />
                  </div>
                  <div className="content_editor">
                    <label htmlFor="Content" className="mb-3">Content</label>
                    <Editor
                      editorState={editorState}
                      wrapperClassName="demo-wrapper"
                      editorClassName="demo-editor"
                      onEditorStateChange={onEditorStateChange}
                    />
                  </div>
                </div>
                <div className="AddTamp">
                  <Link className="btn small_btn">
                     Add Template 
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateEmail;
