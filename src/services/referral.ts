import { BONUS_STATUS, ENGLISH_LEVEL, STATUS } from "@/consts";
import type { BonusStatus, Referral, Status } from "@/types/referral"


export const getStatuses = (): { value: Status; label: string }[] => {
  return STATUS.map((status) => ({ value: status, label: status }));
}

export const getEnglishLevels = (): { value: string; label: string }[] => {
  return ENGLISH_LEVEL.map((level) => ({ value: level, label: level }));
}

export const getBonusStatuses = (): { value: BonusStatus; label: string }[] => {
  return BONUS_STATUS.map((status) => ({ value: status, label: status }));
}

export const getReferrals = (): Referral[] => {
  const data = localStorage.getItem("referrals");
  if (data) {
    return JSON.parse(data);
  }
  return [];
};

export const addReferral = (referral: Referral): void => {
  const referrals = getReferrals();
  referrals.push(referral);
  localStorage.setItem("referrals", JSON.stringify(referrals));
};
export const updateReferral = (updated: Referral): void => {
  const referrals = getReferrals();
  const index = referrals.findIndex(
    (r) => r.phone_number === updated.phone_number
  );

  if (index !== -1) {
    referrals[index] = updated;
    localStorage.setItem("referrals", JSON.stringify(referrals));
  }
};



