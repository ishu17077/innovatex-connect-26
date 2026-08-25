import {
  NextResponse
} from "next/server";
import {
  asyncDbHandler
} from "@/backend/utils/asyncDbHandler.js";
import {
  sendResponse
} from "@/backend/utils/sendResponse.js";
import {
  validate
} from "@/backend/middlewares/validate.middleware.js";
import {
  registerSchema
} from "@/backend/validators/auth.validator.js";
import {
  registerController
} from "@/backend/controllers/auth.controller.js";
import {
  asyncCacheHandler
} from "@/backend/utils/asyncCacheHandler";
import {
  redirectToCorrectDashboard
} from "../../common/redirect_to_correct_dashboard";

export const POST = asyncCacheHandler(asyncDbHandler(async (req) => {
  if (!process.env.NEXT_PUBLIC_TICKET_AVAILABLE) {
    const error = new Error("Registrations closed. Thank you for your cooperation")
    error.statusCode = 403
    throw error
  }
  const validationResult = await validate(registerSchema)(req);
  if (!validationResult.success) {
    return validationResult.response;
  }
  const {
    user,
    token
  } = await registerController(validationResult.data);

  const response = redirectToCorrectDashboard(user.role, req)

  response.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 2592000,
    path: "/",
  });

  return response
}));