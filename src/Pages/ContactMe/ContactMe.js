import "./ContactMe.css";

export default function ContactMe() {
  return (
    <>
      <form>
        <div className="containerContactMe">
          <h3>{"Leave a Comment "}</h3>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            First Name
          </label>
          <input
            type="firstName"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="John"
            required
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Last Name
          </label>
          <input
            type="lastName"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Doe"
            required
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            required
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Leave a Comment
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Leave a Message!"
            rows="3"
          ></textarea>
          <button>Submit</button>
        </div>
      </form>
      <p>Phone: (303) 907-0825</p>
      <p>Email: jordan.laczkowski23@gmail.com</p>
    </>
  );
}
