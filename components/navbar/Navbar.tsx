"use client"


import Image from "next/image";
import UserMenu from "./UserMenu";
import Link from "next/link";
//import NavSearch from '../searchbars/NavSearch';
import { usePathname } from "next/navigation";
import Container from "../Container";

const Navbar = () => {
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  return (
    <>
      <div
        className={`z-10 mt-4 w-full bg-transparent ${
          !isMainPage ? "" : "absolute"
        }`}
      >
        <div className="py-4">
          <Container>
            <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
              <div className="flex flex-row items-center gap-0">
                <Link href={"/"} className="z-10">
                  <Image
                    src={"/images/vagaspace_logo.svg"}
                    height={53}
                    width={53}
                    alt="Logo"
                    className="block"
                    style={{ minWidth: "47px", minHeight: "47px" }}
                  />
                </Link>
                {isMainPage && (
                  <Link href={"/"}>
                    <Image
                      src={"/images/vagaspace_title_white.png"}
                      height={53}
                      width={220}
                      alt="Vagaspace Title"
                      className="-ml-1"
                    />
                  </Link>
                )}
              </div>
              {/* !isMainPage && <NavSearch /> */}
              <UserMenu />
            </div>
          </Container>
        </div>
      </div>
      
    </>
  );
};

export default Navbar;
