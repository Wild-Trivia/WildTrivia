import PropTypes from "prop-types";
import { useState } from "react";
import { ProfileContext } from "./ProfileContext";

export default function ProfileProvider({ children }) {
  const [profile, setProfile] = useState({
    profileName: "User",
    isMenuButtonPushed: false,
    theme: "Classic",
  });

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

ProfileProvider.propTypes = {
  children: PropTypes.any,
};
