import { createTransport } from "nodemailer";

export const sendMail = async (email, subject, text) => {
  const transport = createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "piyushyadav0191@gmail.com", // generated ethereal user
      pass: "vvlpvjyurymkzyba", // generated ethereal password
    },
  });

  await transport.sendMail({
    from: '"Foo 👻" piyushyadav0191@gmail.com', // sender address
    to: email,
    subject,
    text,
  });
};
