import React from 'react'
import { Link } from 'react-router-dom'

const MainPage = ({ match }) => (
  <div>
    <h3>ID: {match.url}</h3>
    <Link to="/">Home</Link>
  </div>
);

export default MainPage
