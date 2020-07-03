import React from 'react';
import { Link ,graphql,useStaticQuery} from 'gatsby';
import styles from "./header.module.scss";
import Img from "gatsby-image";





const Header = () =>{ 
  const {image}=useStaticQuery(graphql`
    query{
     image: file(relativePath: {eq: "moonsite-image.jpg"}){
       sharp: childImageSharp{
         fixed(width:40,height:40){
           ...GatsbyImageSharpFixed
         }
       }
     } 
    }
  `)
return(
  <header>
    <h1>
    <Link to="/"   activeClassName={styles.activeNav}>
      <Img alt="" fixed={image.sharp.fixed}  className={styles.avatar}/>
      Moonsite Blogs
    </Link>
    </h1>
    <nav>
      <ul className={styles.mainNav}>
      <li>
      <Link to="/" activeClassName={styles.activeNav}>
        Home
      </Link>  
      </li>
      <li>
      <Link to="/about/" activeClassName={styles.activeNav}>
        About
      </Link>
      </li>  
      <li>
      <Link to="/contact/" activeClassName={styles.activeNav}>
        Contact
      </Link> 
       
      </li>
           
      </ul>
    </nav>
  </header>
);
}

export default Header;