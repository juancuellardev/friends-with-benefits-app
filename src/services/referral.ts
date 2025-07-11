import type { Referral } from "@/types/referral"


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

export const updateReferral = (index: number, referral: Referral): void => {
  const referrals = getReferrals();
  if (index !== -1) {
    referrals[index] = referral;
    localStorage.setItem("referrals", JSON.stringify(referrals));
  }
};


