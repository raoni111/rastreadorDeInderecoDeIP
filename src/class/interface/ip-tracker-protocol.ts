import IpInformationType from './ip-information-type';

export default interface IpTrackerProtocol {
  ipInformation: IpInformationType | null;
  tracker(): Promise<IpInformationType | null>;
  set setIp(ip: string);
  get ip(): Readonly<string>;
}
