"use client";
import { Input } from "@/components/ui/input";
import React, { Component } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { SearchAddress } from "@/_actions/searchAddress";

const BaseInfo = () => {
  const [farmName, setFarmName] = React.useState("");
  const [searchWord, setSearchWord] = React.useState("");
  const [farmItem, setFarmItem] = React.useState([
    { title: "딸기", value: false },
    { title: "블루베리", value: false },
    { title: "토마토", value: false },
    { title: "고구마", value: false },
    { title: "당근", value: false },
    { title: "양파", value: false },
  ]); //체험 품종
  const [directFarmItem, setDirectFarmItem] = React.useState(""); //체험 품종 직접입력
  const [farmType, setFarmType] = React.useState(false);
  const [educationData, setEducationData] = React.useState(true);
  const [magazineVisible, setMagazineVisible] = React.useState(true);

  async function getAddress(searchWord) {
    // let res = await SearchAddress(searchWord);
    console.log("res", res.juso);
  }
  //   getAddress();
  return (
    <div className="w-full">
      <div className="grid w-full grid-cols-12 gap-3 border-b-[1px] py-9">
        <div className="col-span-4 ">
          <p className="text-sm font-bold">농장 정보</p>
        </div>
        <div className="flex flex-col items-start col-span-8 gap-3 ">
          <div className="flex flex-col items-start w-full gap-2">
            <p className="text-sm ">농장 이름</p>
            <Input type="text" placeholder="농장 이름을 입력하세요" />
          </div>
          <div className="flex flex-col items-start w-full gap-2">
            <p className="text-sm ">농장주 성함</p>
            <Input type="text" placeholder="농장주 성함을 입력하세요" />
          </div>
          <div className="flex flex-col items-start w-full gap-2">
            <p className="text-sm ">농장 주소</p>
            <Input
              type="address"
              placeholder="농장 주소를 입력하세요"
              value={searchWord}
              onChange={(event) => setSearchWord(event.target.value)}
            />
            <Button>주소검색</Button>
            <Dialog>
              <DialogTrigger>Open</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex flex-col items-start w-full gap-2">
            <p className="text-sm ">지도 URL</p>
            <Input type="text" placeholder="지도 URL를 입력하세요" />
            <p className="text-sm text-neutral-600">
              상세 페이지 주소 뒤에 노출되는 지도 버튼 연결 주소
            </p>
          </div>
        </div>
      </div>
      <div className="grid w-full grid-cols-12 gap-3 border-b-[1px] py-9">
        <div className="col-span-4 ">
          <p className="text-sm font-bold">연락처</p>
        </div>
        <div className="grid grid-cols-12 col-span-8 gap-4 ">
          <div className="flex flex-col items-start w-full col-span-6 gap-2">
            <p className="text-sm ">대표 번호</p>
            <Input type="text" placeholder="대표번호를 입력하세요" />
            <p className="text-sm text-neutral-600">
              상세 페이지에서 고객에게 첫 번째로 노출되는 연락처
            </p>
          </div>
          <div className="flex flex-col items-start w-full col-span-6 gap-2">
            <p className="text-sm ">농장주 휴대폰</p>
            <Input type="text" placeholder="농장주 성함을 입력하세요" />
            <p className="text-sm text-neutral-600">
              상세 페이지에서 고객에게 두 번째로 노출되는 연락처
            </p>
          </div>
          <div className="flex flex-col items-start w-full col-span-6 gap-2">
            <p className="text-sm ">예약 담당자 성함</p>
            <Input type="address" placeholder="농장 주소를 입력하세요" />
            <p className="text-sm text-neutral-600">
              관리자가 연락드릴 농장 측 예약 담당자 이름
            </p>
          </div>
          <div className="flex flex-col items-start w-full col-span-6 gap-2">
            <p className="text-sm ">예약 담당자 연락처</p>
            <Input type="text" placeholder="지도 URL를 입력하세요" />
            <p className="text-sm text-neutral-600">
              농장 측 예약 담장자 전화번호
            </p>
          </div>
        </div>
      </div>
      <div className="grid w-full grid-cols-12 gap-3 border-b-[1px] py-9">
        <div className="col-span-4 ">
          <p className="text-sm font-bold">체험 품종</p>
          <p className="text-sm text-neutral-600">
            체험 가능한 품종 최소 1개 이상 선택
          </p>
        </div>
        <div className="flex flex-col items-start col-span-8 gap-3 ">
          {farmItem.map((item, index) => {
            return (
              <div key={index} className="flex flex-row items-center gap-3">
                <Checkbox
                  id="terms1"
                  checked={item.value}
                  onCheckedChange={(checked) => {
                    let newarray = [...farmItem];
                    newarray[index].value = checked;
                    return setFarmItem(newarray);
                  }}
                />
                <label
                  htmlFor="terms1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {item.title}
                </label>
              </div>
            );
          })}
          <div className="flex flex-col items-start w-full gap-2">
            <Input
              type="text"
              placeholder="직접 입력"
              value={directFarmItem}
              onChange={(event) => setDirectFarmItem(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="grid w-full grid-cols-12 gap-3 border-b-[1px] py-9">
        <div className="col-span-4 ">
          <p className="text-sm font-bold">체험 공간</p>
          <p className="text-sm text-neutral-600">
            체험 공간 유형에 따라 최소 1개 이상 선택
          </p>
        </div>
        <div className="flex flex-col items-start col-span-8 gap-3 ">
          <div className="flex flex-row items-center w-full gap-3">
            <RadioGroup
              defaultValue={farmType}
              onValueChange={(value) => setFarmType(value)}
              className="grid w-full grid-cols-12 gap-3"
            >
              <div className="flex flex-row items-start col-span-6 gap-3">
                <RadioGroupItem value={true} id="option-one" />
                <div className="flex flex-col items-start gap-2">
                  <Label htmlFor="option-one">실내</Label>
                  <p className="text-sm text-neutral-600">
                    우천이나 악천후 등 기상 상황과 무관하게 체험할 공간이 있는
                    경우
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-start col-span-6 gap-3">
                <RadioGroupItem value={false} id="option-two" />
                <div className="flex flex-col items-start gap-2 ">
                  <Label htmlFor="option-two">실외</Label>
                  <p className="text-sm text-neutral-600">
                    우천이나 악천후 등 기상 악화 시 체험 진행이 불가한 경우
                  </p>
                </div>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
      <div className="grid w-full grid-cols-12 gap-3 border-b-[1px] py-9">
        <div className="col-span-4 ">
          <p className="text-sm font-bold">교육 정보</p>
        </div>
        <div className="flex flex-col items-start w-full col-span-8 gap-3 ">
          <div className="flex flex-col items-start w-full col-span-8 gap-3">
            <div className="flex flex-col items-start w-full gap-2">
              <p className="text-sm ">안내 문구</p>
              <Input type="text" placeholder="안내 문구를 입력하세요" />
              <p className="text-sm text-neutral-600">
                상세 페이지 대표사진 하단에 노출되는 교육 안내 문구 (최대 100자)
              </p>
            </div>
            <div className="flex flex-row items-start w-full gap-2">
              <Switch
                checked={educationData}
                onCheckedChange={(checked) => setEducationData(checked)}
              />
              <div>
                <p className="text-sm ">교육 자료 제공</p>
                <p className="text-sm text-neutral-600">
                  농장에서 사전 준비된 교육 자료를 제공 여부
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start w-full gap-2">
              <p className="text-sm ">교육 주제</p>
              <Input type="address" placeholder="교육 주제를 입력하세요" />
              <p className="text-sm text-neutral-600">
                소개글 하단에 노출되는 교육 주제 태그. 최대 5개 입력
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid w-full grid-cols-12 gap-3 border-b-[1px] py-9">
        <div className="col-span-4 ">
          <p className="text-sm font-bold">매거진</p>
        </div>
        <div className="flex flex-col items-start w-full col-span-8 gap-3 ">
          <div className="flex flex-col items-start w-full col-span-8 gap-3">
            <div className="flex flex-row items-start w-full gap-2">
              <Switch
                checked={magazineVisible}
                onCheckedChange={(checked) => setMagazineVisible(checked)}
              />
              <div>
                <p className="text-sm ">매거진 정보 노출</p>
                <p className="text-sm text-neutral-600">
                  상세 페이지 상단에 매거진 링크 노출
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseInfo;
