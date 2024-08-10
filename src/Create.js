import { useState } from "react";

const Create = () => {
const[title, setTitle] = useState('');
const[body, setBody] = useState('');
const [author, setAuthor] = useState('');
const [isPending, setIspending] = useState(false)

const handleSubmit = (e) => {
  e.prevent.Default();
  const blog = {title, body, author};

  setIspending(true)

  fetch('http://localhost:2485/blogs', {
    method: 'POST',
    headers: {"Content-Type": "appication/json"}, 
    body: JSON.stringify(blog)
  }).then(() => {
    console.log("new blog added");
    setIspending(false)
  })
}

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input type="text" required value={title}
        onChange = {(e) => setTitle(e.target.value)}/>

        <label>Blog body:</label>
        <textarea required value={body}
          onChange= {(e) => setBody(e.target.value)}>
          </textarea>

        <label>Blog author: </label>
        <select value="author"
        onChange= {(e) => setAuthor(e.target.value)}>
          <option value="mario" ></option>
          <option value="yoshi"></option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {!isPending && <button disabled>Adding Blog ...</button>}
      </form>
    </div>
  );
};

export default Create;
