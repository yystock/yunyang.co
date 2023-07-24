const email = "yystock5299@gmail.com";
const subject = "Hello from React App";
const body = "This is the email body.";

const config = {
  title: `Yun Yang`,
  author: {
    name: `Yun Yang`,
  },
  description: `Web Developer`,
  siteUrl: `http://localhost:3000`,
  social: {
    github: `https://github.com/yystock`,
    twitter: ``,
    email: `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
  },
};

export default config;
