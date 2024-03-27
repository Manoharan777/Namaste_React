const User = ({ git }) => {
  return (
    <div className="user-card m-10 p-5 bg-violet-700 rounded-lg">
      <h1 className="font-extrabold text-center text-2xl">
        Name : {git[0].owner.login} - ID : {git[0].owner.id}
      </h1>
      <span className="py-2 text-white underline font-semibold">Repo's</span>
      {git.map((rep) => (
        <h3 className="text-white list-decimal ml-4" key={rep.id}>
          {rep.name}
        </h3>
      ))}
    </div>
  );
};
export default User;
