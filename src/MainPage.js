import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { userAgeState, userBirthState, userDataState } from "./User";

export default function MainPage() {
  const [userData] = useRecoilState(userDataState);
  const userBirth = useRecoilValue(userBirthState);
  const userAge = useRecoilValue(userAgeState);

  if (!userData.id) {
    return (
      <div>
        <h2>Main Page</h2>
        <Link to="/user">Register</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Main Page</h2>
      <h3>Your Information</h3>
      <p>ID: {userData.id}</p>
      <p>Nickname: {userData.nickname}</p>
      <p>Birth: {userBirth}</p>
      <p>Age: {userAge}</p>
      <Link to="/user">Edit</Link>
    </div>
  );
}
