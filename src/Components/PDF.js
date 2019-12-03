
 

// email sender function

function oction(req, res){

// Definimos el transporter
var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'adamerosasnorma@gmail.com',
            pass: ''
        }
    });
// Definimos el email
var mailOptions = {
    from: 'Remitente',
    to: 'normaadamerosas@gmail.com',
    subject: 'Asunto',
    text: 'Contenido del email'
};
// Enviamos el email
transporter.sendMail(mailOptions, function(error, info){
    if (error){
        console.log(error);
       // res.send(500, error.message);
    } else {
        console.log("Email sent");
        res.status(200).jsonp(req.body);
    }
});
};



export default oction; 