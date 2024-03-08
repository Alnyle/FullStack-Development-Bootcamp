import CustomHeader from "./components/CustomHeader";
import List from "./components/List";

// the name of react Component should start with Upper Case Letter
// while Html elements and SVG start with lower case letter
const App = () => {
  const title = "My App";
  const listTitle = "Shopping list";
  let isLoggedIn = false;
  const listData = {
    title: "Skill set",
    listItems: ["HTML Knowledge", "CSS proficiency", "JavaScript wizz"],
  }
  // this not html this JSX
  return (
    <div style={{ backgroundColor: isLoggedIn ? "grey" : "Yellow" }}>
      <CustomHeader title={title} color={"purple"} />
      <CustomHeader title={"Tracker App"} color={"orange"} />
      <CustomHeader title={"Travel App"} color={"cyan"} />
      <p className="subtitle">
        {isLoggedIn ? "Welcome Back!" : "please sign in"}
      </p>

      {/* if the user not logged in show sign in button */}
      {!isLoggedIn && <button>SIGN IN</button>}
      {/* <List title={'shopping list'}/> */}
      <List listData={listData}/>
    </div>
  );
};

export default App;
