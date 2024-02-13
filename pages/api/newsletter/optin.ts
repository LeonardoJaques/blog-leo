import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js"
import { Resend } from 'resend';
import { EmailTemplate } from "@src/components/EmailTemplate/emailTemplate";


// Supabase setup
//=======
const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY
const supabaseDb = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY)
//======= 

//Resend status
const RESEND_API_KEY = process.env.RESEND_KEY
const resend = new Resend(RESEND_API_KEY);


const httpStatus = {
  sucess: 200,
  created: 201,
  noContent: 204,
  badRequest: 400,
  unauthorized: 401,
  forbidden: 403,
  notFound: 404,
  methodNotAllowed: 405,
  internalServerError: 500,

}


const controllerByMethod = {
  async POST(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const email = req.body.emailNewsletter;

    // Fail fast validation
    if (!Boolean(email) || !email.includes('@') || !email.includes('.')) {
      res
        .status(httpStatus.badRequest)
        .json({ message: "Invalid email" });
      return;
    }
    // sanitaze email

    const { error } = await supabaseDb
      .from("newsletter_users")
      .insert([{ email, optin: true }])

    if (error) {
      console.error(error)
      res
        .status(httpStatus.internalServerError)
        .json({ message: "Error on insert" });
      return;
    }
    await supabaseDb.auth.admin.createUser({ email })

    try {
      await resend.emails.send({
        from: "jaques.projetos@outlook.com",
        to: ["jaques.projetos@outlook.com"],
        subject: 'Hello world',
        react: EmailTemplate({ firstName: 'teste' }),
      });
      res
        .status(httpStatus.sucess)
        .json({ message: "Post request" });

    } catch (err) {
      console.error(err)
      res
        .status(httpStatus.internalServerError)
        .json({ message: "Error on send email" });
    }
  },

  async GET(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const { data, error } = await supabaseDb
      .from("newsletter_users")
      .select("*")
    res
      .status(httpStatus.sucess)
      .json({ message: "Get request to /api/newsletter/optin", total: data.length, });
  },

}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const controller = controllerByMethod[req.method];
  if (!controller) {
    res
      .status(httpStatus.notFound)
      .json({ message: "Method not found" });
    return;
  }
  controller(req, res);



}
