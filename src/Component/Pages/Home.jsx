import React, { useState } from 'react';
import "./Home.css";

export default function Home() {
  const [formData, setFormData] = useState({
    yourname: '', // Added 'yourname' for the user's name
    showTiming: '12:00 P.M.',
    category: 'Gold', 
    date:"3/Nov/2023",
    numberOfTickets: 0,
  });
console.log(formData)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  let totalPrice = 0;
  switch (formData.category) {
    case 'Platinum':
      totalPrice = 250 * formData.numberOfTickets;
      break;
    case 'Gold':
      totalPrice = 200 * formData.numberOfTickets;
      break;
    case 'Loung':
      totalPrice = 230 * formData.numberOfTickets;
      break;
    default:
      totalPrice = 0;
  }
  const handleSubmitBook = (e) => {
    e.preventDefault();
    
    // Calculate total price based on selected category and number of tickets
    let totalPrice = 0;
    switch (formData.category) {
      case 'Platinum':
        totalPrice = 250 * formData.numberOfTickets;
        break;
      case 'Gold':
        totalPrice = 200 * formData.numberOfTickets;
        break;
      case 'Loung':
        totalPrice = 230 * formData.numberOfTickets;
        break;
      default:
        totalPrice = 0;
    }

    // Prepare the message based on the form data including total price
    const message = `%0aYour Name: ${formData.yourname} %0aDate: ${formData.date} %0aNumber of Tickets: ${formData.numberOfTickets} %0aCategory: ${formData.category} %0aTotal Price: ₹${totalPrice}`;

    // WhatsApp URL including the phone number and message
    const whatsappUrl = `https://wa.me/+917479475733?text=${message}`;

    // Redirect the user to the WhatsApp URL
    window.location.href = whatsappUrl;
  };
  return (
    <div>
    <div className='home'>
      <div className="nav">
        <h1>Book Your Show Now and Grab Your Seat</h1>
      </div>
      <div className="text1">
        <h1>"Manjhi The Bharat Ratna"</h1>
      </div>
      <div className="text">
        <h3>"Be part of the thrilling premiere! Book now for an exhilarating movie experience and secure your front-row seat!"</h3>
      </div>
      <div className="text">
      <a href='https://www.youtube.com/watch?v=fFoNuX-Diuo'><h2>Watch Trailer Now Click On !!</h2></a>

      </div>
      

      <div className="movieform">
        <img src="https://www.cntvbihar.in/news_file/932883170IMG-20231030-WA0003.jpg" alt="error" />

        <div className='form'>
          <form>
            <label>
              Your Name:
              <input type="text" name="yourname" value={formData.yourname} onChange={handleChange} />
            </label>
           
           
            <label className='price'>
              Select show Date:
              <select className='categorySelect' name="date" value={formData.date} onChange={handleChange}>
                <option value="3/Nov/2023">3/Nov/2023</option>
                <option value="4/Nov/2023">4/Nov/2023</option>
                
              </select>
            </label>

            <label>
              Show Timing:
              <input type="text" name="showTiming" value={formData.showTiming} readOnly />
            </label>

            <label className='price'>
              Price:
              <select className='categorySelect' name="category" value={formData.category} onChange={handleChange}>
               
                <option value="Gold">Gold ₹200</option>
                <option value="Platinum">Platinum ₹250</option>
                <option value="Loung">Loungers ₹230</option>
              </select>
            </label>

            <label>
              No. Of Tickets:
              <input
                type="number"
                name="numberOfTickets"
                value={formData.numberOfTickets}
                onChange={handleChange}
              />
            </label>
            <label>Total amount :  ₹ {totalPrice}</label>
            <button onClick={handleSubmitBook}>Book</button>
          </form>
        
        </div>
      </div>

     
    </div>
    
    </div>
  );
}



