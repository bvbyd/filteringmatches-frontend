import { City } from "./City"

export interface Person {
    id?: number;
    displayName?: string;
    age?: number;
    jobTitle?: string;
    heightInCm?: number;
    city?: City;
    mainPhoto?: string;
    compatibilityScore?: number;
    contactsExchanged?: number;
    favourite?: boolean;
    religion?: string;
}