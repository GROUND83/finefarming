import { getFarm } from "@/_actions/farmAction";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Page() {
  // const supabase = createSupabaseServerClient();
  const res = await getFarm();
  console.log("res", res);
  return (
    <div className="w-full">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col items-start gap-1">
          <h1 className="text-2xl font-bold ">업체 관리</h1>
          <p className="text-neutral-600">
            등록된 업체를 조회하고 상품을 관리할 수 있습니다.
          </p>
        </div>
        <div>
          <Button size={"lg"}>
            <Link href={"/admin/farm/new"} className="font-bold ">
              + 추가
            </Link>
          </Button>
          {/* <Button size={"lg"} as={<Link />}>
            <p className="font-bold ">+ 추가</p>
          </Button> */}
        </div>
      </div>
    </div>
  );
}
