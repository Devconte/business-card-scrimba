import "./List.css";

function List() {
  return (
    <div className="container">
      <h1>Fun facts about React</h1>
      <ul className="list">
        <li>Was first released in 2013</li>
        <li>Is maintained by Facebook</li>
        <li>Allows you to create reusable UI components</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Powers thousands of enterprise apps including mobile apps</li>
      </ul>
    </div>
  );
}

export default List;
