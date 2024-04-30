import PropTypes from "prop-types";

function ProfileMenu({ isMenuButtonPushed, profileName, setProfileState }) {
  const animationHandlerMenu = () => {
    if (isMenuButtonPushed) {
      return { transform: "translate(-50%, -50%)" };
    }
  };

  const handleNameChange = (event) => {
    setProfileState((state) => {
      return { ...state, profileName: event.target.value };
    });
  };

  return (
    <div id="profile-menu-container" style={animationHandlerMenu()}>
      <div id="profile-void"></div>
      <div id="profile-menu-window">
        <p id="profile-menu-title">Profile Menu</p>
        <div id="user-name-change">
          <label>User name:</label>
          <input
            type="text"
            maxLength="20"
            size="20"
            value={profileName}
            onChange={handleNameChange}
          />
        </div>

        <p>Bonjour</p>
        <p>Bonjour</p>
        <p>Bonjour</p>
        <p>Bonjour</p>
        <p>Bonjour</p>
      </div>
    </div>
  );
}

export default ProfileMenu;

ProfileMenu.propTypes = {
  isMenuButtonPushed: PropTypes.bool.isRequired,
  profileName: PropTypes.string.isRequired,
  setProfileState: PropTypes.func.isRequired,
};
