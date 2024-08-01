const Home = () => {

  const handleClick = () => {
    console.log('Hello Cliff');
  }
  const handleClickAgain = (name) => {
    console.log('Hello ' + name);
  }
    return ( 
       <div className="home">
        <h2>Homepage</h2>
        <button onClick={handleClick}>Click me</button>
        <button onClick={() => handleClickAgain('mario')}>Click me Again</button>
       </div>
     );
}
 
export default Home;