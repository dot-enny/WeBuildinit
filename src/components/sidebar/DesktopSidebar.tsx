import { NavigationItem } from "../../types/types";
import { Logo, NavList, Separator, WalletInfo } from "./SidebarBlocks";

// 7. Main Desktop Sidebar Component
export const DesktopSidebar = ({ navigation }: { navigation: NavigationItem[] }) => {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex xl:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#161616] px-8">
        <Logo />
        <WalletInfo />
        <Separator />
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <NavList navigation={navigation} />
            </li>
            {/* <Separator /> */}
            {/* <ChatHistory /> */}
          </ul>
        </nav>
      </div>
    </div>
  );
};