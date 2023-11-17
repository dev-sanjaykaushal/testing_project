import React from 'react'
import "../../style.css/AfterLogin/permission.css"


const Permissons = () => {
  return (
    <>
     
      <div className="main_box">
        <div className="mainwrapper">          
          <div className="row">
            <div className="col-lg-12">
              <div className="Dash_block div_add">
                <div className="contents1 d-flex justify-content-between align-items-start">
                  <h4>Roles & Permissions</h4>                  
                </div> 
                <div className="permission mt-2">
                    <table className='tabless '>
                        <thead>
                            <tr>
                                <th>Role</th>
                                <th>Role Description</th>
                                <th>Users</th>
                            </tr>
                        </thead>
                        <tbody className='tbody1'>
                            <tr>
                                <th>Account Owner</th>
                                <th>Unrestricted Access To All Features, Settings, And Members</th>
                                <th>1</th>
                            </tr>
                            <tr className='middle_tr'>
                                <th>Manager Limited</th>
                                <th>Can Access Any Member On Their Own Team</th>
                                <th>1</th>
                            </tr>
                            <tr>
                                <th>Member</th>
                                <th>Cannot Access Any Other Member</th>
                                <th>1</th>
                            </tr>
                        </tbody>
                    </table>
                </div>              
                           
              </div>
            </div>
          </div>         
        </div>
      </div>
    </>
  )
}

export default Permissons
