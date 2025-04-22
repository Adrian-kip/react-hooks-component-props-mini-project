import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  const blogData = {
    name: "Underreacted",
    image: "data:image/png;base64,...",
    about: "A blog about learning React",
    posts: [
      {
        id: 1,
        title: "Components 101",
        date: "December 15, 2020",
        preview: "Setting up the building blocks of your site",
        minutes: 5
      },
    ]
  };

  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;