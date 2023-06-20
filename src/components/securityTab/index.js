import * as React from 'react';
import TabPanel from '@mui/lab/TabPanel';
import './securityTab.style.css';

export default function SecurityTab({ value }) {
  return (
    <TabPanel className="tab-panel" value={value}>
      <p>
        The development of this project involved utilizing Material-UI and
        React, Material-UI is a popular React UI framework that provides a set
        of pre-designed components, icons, and themes, based on Google's
        Material Design guidelines. Leveraging Material-UI's components and
        styles, we were able to rapidly build the user interface with consistent
        styling and a cohesive look and feel. React, on the other hand, is a
        JavaScript library that enables the creation of interactive and reusable
        user interfaces. Its component-based architecture allowed us to break
        down the page into smaller, reusable pieces, making it easier to manage
        and maintain the codebase. React's virtual DOM also ensured efficient
        rendering and updates, resulting in a smooth user experience. One of the
        key aspects of this project was achieving responsiveness, ensuring that
        the page adapts seamlessly to different screen sizes and devices. This
        is where Flexbox came into play. Flexbox is a CSS layout module that
        provides a flexible and dynamic way to arrange and align elements within
        a container. By applying Flexbox properties and utilizing Material-UI's
        built-in responsive features, I were able to create a fluid and
        adaptable layout that adjusts gracefully across various screen
        resolutions.
      </p>
      <p>
        WebRTC (Web Real-Time Communication) is a free and open-source
        technology that enables real-time communication between web browsers and
        applications. It allows for peer-to-peer communication, including audio,
        video, and data sharing, without the need for any additional plugins or
        software installations. WebRTC uses a combination of protocols and APIs
        to establish direct communication channels between browsers. One of the
        key differences between WebRTC and TCP/IP protocols is the purpose and
        scope of their applications. TCP/IP (Transmission Control
        Protocol/Internet Protocol) is a suite of protocols that forms the
        foundation of the internet. It is responsible for the reliable delivery
        of data packets across networks, ensuring end-to-end communication
        between devices. TCP/IP is primarily used for transmitting data between
        devices over IP networks, and it provides features such as error
        correction, congestion control, and packet sequencing. On the other
        hand, WebRTC focuses specifically on real-time communication within web
        browsers. It is built on top of TCP/IP and other protocols but
        introduces additional protocols and APIs to enable direct communication
        between browsers. WebRTC utilizes the User Datagram Protocol (UDP) as a
        transport protocol, which is a connectionless protocol that prioritizes
        speed and low-latency communication. UDP is suitable for real-time
        applications, as it sacrifices some of the reliability guarantees
        provided by TCP in favor of faster data transmission.
      </p>
    </TabPanel>
  );
}
