import { Settings } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function SettingsDropdown() {
  const [toggleSettings, setToggleSettings] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        settingsRef.current &&
        !settingsRef.current.contains(event.target as Node)
      ) {
        setToggleSettings(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div ref={settingsRef} className="flex items-center gap-2 relative">
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
