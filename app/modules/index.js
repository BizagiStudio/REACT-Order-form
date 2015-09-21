import React from 'react';
import ServiceChooser from './orderForm/components/ServiceChooserComponent';
import '../assets/styles/sass/styles.scss';

let services = [
    { name: 'Web Development', price: 300 },
    { name: 'Design', price: 400 },
    { name: 'Integration', price: 250 },
    { name: 'Training', price: 220 }
];

React.render(
    <ServiceChooser items={ services } />,
    document.getElementById("react")
);