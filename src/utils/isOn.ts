import { KEY_IS_ON, IIsOnLS } from "./type";
// 이미 생성된 보드를 클릭할 때만 호출
export function updateIsOnLS(timestamp: number): void {
    const isOn = {
        isOn: timestamp,
    };
    localStorage.setItem(KEY_IS_ON, JSON.stringify(isOn));
}

// 보드를 생성 및 삭제할 때 호출
export function getIsOnLS(): IIsOnLS {
    const isOn = localStorage.getItem(KEY_IS_ON) || "{}";
    const parsedIsOn: IIsOnLS = JSON.parse(isOn);
    return parsedIsOn;
}
