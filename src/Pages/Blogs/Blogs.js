import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [ blogs, setBlogs ] = useState([])
  useEffect(()=>{
    fetch('blog.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
  },[])
  return (
    <Container className="my-5">
      <Row xs={1} md={2} className="g-4">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </Row>
    </Container>
  );
};

export default Blogs;
