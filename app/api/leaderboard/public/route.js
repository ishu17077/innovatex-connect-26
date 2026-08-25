import { asyncDbHandler } from "@/backend/utils/asyncDbHandler.js";
import { sendResponse } from "@/backend/utils/sendResponse.js";
import { getLeaderboardController } from "@/backend/controllers/leaderboard.controller.js";

// Public endpoint — no authentication required
// Returns leaderboard sorted by totalReferrals (total signups), exposing only public fields
export const GET = asyncDbHandler(async () => {
  const leaderboard = await getLeaderboardController(false);

  // Strip sensitive/internal fields — only expose what's needed for public view
  const publicData = leaderboard.map((item) => ({
    partner: {
      id: item.partner.id,
      company: item.partner.company,
      college: item.partner.college,
      name: item.partner.name,
    },
    totalSignups: item.totalReferrals,
  }));

  return sendResponse({
    success: true,
    statusCode: 200,
    message: "Public leaderboard retrieved successfully",
    data: publicData,
  });
});
