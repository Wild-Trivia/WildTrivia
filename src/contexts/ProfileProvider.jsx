import PropTypes from "prop-types";
import { useState } from "react";
import { ProfileContext } from "./ProfileContext";

export default function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(() => {
    const storedProfileName = localStorage.getItem("profileName");
    const storedTheme = localStorage.getItem("theme");
    if (storedProfileName && storedTheme) {
      return {
        profileName: storedProfileName,
        isMenuButtonPushed: false,
        theme: storedTheme,
      };
    } else if (storedProfileName) {
      return {
        profileName: storedProfileName,
        isMenuButtonPushed: false,
        theme: "Classic",
      };
    } else if (storedTheme) {
      return {
        profileName: "User",
        isMenuButtonPushed: false,
        theme: storedTheme,
      };
    } else {
      return {
        profileName: "User",
        isMenuButtonPushed: false,
        theme: "Classic",
      };
    }
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
