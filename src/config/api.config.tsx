export class ApiConfig {
  endpoint: string;

  constructor() {
    this.endpoint = process.env.REACT_APP_ENDPOINT!;
  }
}
const config = new ApiConfig();
export default config;
