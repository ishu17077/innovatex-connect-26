export const ROLES = {
  STUDENT: "Student",
  WORKING_PROFESSIONAL: "Working Professional",
  COMMUNITY_PARTNER: "Community Partner",
  ADMIN: "Admin",
  UNDEFINED: "Undefined"
};

export const REGISTRATIONROLES = {
  STUDENT: "Student",
  WORKING_PROFESSIONAL: "Working Professional",
  COMMUNITY_PARTNER: "Community Partner",
  UNDEFINED: "Undefined",
};

export const TICKET_STATUS = {
  PENDING: "Pending",
  APPROVED: "Approved",
  REJECTED: "Rejected",
  PAYMENT_REQUIRED: "Payment Required",
  INVITATION_EXPIRED: "Invitation Expired",
};

export const ATTENDEE_TYPES = {
  STUDENT: "Student",
  WORKING_PROFESSIONAL: "Working Professional",
};

export const AUTH_PROVIDERS = {
  MANUAL: "manual",
  GOOGLE: "google",
};

export const SCAN_TYPES = {
  ATTENDANCE: "attendance",
  FOOD: "food",
};

export const PAYMENT_STATUSES = {
  SUCCESS: "SUCCESS",
  FAILED: "FAILED",
  PENDING: "PENDING",
}

export const TICKET_TIME_REMAINING_IN_MS = process.env.TICKET_ACCEPTANCE_TIME_IN_HOURS ? Number(process.env.TICKET_ACCEPTANCE_TIME_IN_HOURS) * 60 * 60 * 1000 : 24 * 60 * 60 * 1000;