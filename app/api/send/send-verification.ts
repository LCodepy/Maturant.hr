import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = "http://localhost:3000";

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmationLink = `${domain}/verify-email?token=${token}`; // pass the token as a query parametar

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Potvrdite E-mail Adresu | Maturant.hr",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 500px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0,0,0,0.1);">
        <h2 style="color: #333;">Bok,</h2>
        <p style="font-size: 16px; color: #555;">Hvala ti što si se prijavio/la! Još samo jedan korak i možeš početi koristiti platformu. Klikni na gumb ispod kako bi potvrdio/la svoju e-mail adresu.</p>
        <div style="text-align: center; margin: 20px 0;">
          <a href="${confirmationLink}" style="background-color: #007bff; color: #ffffff; text-decoration: none; padding: 12px 20px; font-size: 16px; border-radius: 5px; display: inline-block;">
            Potvrdi e-mail
          </a>
        </div>
        <p style="font-size: 16px; color: #555;">Ako gumb ne radi kopiraj ovaj link u svoj preglednik: <a href="${confirmationLink}">${confirmationLink}</a></p>
        <p style="font-size: 16px; color: #555;">Ako imaš bilo kakvih pitanja ili ti mogu pomoći na bilo koji način, javi mi se – uvijek sam tu za tebe!</p>
        <p style="font-size: 16px; font-weight: bold; color: #333;">Pozdrav,<br>Maturant.hr 😊</p>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        <p style="font-size: 12px; color: #aaa; text-align: center;">© 2024 Maturant.hr</p>
      </div>`
  })
}