import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  // const supabase = createSupabaseServerClient();

  return (
    <div className="w-full">
      <p>메인</p>
      <Link href={"/admin"}>어드민</Link>
    </div>
  );
}
