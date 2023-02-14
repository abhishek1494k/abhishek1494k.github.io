GitHubCalendar(".calendar", "abhishek1494k");

// or enable responsive functionality:
GitHubCalendar(".calendar", "abhishek1494k", { responsive: true });

// Use a proxy
GitHubCalendar(".calendar", "abhishek1494k", {
  proxy(abhishek1494k) {
    return fetch(`https://your-proxy.com/github?user=${abhishek1494k}`);
  },
}).then((r) => r.text());


// import HeatCalendar from 'react-heat-calendar';

// <HeatCalendar
//   beginDate={new Date('2022-12-01')} // optional
//   endDate={new Date('2023-01-31')}   // optional
//   dateField="date"                   // optional
//   data={[
//     { date: '2016-12-02', someAttr: "foo" },
//     { date: '2016-12-03', someAttr: "bar" },
//     { date: '2016-12-03', someAttr: "baz" },
//     // ...and so on
//   ]}
// />