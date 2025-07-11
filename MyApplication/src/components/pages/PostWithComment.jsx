import React, { useEffect, useState } from 'react';

const API = "https://jsonplaceholder.typicode.com/posts"
const API_User = "'https://jsonplaceholder.typicode.com/users"

const PostWithComment = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUSerPost] = useState([]);
  const [comments, setComments] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);
    const [loading, setLoading] = useState(false)
    const[error, setError] = useState(null)

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

   async function fetchUser() {
    setLoading(true);
    try {
      const res = await fetch(API_User);
      const json = await res.json();
      setPosts(json);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    fetchUserPost()
    fetchUser()
  }, []);

  const showComments = (postId) => {
    setSelectedPostId(postId);
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(res => res.json())
      .then(data => setComments(data));
  };
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error while fetching data from API.</h1>;
  if (!users.length) return <h1>User not found!</h1>;
  if(!posts.length) return <h1>Post not found1</h1>

  return (
    <div style={{ padding: 20 }}>
      <h1>Blog Posts</h1>
      {posts.map(post => {
        const user = users.find(u => u.id === post.userId);
        return (
          <div key={post.id} style={{ border: '1px solid #ccc', padding: 10, marginBottom: 20 }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            {user && (
              <>
                <p><strong>User:</strong> {user.name}</p>
                <p><strong>Emaill:</strong> {user.email}</p>
              </>
            )}
            <button onClick={() => showComments(post.id)}>Show Comments</button>

            {selectedPostId === post.id && (
              <div style={{ marginTop: 10 }}>
                <h4>Comments:</h4>
                {comments.map(comment => (
                  <div key={comment.id} style={{ borderTop: '1px solid #eee', marginTop: 5 }}>
                    <p><strong>{comment.name}</strong> - {comment.email}</p>
                    <p>{comment.body}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PostWithComment;

