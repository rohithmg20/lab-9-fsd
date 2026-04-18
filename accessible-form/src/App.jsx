

function App() { 
  return (
     <main> 
      <h1>Contact Us</h1>
       <form> 
        <div> 
          <label htmlFor="name">Full Name</label><br /> 
          <input id="name" type="text" /> 
          </div>
          <div> 
            <label htmlFor="email">Email Address</label><br /> 
            <input id="email" type="email" /> 
            </div> 
            <div> 
              <label htmlFor="message">Message</label><br /> 
              <textarea id="message" rows="4"></textarea> 
              </div> 
              <button type="submit">Send</button> 
              </form> 
              </main>
   );
} 
export default App;