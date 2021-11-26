export default function CustomerInformationChild(props) {
  const logout = props.logout;
  const user = props.user;


  return (
    <div>
      <p className="UserInfo">
        <div>You are logged in</div>
        <div>Email: {user.email}</div>
        <div>Name: {user.name}</div>
        <div>UserId: {user.id}</div>
      </p >
      <p>
        <button type="button" onClick={logout}>Logout</button>
      </p>

      <Counter />
    </div>
  );
};