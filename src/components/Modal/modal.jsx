import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function XModal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    phone: '',
    dob: ''
  });

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, phone, dob } = formValues;

    if (!username) {
      alert('Please fill out the Username field');
      return;
    }

    if (!email.includes('@')) {
      alert('Invalid email. Please check your email address.');
      return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      return;
    }

    const selectedDate = new Date(dob);
    const currentDate = new Date();
    if (selectedDate > currentDate) {
      alert('Invalid date of birth. Date of birth cannot be in the future.');
      return;
    }

    closeModal();
  };

  return (
    <div className="initial-render">
      <h1>User Details Modal</h1>
      <button className="submit-button" onClick={openModal}>
        Open Form
      </button>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        contentLabel="User Details Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal-content">
          <h2>Fill Details</h2>
          <form onSubmit={handleSubmit} className="form">
            <label>
              Username:
              <input
                type="text"
                id="username"
                name="username"
                value={formValues.username}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Email Address:
              <input
                type="email"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Phone Number:
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Date of Birth:
              <input
                type="date"
                id="dob"
                name="dob"
                value={formValues.dob}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default XModal;
