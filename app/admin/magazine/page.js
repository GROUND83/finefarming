import { Button } from "@/components/ui/button";

export default function Page() {
  // const supabase = createSupabaseServerClient();

  return (
    <div className="w-full">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col items-start gap-1">
          <h1 className="text-2xl font-bold ">매거진 관리</h1>
          <p>작성한 매거진 글을 조회 및 관리할 수 있습니다.</p>
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
