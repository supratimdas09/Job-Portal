import React from "react"
import './Login.css'

export default function (props) {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Register In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
            <div className="form-group mt-3">
            <label>Enter Name </label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Name"
            />
          </div>
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            If you have already an account then please click here - <a href="/Login">Click Me?</a>
          </p>
        </div>
      </form>
    </div>
  )
}
