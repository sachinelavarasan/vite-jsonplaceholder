/* eslint-disable react/prop-types */
import { useContext } from "react";
import { DetailText } from "./component/detailText";
import "./style.scss";
import { UsersContext } from "../../reducer";

const Profile = () => {
  const { selectedUser } = useContext(UsersContext);
  return (
    <div className="profile-container">
      <div className="content">
        <div className="left">
          <img
            src={selectedUser?.profilepicture}
            alt={selectedUser?.username}
            className="profile-big"
          />
          <p className="mb-2 ms-2">{selectedUser?.name}</p>
          <DetailText label="Username" data={selectedUser?.username} />
          <DetailText label="e-mail" data={selectedUser?.email} />
          <DetailText label="Phone" data={selectedUser?.phone} />
          <DetailText label="Website" data={selectedUser?.website} />
          <div className="divider" />
          <p className="mb-2 title">Company</p>
          <DetailText label="Name" data={selectedUser?.company.name} />
          <DetailText
            label="catchphrase"
            data={selectedUser?.company.catchPhrase}
          />
          <DetailText label="bs" data={selectedUser?.company.bs} />
        </div>
        <div className="right">
          <p className="mb-2 title">Address:</p>
          <DetailText label="Street" data={selectedUser?.address.street} />
          <DetailText label="Suite" data={selectedUser?.address.suite} />
          <DetailText label="City" data={selectedUser?.address.city} />
          <DetailText label="Zipcode" data={selectedUser?.address.zipcode} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
