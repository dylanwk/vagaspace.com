import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MenuItem from "./MenuItem";

interface UserMenuInterface {}

const UserMenu: React.FC<UserMenuInterface> = ({}) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isBlogPage = pathname === "/blog";

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const MenuIcon =
    isHomePage || isBlogPage ? (
      <MenuOutlinedIcon fontSize="small" htmlColor="white" />
    ) : (
      <MenuOutlinedIcon fontSize="small" htmlColor="black" />
    );

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3 bg-transparent">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div
              role="button"
              aria-label="Open menu"
              aria-haspopup="menu"
              aria-expanded="false"
              className="flex cursor-pointer flex-row items-center gap-3 rounded-full border-[1px] border-neutral-200 p-4 transition hover:shadow-md"
            >
              {MenuIcon}
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="z-10">
            <div className="right-0 top-12 z-10 mt-2 w-40 overflow-hidden rounded-xl bg-white text-sm shadow-md">
              <div className="z-10 flex cursor-pointer flex-col">
                <Link href={"/s"}>
                  <MenuItem label="View Spaces" />
                </Link>
                <Link href={"/blog"}>
                  <MenuItem label="Blog" />
                </Link>
                <Link href={"/contact"}>
                  <MenuItem label="Contact" />
                </Link>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default UserMenu;
