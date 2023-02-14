GitHubCalendar(".calendar", "abhishek1494k");

// or enable responsive functionality:
GitHubCalendar(".calendar", "abhishek1494k", { responsive: true });

// Use a proxy
// GitHubCalendar(".calendar", "abhishek1494k", {
//   proxy(abhishek1494k) {
//     return fetch(`https://your-proxy.com/github?user=${abhishek1494k}`);
//   },
// }).then((r) => r.text());
