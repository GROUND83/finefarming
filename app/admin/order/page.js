import { Button } from "@/components/ui/button";

export default function Page() {
  // const supabase = createSupabaseServerClient();

  return (
    <div className="w-full">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col items-start gap-1">
          <h1 className="text-2xl font-bold ">주문 조회</h1>
          <p>
            예약 완료 후 농장에 방문 완료한 건을 조회하고 관리할 수 있습니다.
          </p>
        </div>
        <div>
          <Button size={"lg"}>
            <p className="font-bold ">+ 추가</p>
          </Button>
        </div>
      </div>
    </div>
  );
}
