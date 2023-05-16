import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.APIKEY,
  server: process.env.SERVER,
});

export default mailchimp;