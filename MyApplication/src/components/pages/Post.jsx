import React, { useEffect, useState } from 'react';

const API = "https://jsonplaceholder.typicode.com/posts";

const Post = () => {
  const [userPost, setUSerPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  async function fetchUserPost() {
    setLoading(true);
    try {
      const res = await fetch(API);
      const json = await res.json();
      setUSerPost(json.slice(0, 20));
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUserPost();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error while fetching data from API.</h1>;
  if (!userPost.length) return <h1>Data not found!</h1>;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Level 1 Question</h1>
      {userPost.map((post) => (
        <div key={post.id} style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '10px' }}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <button
            onClick={() => setSelectedPost(post)}
            style={{ padding: '5px 10px', cursor: 'pointer' }}
          >
            View Details
          </button>
        </div>
      ))}


      {selectedPost && (
        <div style={{ marginTop: '30px', padding: '20px', border: '2px solid #000', backgroundColor: '#f9f9f9' }}>
          <h2>Post Details</h2>
          <h3>{selectedPost.title}</h3>
          <p>{selectedPost.body}</p>
          <button
            onClick={() => setSelectedPost(null)}
            style={{ marginTop: '10px', padding: '5px 10px', cursor: 'pointer' }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Post;
