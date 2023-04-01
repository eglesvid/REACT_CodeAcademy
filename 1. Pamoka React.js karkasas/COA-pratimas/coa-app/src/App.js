import "./App.css";

function App() {
  return (
    <div className="the-whole-block">
      <header>
        <div className="header-logo-block">
          <img
            src="https://img.freepik.com/free-vector/flat-design-go-logo-template_23-2148973728.jpg?w=2000"
            alt="site logo"
          />
        </div>
        <div className="header-nav-block">
          <a href="#">Home</a>
          <a href="#">Product</a>
          <a href="#">Company</a>
          <a href="#">Contact</a>
        </div>
        <br />
        <div className="header-image-block">
          <img
            className="header-image"
            src="https://htmlcolorcodes.com/assets/images/colors/pastel-green-color-solid-background-1920x1080.png"
            alt="header image"
          />
          <h3 className="header-image-text">Header Image</h3>
        </div>
      </header>
      <br />
      <div className="about-blocks">
        <div className="box">
          <div className="info-box">
            <h3 className="about-heading">About</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque beatae ad dolorem est
              temporibus consequuntur quo quibusdam? Ex, asperiores repellendus!
            </p>
          </div>
        </div>
        <div className="box">
          <div className="info-box">
            <h3 className="about-heading">Company</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque beatae ad dolorem est
              temporibus consequuntur quo quibusdam? Ex, asperiores repellendus!
            </p>
          </div>
        </div>
        <div className="box">
          <div className="info-box">
            <h3 className="about-heading">Services</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque beatae ad dolorem est
              temporibus consequuntur quo quibusdam? Ex, asperiores repellendus!
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="last-block">
        <div className="left-block">
          <div className="content-block">
            <div className="info-div">
              <h3 className="content-header">Content</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus accusamus a odio
                ducimus veniam, tenetur odit quam porro labore similique quia nihil nostrum ad
                pariatur eos atque, aspernatur corrupti libero.
              </p>
            </div>
          </div>
          <div className="sub-header-block">
            <div className="sub-header-info-div">
              <h4 className="subheader-header">Sub Header</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, architecto
                expedita placeat tempore eaque voluptatibus dolor deserunt vero at omnis libero,
                ipsam fugit laudantium numquam sit in ipsum vel alias quidem beatae non laboriosam
                reiciendis. Odio ab officiis modi saepe molestiae consequuntur, exercitationem
                facilis aperiam placeat, voluptates adipisci, tenetur iure?
              </p>
            </div>
          </div>
        </div>
        <div className="right-block">
          <div className="navigation-block">
            <h4 className="navigation-header">Navigation</h4>
            <div className="navigation">
              <a href="#">Home</a>
              <a href="#">Product</a>
              <a href="#">Company</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
