import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const Contact = () => (
  <Layout>
    <h1>Contact Me</h1>
    <p>This is my personal website.</p>
    <Link to="/">&larr; back to home</Link>
  </Layout>
);

export default Contact;