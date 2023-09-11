import { atom } from "recoil";

export const currentViewAtom = atom({
  key: "currentView",
  default: {
    view: "init", // 기본 화면을 post로 설정 (post, series, all, init)
    title: "", // 기본값은 빈 문자열 post 제목 또는 series 제목 또는 모든글
    data: {}, // 기본값은 빈 객체
    id: "", // 기본값은 빈 문자열
  },
});
