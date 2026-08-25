import Referral from "../models/Referral";
import User from "../models/User";
import Ticket from "../models/Ticket";
import {
  ROLES,
  TICKET_STATUS
} from "../config/constants.js";

export async function getLeaderboardService(isAdmin = false) {
  const partners = await User.find({
    role: ROLES.COMMUNITY_PARTNER
  }).select("name email college company avatar");

  const leaderboardData = await Promise.all(
    partners.map(async (partner) => {
      const totalReferrals = await Referral.countDocuments({
        partnerId: partner._id
      });
      // Find all referrals made by this partner to cross-reference with actual Tickets
      const partnerReferrals = await Referral.find({ partnerId: partner._id }).select('referredUser');
      const referredUserIds = partnerReferrals.map(r => r.referredUser);

      // Count actual tickets for these users to get accurate approved counts
      const approvedReferrals = await Ticket.countDocuments({
        userId: { $in: referredUserIds },
        status: TICKET_STATUS.APPROVED
      });
      const paymentPendingReferrals = await Ticket.countDocuments({
        userId: { $in: referredUserIds },
        status: TICKET_STATUS.PAYMENT_REQUIRED
      });

      return {
        partner: {
          id: partner._id,
          name: partner.name,
          college: partner.college,
          company: partner.company,
          avatar: partner.avatar,
        },
        totalReferrals,
        approvedReferrals,
        paymentPendingReferrals,
      };
    })
  );

  leaderboardData.sort((a, b) => {
    if (isAdmin) {
      if (b.approvedReferrals !== a.approvedReferrals) {
        return b.approvedReferrals - a.approvedReferrals;
      }
      return b.totalReferrals - a.totalReferrals;
    } else {
      if (b.totalReferrals !== a.totalReferrals) {
        return b.totalReferrals - a.totalReferrals;
      }
      return b.approvedReferrals - a.approvedReferrals;
    }
  });

  return leaderboardData;
}

export async function getPartnerStatsService(partnerId) {
  const totalReferrals = await Referral.countDocuments({
    partnerId
  });
  // const pendingReferrals = await Referral.countDocuments({ partnerId, status: TICKET_STATUS.PENDING });
  // const approvedReferrals = await Referral.countDocuments({ partnerId, status: TICKET_STATUS.APPROVED });


  return {
    totalReferrals,
    // pendingReferrals,
    // approvedReferrals,
  };
}