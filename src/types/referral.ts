import type { BONUS_STATUS, ENGLISH_LEVEL, STATUS } from "@/consts";

export type Referral = {
    full_name: string;
    phone_number: string;
    english_level: EnglishLevel;
    status: Status;
    created_at: string;
    created_by: string;
    comments?: string;
    bonus_status?: BonusStatus;
    bonus_value?: number;
};

export type Status =  typeof STATUS[number];

export type BonusStatus = typeof BONUS_STATUS[number];

export type EnglishLevel = typeof ENGLISH_LEVEL[number];

