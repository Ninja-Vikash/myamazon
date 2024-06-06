const newUser = document.getElementById("newUser");

function NewUser() {
  return (
    <div className="newcustomer">
      <div>See personalized recommendations</div>
      <button>Sign in</button>
      <p>
        New customer? <a href="">Start here.</a>
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(newUser).render(<NewUser />);
