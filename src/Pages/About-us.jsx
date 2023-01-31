import React from 'react';
import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <Card>
          <h2>This the about page</h2>
          <Link to={{
               pathname:"/"
          }}>Return to home</Link>
    </Card>
  )
}

export default AboutUs;