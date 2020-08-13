import MockAdapter from "axios-mock-adapter";
import mockAuth from "./end-points/auth.controller";

export default function mockAxios(axios) {
  const mock = new MockAdapter(axios);

  mockAuth(mock);

  return mock;
}