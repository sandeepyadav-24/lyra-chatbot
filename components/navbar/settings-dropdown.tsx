import { Settings, User, ChevronDown } from "lucide-react"; // Added ChevronDown
import { useEffect, useRef, useState } from "react";

export default function SettingsDropdown() {
  const [toggleSettings, setToggleSettings] = useState(false);
  const [toggleUserDropdown, setToggleUserDropdown] = useState(false); // State for user dropdown
  const settingsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        settingsRef.current &&
        !settingsRef.current.contains(event.target as Node)
      ) {
        setToggleSettings(false);
        setToggleUserDropdown(false); // Close user dropdown too
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={settingsRef} className="flex items-center gap-2 relative">
      {/* User Dropdown Button */}
      <div className="relative">
        <button
          onClick={() => setToggleUserDropdown(!toggleUserDropdown)}
          title="User Options"
          className="flex items-center gap-2 px-2 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-app-primary"
        >
          <User size={16} />
          <span>Lyra</span>
          <ChevronDown size={16} className="ml-1" />
        </button>

        {toggleUserDropdown && (
          <div className="absolute p-2 z-50 top-full translate-y-1 left-0 bg-app-primaryBg border border-app-primaryBorder rounded-md shadow-md min-w-[200px] bg-app-secondary">
            <SettingsDropdownItem onClick={() => {}}>
              Profile
            </SettingsDropdownItem>
            <SettingsDropdownItem onClick={() => {}}>
              Account Settings
            </SettingsDropdownItem>
            <SettingsDropdownItem onClick={() => {}}>
              Logout
            </SettingsDropdownItem>
          </div>
        )}
      </div>

      {/* Settings Button */}
      <button
        onClick={() => setToggleSettings(!toggleSettings)}
        title="Settings"
        className="p-2 rounded-md hover:bg-app-primaryBorder"
      >
        <Settings size={16} />
      </button>

      {toggleSettings && (
        <div className="absolute p-2 z-50 top-full translate-y-1 right-0 bg-app-primaryBg border border-app-primaryBorder rounded-md shadow-md min-w-[200px] bg-app-secondary">
          <SettingsDropdownItem onClick={() => {}}>
            Chat with team
          </SettingsDropdownItem>
        </div>
      )}
    </div>
  );
}

const SettingsDropdownItem = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-md p-1 text-left hover:bg-app-tertiary cursor-pointer truncate"
    >
      {children}
    </button>
  );
};