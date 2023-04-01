import "./App.css";

function App() {
  return (
    <div>
      <header>
        <img
          className="microsoft-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png"
          alt="microsoft logo"
        />
      </header>
      <nav className="green-background">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
      <main>
        <div>
          <img
            className="desert-image"
            src="https://cdn.britannica.com/10/152310-050-5A09D74A/Sand-dunes-Sahara-Morocco-Merzouga.jpg"
            alt="desert"
          />
          <div className="green-background header-text">
            <h3>About</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            nobis aliquam quae natus recusandae, culpa nam nesciunt modi, eum
            laboriosam tenetur! Vitae tempora sint animi optio temporibus?
            Recusandae, distinctio non.
          </p>
        </div>
      </main>
      <footer>
        <div>
          <div className="green-background header-text">
            <h3>Contacts</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto qui
            quisquam voluptatum dicta! Laudantium laborum non ad illo culpa quis
            blanditiis tenetur fugiat rerum explicabo dolores, iure distinctio
            nisi dolore?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
            voluptas aspernatur enim, voluptate in dolor dignissimos ad ab,
            dolorum quia velit ratione aliquid! Fugiat reiciendis assumenda
            sequi, itaque deserunt odit!
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
