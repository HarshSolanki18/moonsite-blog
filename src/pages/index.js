import React from 'react';
import Layout from '../components/layout';


import PostPreview from '../components/post-preview';

export default () => {
  return (
    <>
      
      <Layout>
        <h2>Read my blog</h2>
        <PostPreview />
      
      </Layout>
    </>
  );
};