import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
  userinfo: "mano"
    };
  }

 async componentDidMount(){
     const response = await fetch("https://api.github.com/users/Manoharan777");
     const data  = await response.json();
     console.log(data);
     this.setState({
          userinfo : data
     })
    
  }
  render() {
       console.log(this.props.userinfo);
   // const { login } = this.state.userinfo;
    return (
      <div className="user-card">
        {/* <h1>Name :{login}</h1> */}
      </div>
    );
  }
}

export default UserClass;
