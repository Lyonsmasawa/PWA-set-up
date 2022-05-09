import React from 'react';
import './style.css';

function App() {
  return (
    <div className="App">
      <section>
        <form onSubmit={() => this.handleSubmit()}>
          <label>
            <span>name</span>
            <input
              type="text"
              defaultValue=""
              placeholder="name"
              required
            />
          </label>
          <label>
            <span>email</span>
            <input
              type="email"
              defaultValue=""
              placeholder="@email"
              required
            />
          </label>
          <label>
            <span>password</span>
            <input type="password" 
            // ref="password" 
            defaultValue="" required />
          </label>
          <button>submit</button>
        </form>
      </section>

    </div>
  );
}

export default App;
