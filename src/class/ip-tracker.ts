import IpInformationType from './interface/ip-information-type';
import IpTrackerProtocol from './interface/ip-tracker-protocol';
import axios from 'axios';

export default class IpTracker implements IpTrackerProtocol {
  protected ipInformation: IpInformationType | null = null;
  protected _ip = '';

  set setIp(ip: string) {
    this._ip = ip;
  }
  get ip(): Readonly<string> {
    return this._ip;
  }

  async tracker(): Promise<IpInformationType | null> {
    await axios
      .get(
        `https://geo.ipify.org/api/v1?apiKey=at_NhGb5CYyuvjvYAQ4sdCcvx8kHMdyI&ipAddress=${this.ip}`,
      )
      .then((response) => {
        const responseIpInformation = response.data as IpInformationType;
        this.ipInformation = responseIpInformation;
      });
    return this.ipInformation;
  }
}
