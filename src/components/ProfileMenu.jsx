import PropTypes from "prop-types";
import { useProfile } from "../contexts/useProfile";

export default function ProfileMenu({ profileMenuToggle }) {
  const { profile, setProfile } = useProfile();

  const menuAnimationHandler = () => {
    if (profile.isMenuButtonPushed) {
      return { transform: "translate(-50%, -50%)" };
    }
  };

  const ProfileMenuStyle = () => {
    switch (profile.theme) {
      case "Classic":
        return { backgroundColor: "#669fa7" };
      case "Starry Sky":
      case "Night Jungle":
        return { backgroundColor: "#669fa700" };
    }
  };

  const menuInputStyle = () => {
    switch (profile.theme) {
      case "Classic":
        return { backgroundColor: "#7b59da" };
      case "Starry Sky":
        return { backgroundColor: "#00688b" };
      case "Night Jungle":
        return { backgroundColor: "#044c7f" };
    }
  };

  const handleNameChange = (event) => {
    localStorage.setItem("profileName", event.target.value);
    setProfile((state) => {
      return { ...state, profileName: event.target.value };
    });
  };

  const handleThemeChange = (event) => {
    localStorage.setItem("theme", event.target.value);
    setProfile((state) => {
      return { ...state, theme: event.target.value };
    });
  };

  const menuClosingButtonStyle = () => {
    switch (profile.theme) {
      case "Classic":
        return { color: "#7b59da" };
      case "Starry Sky":
        return { color: "#00688b" };
      case "Night Jungle":
        return { color: "#044c7f" };
    }
  };

  return (
    <div id="profile-menu-container" style={menuAnimationHandler()}>
      <div id="profile-void"></div>
      <div id="profile-menu-window" style={ProfileMenuStyle()}>
        <p id="profile-menu-title">Profile Menu</p>
        <div id="user-name-change">
          <label>User name:</label>
          <input
            type="text"
            maxLength="20"
            size="20"
            value={profile.profileName}
            onChange={handleNameChange}
            style={menuInputStyle()}
          />
        </div>
        <div id="theme-change">
          <label>App Theme:</label>
          <select
            value={profile.theme}
            onChange={handleThemeChange}
            style={menuInputStyle()}
          >
            <option value="Classic" style={menuInputStyle()}>
              Classic
            </option>
            <option value="Starry Sky" style={menuInputStyle()}>
              Starry Sky
            </option>
            <option value="Night Jungle" style={menuInputStyle()}>
              Night Jungle
            </option>
          </select>
        </div>
        <div id="menu-closing">
          <button
            id="menu-closing-button"
            style={menuClosingButtonStyle()}
            onClick={profileMenuToggle}
          >
            Close Menu
          </button>
        </div>
      </div>
    </div>
  );
}

ProfileMenu.propTypes = {
  profileMenuToggle: PropTypes.func.isRequired,
};
