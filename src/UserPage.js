import { useState } from "react";
import { useRecoilState } from "recoil";
import { userDataState } from "./User";

export default function UserPage({ history }) {
  const [userData, setUserData] = useRecoilState(userDataState);
  const [formData, setFormData] = useState(userData);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(formData);
    history.goBack();
  };

  return (
    <div>
      <h2>User Page</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          value={formData.id}
          placeholder="ID"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="nickname"
          value={formData.nickname}
          placeholder="Nickname"
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="birth"
          value={formData.birth}
          onChange={handleInputChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
