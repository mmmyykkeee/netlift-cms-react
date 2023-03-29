import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          
        </a>
        <p>There are several universal free EPG (Electronic Program Guide) sources available on GitHub that you can use to retrieve TV guide information for various countries and channels. Here are some of the popular ones:

1. WebGrab+Plus: It is a multi-site EPG and web scraping software that can fetch TV listings from more than 100 TV guide sources around the world. You can find the source code of WebGrab+Plus on GitHub at https://github.com/SilentButeo2/webgrabplus.

2. XMLTV: It is another popular open-source project for retrieving EPG data from various sources. You can find the source code of XMLTV on GitHub at https://github.com/XMLTV/xmltv.

3. TVHeadend: It is a Linux-based TV streaming server that also provides EPG data for different countries and channels. You can find the source code of TVHeadend on GitHub at https://github.com/tvheadend/tvheadend.

4. EPG Collector: It is a Windows-based EPG grabber that can retrieve TV listings from various sources, including DVB and XMLTV. You can find the source code of EPG Collector on GitHub at https://github.com/IT2005/epgcollector.

5. Schedules Direct: It is a subscription-based EPG service that offers TV guide data for the USA, Canada, and Mexico. You can find the source code of Schedules Direct on GitHub at https://github.com/SchedulesDirect/schedulesdirect-api.

These are just a few examples of the many EPG sources available on GitHub. Depending on your requirements and location, you can choose the one that suits you the best.</p>
      </header>
    </div>
  );
}

export default App;
