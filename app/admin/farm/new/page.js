"use client";
import { getFarm } from "@/_actions/farmAction";
import { Button } from "@/components/ui/button";
import { RiHome3Line } from "react-icons/ri";
import { TbSmartHome } from "react-icons/tb";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import BaseInfo from "@/components/admin/farm/new/BaseInfo";
export default function Page() {
  // const supabase = createSupabaseServerClient();
  // const getFarmData = async () => {
  //   "use server";
  //   const res = await getFarm();
  //   console.log("res", res);
  // };
  return (
    <div className="w-full">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/admin">
              <TbSmartHome className="text-xl" />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/admin/farm">업체 관리</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="font-bold">업체 추가</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-row items-center justify-between mt-6">
        <div className="flex flex-col items-start gap-1">
          <h1 className="text-2xl font-bold ">업체 추가</h1>
          <p className="text-neutral-600">
            신규 제휴 업체를 추가할 수 있습니다.
          </p>
        </div>
      </div>
      <Tabs defaultValue="baseinfo" className="w-full mt-6">
        <TabsList className="flex flex-row items-center justify-start w-full gap-3">
          <TabsTrigger value="baseinfo">기본 정보</TabsTrigger>
          <TabsTrigger value="images">농장 사진</TabsTrigger>
          <TabsTrigger value="info">운영정보</TabsTrigger>
          <TabsTrigger value="detail">상세페이지</TabsTrigger>
          <TabsTrigger value="policy">일반정책</TabsTrigger>
          <TabsTrigger value="canclePolicy">취소환불정책</TabsTrigger>
          <TabsTrigger value="baseProduct">기본 상품</TabsTrigger>
          <TabsTrigger value="addProduct">추가 상품</TabsTrigger>
          <TabsTrigger value="reservationSlot">예약 슬롯</TabsTrigger>
        </TabsList>
        <TabsContent value="baseinfo" className="w-full px-3">
          <BaseInfo />
        </TabsContent>
        <TabsContent value="images">Change your password here.</TabsContent>
        <TabsContent value="info">Change your password here.</TabsContent>
        <TabsContent value="detail">Change your password here.</TabsContent>
        <TabsContent value="policy">Change your password here.</TabsContent>
        <TabsContent value="canclePolicy">
          Change your password here.
        </TabsContent>
        <TabsContent value="baseProduct">
          Change your password here.
        </TabsContent>
        <TabsContent value="addProduct">Change your password here.</TabsContent>
        <TabsContent value="reservationSlot">
          Change your password here.
        </TabsContent>
      </Tabs>
    </div>
  );
}
