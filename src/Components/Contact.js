const Contact = () => {
  return (
    <div className="contact">
      <h1 className="font-bold text-3xl p-4 m-4">Contact us</h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="Enter a Name"
        />
        <input 
          type="textarea"
          className="border border-black p-2 m-2"
          placeholder="Type a message"
        />
        <button className="bg-black text-white p-2 m-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
