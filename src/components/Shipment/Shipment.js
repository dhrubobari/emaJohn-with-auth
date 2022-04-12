import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const handleNameBlur = event => {
        setName(event.target.value);
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }
    const handlePhoneNumber = event => {
        setPhone(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = {name, email, address, phone};
        console.log(shipping);
    }

    return (
        <div className="form-container">
        <div>
          <h2 className="form-title">Shipping Information</h2>
          <form onSubmit={handleCreateUser}>
            <div className="input-group">
              <label htmlFor="email">Your Name</label>
              <input onBlur={handleNameBlur} type="text" name="name" required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Your Email</label>
              <input value={user?.email} readOnly onBlur={handleEmailBlur} type="email" name="email" required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Address</label>
              <input onBlur={handleAddressBlur} type="text" name="address" required />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Phone Number</label>
              <input onBlur={handlePhoneNumber} type="text" name="phone" required />
            </div>
            <input className="form-submit" type="submit" value="Add Shipping" />
          </form>
          <p>
            Already have an account?
            <Link className="form-link" to="/login"> Login</Link>
          </p>
        </div>
      </div>
    );
};

export default Shipment;