import {
  asyncDbHandler
} from "@/backend/utils/asyncDbHandler.js";
import {
  sendResponse
} from "@/backend/utils/sendResponse.js";
import {
  authenticate
} from "@/backend/middlewares/auth.middleware.js";
import {
  validate
} from "@/backend/middlewares/validate.middleware.js";
import {
  bookTicketSchema
} from "@/backend/validators/ticket.validator.js";
import {
  requestTicketController
} from "@/backend/controllers/ticket.controller.js";
import {
  isTicketAvailable
} from "../../constants";

export const POST = asyncDbHandler(async (req) => {
  if (isTicketAvailable) {
    const error = new Error("Registrations closed. Thank you for cooperating with us")
    error.statusCode = 403
    throw error
  }
  const authResult = await authenticate(req);
  if (!authResult.authenticated) {
    return authResult.response;
  }

  const ticket = await requestTicketController(authResult.user._id, {
    attendeeType: authResult.user.role ?? 'Student'
  });

  return sendResponse({
    success: true,
    statusCode: 201,
    message: "Ticket request submitted successfully",
    data: ticket,
  });
});