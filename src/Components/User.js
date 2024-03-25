const User = ({ git }) => {
  return (
    <div className="user-card">
      <h1>
        Name : {git[0].owner.login} - ID : {git[0].owner.id}
      </h1>
       <span>Repo's</span>
      {
        git.map((rep)=> (
            <h3 style={{color:"red"}} key= {rep.id}>{rep.name}</h3>
        ))
      }

    </div>
  );
};
export default User;
