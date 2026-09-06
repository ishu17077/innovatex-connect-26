import { scanGateAttendance, scanFoodCollection, scanSwagsCollection } from "../services/attendance.service.js";

export async function scanGateController({ ticketNumber, adminId, gate }) {
  return await scanGateAttendance({ ticketNumber, adminId, gate });
}

export async function scanFoodController({ ticketNumber, adminId, counter }) {
  return await scanFoodCollection({ ticketNumber, adminId, counter });
}

export async function scanSwagsController({ ticketNumber, adminId, counter }) {
  return await scanSwagsCollection({ ticketNumber, adminId, counter });
}
