import React from "react";
import Header from "../components/Common/Header";
import { useAuth0 } from "@auth0/auth0-react";

const ProfilePage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <Header />
      {isAuthenticated ? (
        <div className="Profile">
          <img src={user.picture} alt={user.name} />
          <p>Hello✌️ {user.name}</p>
          <p>{user.email}</p>
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        </div>
      ) : ( 
        <div className="Profile">
          <p>Please Login!!</p>
      <button style={{padding:".5rem 3rem"}} onClick={() => loginWithRedirect()}>Log In</button>
      </div>
      )
    }
    </div>
  );
};

export default ProfilePage;
