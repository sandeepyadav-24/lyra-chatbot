import { useMedia } from "./use-media";

export function useIsScreen() {
  const fixedRightSidebar = useMedia(1024);
  const fixedLeftSidebar = useMedia(680);
  return { fixedRightSidebar, fixedLeftSidebar };
}
