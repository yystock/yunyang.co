const email = "yystock5299@gmail.com";
const subject = "Hello from React App";
const body = "This is the email body.";

const config = {
  title: `Yun`,
  author: {
    name: `Yun`,
  },
  description: `Web Developer, Software Engineer`,
  siteUrl: `https://yunyang-co.vercel.app/`,
  social: {
    github: `https://github.com/yystock`,
    twitter: `https://twitter.com/YunYang126463`,
    email: `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
  },
};

export default config;
