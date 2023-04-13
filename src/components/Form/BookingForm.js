import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './BookingForm.css';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


const BookingForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [eventDate, setEventDate] = useState(null);
    const [eventLocation, setEventLocation] = useState('');
    const [budget, setBudget] = useState('');
    const [occasion, setOccasion] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, phone, eventDate, eventLocation, budget, occasion, message });
        // Here you could submit the data to an API or do some other action
    };

    const handlePhoneChange = (value) => {
        setPhoneNumber(value);
    };
    return (
        <form id="booking-form" onSubmit={handleSubmit}>
            <h1>Submit Form
                <h3>Get Best Price</h3>
            </h1>

            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                className="booking-form-input"
            />

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="booking-form-input"
            />

            <label htmlFor="eventDate">Event Date:</label>
            <DatePicker
                id="eventDate"
                selected={eventDate}
                required
                onChange={(date) => setEventDate(date)}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                placeholderText="Select a date"
                className="booking-form-input"
            />

            <label htmlFor="eventLocation">Event Location:</label>
            <input
                type="text"
                required
                id="eventLocation"
                value={eventLocation}
                onChange={(e) => setEventLocation(e.target.value)}
                className="booking-form-input"
            />

            <label htmlFor="budget">Budget:</label>
            <input
                type="number"
                required
                id="budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="booking-form-input"
            />

            <label htmlFor="occasion">Occasion:</label>
            <select id="occasion" value={occasion} required onChange={(e) => setOccasion(e.target.value)} className="booking-form-input">
                <option value="">Select an occasion</option>
                <option value="Wedding">Wedding</option>
                <option value="Corporate event">Corporate event</option>
                <option value="Birthday party">Birthday party</option>
                <option value="Other">Other</option>
            </select>


            <label htmlFor="phone">Phone:</label>
            <PhoneInput
                className="react-tel-input"
                country={'us'}
                value={phoneNumber}
                onChange={handlePhoneChange}
                inputProps={{
                    name: 'phone',
                    required: true,
                    autoFocus: true,
                }}
            />

            <label htmlFor="message">Message:</label>
            <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="booking-form-input booking-form-textarea"
            ></textarea>

            <button type="submit" className="booking-form-submit-button">Book Artist</button>
        </form>
    );
};

export default BookingForm;
