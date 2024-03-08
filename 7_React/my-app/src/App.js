import CustomHeader from "./components/CustomHeader";

// the name of react Component should start with Upper Case Letter
// while Html elements and SVG start with lower case letter
const App = () => {
  let isLoggedIn = false;
  // this not html this JSX
  return (
    <div style={{backgroundColor: isLoggedIn ? "grey" : "Yellow"}}>
      <CustomHeader />
      <p className="subtitle">
        {isLoggedIn ? "Welcome Back!" : "please sign in"}
      </p>

      {/* if the user not logged in show sign in button */}
      {!isLoggedIn && <button>SIGN IN</button>}
    </div>
  );
};

export default App;
