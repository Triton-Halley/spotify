import { atom } from "recoil";

export const playlistIdState = atom({
  //must be uniq
  key: "playlistIdState",
  default: "0Wf1Cl7qvtRsHSeOIg9ZH1",
});

export const playlistState = atom({
  key: "playlistSate",
  default: null,
});
