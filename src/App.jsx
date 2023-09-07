import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./Components/MyNav";
import MyFooter from "./Components/MyFooter";
import Welcome from "./Components/Welcome";
import AllTheBooks from "./Components/AllTheBooks";
import SingleBook from "./Components/SingleBook";
import history from "./Assets/history.json";
import BookList from "./Components/BookList";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <BookList arrBooks={history} />
      {/* <SingleBook book={history[1]} /> */}
      {/* <AllTheBooks /> */}
      <MyFooter />
    </div>
  );
}

export default App;
