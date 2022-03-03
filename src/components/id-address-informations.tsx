import React from 'react';
import '../assets/scss/id-address-information-style.scss';
import IpInformationType from '../class/interface/ip-information-type';

interface Props {
  ipInformation: IpInformationType | null;
}

function IdAddressInfo(props: Props): JSX.Element {
  return (
    <div className="id-address-information-content">
      <ul className="informations-content">
        <li className="information" id="ip-address">
          <h3>IP address</h3>
          <p>{props.ipInformation ? props.ipInformation.ip : ''}</p>
        </li>
        <li className="information" id="location">
          <h3>location</h3>
          <p>{props.ipInformation ? props.ipInformation.location.city : ''}</p>
        </li>
        <li className="information" id="timezone">
          <h3>timezone</h3>
          <p>
            {props.ipInformation ? props.ipInformation.location.timezone : ''}
          </p>
        </li>
        <li className="information" id="ips">
          <h3>ips</h3>
          <p>{props.ipInformation ? props.ipInformation.isp : ''}</p>
        </li>
      </ul>
    </div>
  );
}

export default IdAddressInfo;
