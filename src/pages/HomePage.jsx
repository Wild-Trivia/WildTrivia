import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/quiz">Quiz</Link>
      </nav>
      <main>This is a placeholder.</main>
    </>
  );
}

export default HomePage;
