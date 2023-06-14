import React from 'react';
import './services.css';


const services = [
  { id: 1, name: 'Service 1' },
  { id: 2, name: 'Service 2' },
  { id: 3, name: 'Service 3' },
  // Add more services as needed
];

const ServiceContainer = ({ service }) => (
  <div className="service-container">
    <h2>{service.name}</h2>
    <button>Book Now</button>
  </div>
);

const App = () => (
  <div className="app-container">
    <h1 className="app-heading">Services</h1>
    <div className="services">
      {services.map((service) => (
        <ServiceContainer key={service.id} service={service} />
      ))}
    </div>
  </div>

  
);

export default App;
