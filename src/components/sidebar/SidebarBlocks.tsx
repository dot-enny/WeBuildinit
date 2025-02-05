import { Link, useLocation } from "react-router-dom";
import { NavigationItem } from "../../types/types";
import { classNames } from "../../utils/helpers";
import { useAppStateStore } from "../../lib/AppStateStore";
// import { useWallet } from "../../context/WalletContext";

// 1. Logo Component
export const Logo = () => (
  <div className="flex h-16 shrink-0 items-center pl-6">
    <img alt="AIgenda" src="/logo.svg" />
  </div>
);

// 2. Wallet Info Component
export const WalletInfo = () => {

  // const walletAddress = useWallet();
  const { walletAddress } = useAppStateStore();

  return (
    <div className="bg-[#1F1F1F] flex gap-3 py-3 px-4 rounded-lg">
      <img alt="" src="/assets/icons/wallet.svg" />
      {/* <span className="text-[#7A7A7A]">0432616359</span> */}
      <span className="text-[#7A7A7A]">{walletAddress.slice(0, 10) || '0432616359'}...</span>
    </div>
  )
};

// 3. Navigation Item Component (Individual Link)
export const NavItem = ({ item, isActive }: { item: NavigationItem; isActive: boolean }) => {
  return (
    <li key={item.name}>
      <Link
        to={item.href}
        className={classNames(
          isActive
            ? "text-[#7FD6E1] active-route-indicator relative"
            : "text-[#CFCFCF] hover:bg-black/15 hover:text-white",
          "group flex gap-x-3 rounded-md p-2 transition"
        )}
      >
        <item.icon
          aria-hidden="true"
          stroke={isActive ? "#7FD6E1" : "#CFCFCF"}
          fill={isActive ? "#7FD6E1" : "#CFCFCF"}
        />
        {item.name}
      </Link>
    </li>
  );
};

// 4. Navigation List Component (Group of Nav Items)
export const NavList = ({ navigation }: { navigation: NavigationItem[] }) => {
  const location = useLocation(); // Moved inside for efficiency

  return (
    <ul role="list" className="-mx-2 space-y-1">
      {navigation.map((item) => (
        <div key={item.href}>
          <NavItem item={item} isActive={location.pathname === item.href} />
        </div>
      ))}
    </ul>
  );
};


// 5. Chat History Component
export const ChatHistory = () => (
  <li>
    <span className="text-[#6D6D6D]">Chat History</span>
  </li>
);

// 6. Separator Component (Reused Horizontal Line)
export const Separator = () => <div className="bg-[#333131] h-px w-full" />;
