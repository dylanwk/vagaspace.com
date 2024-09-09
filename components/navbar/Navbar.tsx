"use client";

import Image from "next/image";
import UserMenu from "./UserMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "../Container";
import dynamic from "next/dynamic";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const pathname = usePathname();
  const isMainPage = pathname === "/";
  const isContactPage = pathname === "/contact" || pathname === "/blog/write-for-us";
  const isBlogPage = pathname === "/blog";
  

  const NavSearchbar = dynamic(() => import("../searchbars/NavSearchbar"), {
    ssr: false,
  });

  let HeaderIconComponent = <></>;

  if (isMainPage || isBlogPage) {
    HeaderIconComponent = (
      <>
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
          
            <Link href={"/"}>
              <Image
                src={"/images/vagaspace_title_white.png"}
                height={53}
                width={220}
                alt="Vagaspace Title"
                className="-ml-1"
              />
            </Link>
          
        </div>
      </>
    );
  } else if (isContactPage) {
    HeaderIconComponent = (
      <>
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
          
        </div>
      </>
    );
  } else {
    HeaderIconComponent = (
      <>
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
        </div>
        <NavSearchbar />
      </>
    );
  }

  return (
    <>
      <div
        className={`z-10 mt-4 w-full bg-transparent ${
          isMainPage || isBlogPage ? "absolute" : ""
        }`}
      >
        <div className="py-4">
          <Container>
            <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
              {HeaderIconComponent}
              <UserMenu />
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Navbar;
