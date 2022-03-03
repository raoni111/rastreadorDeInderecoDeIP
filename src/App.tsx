import React, { useRef, useState } from 'react';
import './assets/scss/app-style.scss';
import IpInformationType from './class/interface/ip-information-type';
import IpTracker from './class/ip-tracker';
import IdAddressInfo from './components/id-address-informations';
import MapComponent from './components/map-component';

function App() {
  const [ipInformation, setIpInformation] = useState<IpInformationType | null>(
    null,
  );
  const inputIpAddress = useRef<HTMLInputElement | null>(null);
  const ipTracker = new IpTracker();

  const hundleClick = async (): Promise<void> => {
    const ip = inputIpAddress.current?.value;
    if (typeof ip === 'string') {
      ipTracker.setIp = ip;
      await ipTracker.tracker().then((response) => {
        if (response) {
          setIpInformation(response);
        }
      });
    }
  };

  return (
    <div className="App">
      <div className="content-absolute">
        <section>
          <h1>IP address Tracker</h1>
          <div className="search-ip-address-content">
            <input
              className="input-ip-address"
              type="text"
              placeholder="search for any Ip address or domain"
              ref={inputIpAddress}
            />
            <div className="search-button-content">
              <button
                className="search-button"
                type="submit"
                onClick={hundleClick}
              />
            </div>
          </div>
          <IdAddressInfo ipInformation={ipInformation} />
        </section>
      </div>
      <div className="content-one"></div>
      <div className="map-content">
        <MapComponent ipInformation={ipInformation} />
      </div>
    </div>
  );
}
export default App;
