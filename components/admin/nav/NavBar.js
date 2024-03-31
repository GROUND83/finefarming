import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { RiUser3Line } from "react-icons/ri";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 w-full bg-white  h-[80px]">
      <div className="border-b-[1px]  h-full ">
        <div className="flex flex-row  h-[80px] gap-9  item-center justify-between px-12">
          <div className="flex flex-row items-center h-full gap-12 ">
            <Link
              className="flex items-center transition duration-200 "
              href={`/`}
            >
              <Image
                src="/logo.svg"
                width={153}
                height={500}
                alt="logo of finefarming"
              />
            </Link>
            <div className="flex flex-row items-center gap-7">
              <Link
                className="flex items-center justify-start font-bold text-neutral-800 "
                href={`/admin/farm`}
              >
                업체 관리
              </Link>
              <Link
                className="flex items-center justify-start font-bold text-neutral-800 "
                href={`/admin/reservation`}
              >
                예약 관리
              </Link>
              <Link
                className="flex items-center justify-start font-bold text-neutral-800 "
                href={`/admin/order`}
              >
                주문 내역
              </Link>
              <Link
                className="flex items-center justify-start font-bold text-neutral-800 "
                href={`/admin/review`}
              >
                리뷰 관리
              </Link>
              <Link
                className="flex items-center justify-start font-bold text-neutral-800 "
                href={`/admin/magazine`}
              >
                매거진 관리
              </Link>
              <Link
                className="flex items-center justify-start font-bold text-neutral-800 "
                href={`/admin/users`}
              >
                사용자 관리
              </Link>
            </div>
          </div>

          <div className="flex flex-row items-center">
            <Link
              href="/profile"
              className="flex items-center py-1 no-underline rounded-md bg-btn-background hover:bg-btn-background-hover"
            >
              <Avatar className="w-10 h-10">
                {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                <AvatarFallback>
                  <RiUser3Line />
                </AvatarFallback>
              </Avatar>
            </Link>
          </div>
          {/* <ThemButton /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
