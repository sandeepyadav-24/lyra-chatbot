import DiscordDark from "@/icons/svg/discord/discord-dark.svg";
import DiscordLight from "@/icons/svg/discord/discord-light.svg";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Discord() {
  const { theme } = useTheme();
  return (
    <Image
      src={theme === "dark" ? DiscordDark : DiscordLight}
      alt="discord"
      width={18}
      height={18}
    />
  );
}
