import PersonalInfo from "./personal-info";
import ChangePassword from "./change-password";
import Preferences from "./preferences";

export default function ProfileSettings() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <PersonalInfo />
      <ChangePassword />
      <Preferences />
    </div>
  );
}

