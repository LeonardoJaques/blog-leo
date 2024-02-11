import { NextApiRequest, NextApiResponse } from "next";


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
  POST(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    console.log(req.body.emailNewsletter);
    res
      .status(httpStatus.sucess)
      .json({ message: "Post request to /api/newsletter/optin" });

  },

  GET(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    res
      .status(httpStatus.sucess)
      .json({ message: "Get request to /api/newsletter/optin" });
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
