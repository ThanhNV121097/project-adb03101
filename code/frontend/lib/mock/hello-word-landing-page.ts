export type HelloWordMessageResponse = {
  text: string;
};

const mockResponse: HelloWordMessageResponse = {
  text: "Hello Word"
};

export async function getHelloWordMessage(): Promise<HelloWordMessageResponse> {
  return mockResponse;
}
