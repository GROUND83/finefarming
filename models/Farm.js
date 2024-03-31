import mongoose from "mongoose";

const Farm = mongoose.Schema(
  {
    farmName: {
      type: String,
      required: true,
    }, // 농장이름
    visible: {
      type: Boolean,
      default: true,
    }, // 상태 (공개 ,비공개)
    onwer: {
      type: String,
    }, // 사업주명
    introduction: {
      type: String,
    }, //소개글
    farmNumber: {
      type: String,
    }, // 사업자번호
    address: {
      type: String,
    }, // 농장주소 주소 , 위도 경도 표시
    mainPhone: {
      type: String,
    }, // 대표전화번호
    onwersPhone: {
      type: String,
    }, // 농장주 휴대폰
    resevationManager: {
      type: {
        String,
      },
    },
    resevationPhone: {
      type: {
        String,
      },
    },
    farmItem: [
      {
        type: String,
      },
    ], // 품목
    farmType: {
      type: Boolean,
      default: true,
    }, // 체험공간 (실내-true, 실외)
    educationTitle: {
      type: String,
    }, // 교육정보 - 안내문구
    educationData: {
      type: Boolean,
      default: true,
    }, //교육자료 제공
    educationSubject: [{ type: String }], // 교육주제 최대 5개
    magazineVisible: {
      type: Boolean,
      default: true,
    }, //매거진 노출
    magazineUrl: {
      type: String,
    }, //매거진 Url
    mainImage: { type: String }, // 대표사진
    images: [{ type: String }], // 추가사진
    monDayOpenTime: {
      isOpen: { type: Boolean, default: true },
      startTime: { type: String },
      endTime: { type: String },
    }, //월요일 운영시간
    tuesDayOpenTime: {
      isOpen: { type: Boolean, default: true },
      startTime: { type: String },
      endTime: { type: String },
    }, //월요일 운영시간
    wednesDayOpenTime: {
      isOpen: { type: Boolean, default: true },
      startTime: { type: String },
      endTime: { type: String },
    }, //월요일 운영시간
    thursDayOpenTime: {
      isOpen: { type: Boolean, default: true },
      startTime: { type: String },
      endTime: { type: String },
    }, //월요일 운영시간
    friDayOpenTime: {
      isOpen: { type: Boolean, default: true },
      startTime: { type: String },
      endTime: { type: String },
    }, //월요일 운영시간
    saturDayOpenTime: {
      isOpen: { type: Boolean, default: true },
      startTime: { type: String },
      endTime: { type: String },
    }, //월요일 운영시간
    sunDayOpenTime: {
      isOpen: { type: Boolean, default: true },
      startTime: { type: String },
      endTime: { type: String },
    }, //월요일 운영시간
    holiDayOpenTime: {
      isOpen: { type: Boolean, default: true },
      startTime: { type: String },
      endTime: { type: String },
    }, //월요일 운영시간
    parking: {
      type: String,
      enum: ["free", "paid", "noparking"],
    }, //주차여부
    parkingFee: { type: String },

    facilities: [String], //편의시설
    // outsideFood: {
    //   type: Boolean,
    //   default: false,
    // }, //외부음식 반입가능여부(가능 true)
    pet: {
      type: Boolean,
      default: false,
    }, //반려동물 동반 가능여부 가능 true
    tools: [
      {
        type: String,
      },
    ], //도구
    cloth: {
      type: String,
    }, //추천복장
    // detailPage: {
    //   type:String
    // }, // rich text
    // policy: {
    //   type:String
    // }, // rich text
    // cancleAndRefundPolicy: {
    //   type:String
    // }, // rich text
    limitPersons: { type: Number, default: 5 }, // 그룹 당 인원 제한
    groupPrices: [
      {
        startAgeRange: { value: { type: Number }, type: { type: String } },
        endAgeRange: { value: { type: Number }, type: { type: String } },
        price: { type: Number },
        massage: { type: String },
        isFree: { type: Boolean },
      },
    ], // 요금 그룹 관리
    baseProducts: [
      {
        title: { type: String },
        description: { type: String },
        priceUnit: { type: String, enum: ["그룹", "인원"], default: "그룹" },
        price: { type: Number },
      },
    ],
    addProducts: [
      {
        title: { type: String },
        description: { type: String },
        priceUnit: { type: String, enum: ["그룹", "인원"], default: "그룹" },
        price: { type: Number },
      },
    ],
    // reservationSlot: {

    // }
  },
  { timestamps: true }
);

export default mongoose.models.Farm || mongoose.model("Farm", Farm);
