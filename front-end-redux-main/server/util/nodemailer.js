const nodemailer = require("nodemailer");


const sendemail=async(email,subject,text)=>{

try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      service:'gmail',
      port: 587,
      secure: false, // upgrade later with STARTTLS
      auth: {
        user:   "shoaibzaki84@gmail.com", 
        pass: "427836eA#$",
      },
      })
    // send mail with defined transport object
       await transporter.sendMail({
        from: '"Fred Foo 👻" <shoaibzaki84@gmail.com>',
        to: email,
        subject: subject,
        text: text,
  });
  console.log("email sent sucessfully");

} catch (error) {
    
    console.log(error, "email not sent");

}


}
module.exports=sendemail

