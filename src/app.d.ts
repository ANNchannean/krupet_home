// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			user: import('$lib/server/auth').SessionValidationResult['user'];
			session: import('$lib/server/auth').SessionValidationResult['session'];
		}
	} // interface Error {}
	// interface Locals {}
} // interface PageData {}
// interface PageState {}

// interface Platform {}
export { };

declare module 'bakong-khqr' {
	export const khqrData: {
		currency: {
			usd: number;
			khr: number;
		};
	};

	export type merchantType = 'merchant' | 'individual';

	export interface IndividualInfo {
		bakongAccountID: string;
		merchantName: string;
		merchantCity?: string;
		accountInformation?: string;
		acquiringBank: string;
		currency?: number;
		amount?: number;
		billNumber?: string;
		storeLabel?: string;
		terminalLabel?: string;
		mobileNumber?: string;
		purposeOfTransaction?: string;
		languagePreference?: string;
		merchantNameAlternateLanguage?: string;
		merchantCityAlternateLanguage?: string;
		upiMerchantAccount?: string;
	}


	export class MerchantInfo implements MerchantInfo {
		constructor(
			bakongAccountID: string,
			merchantName: string,
			merchantCity: string,
			accountInformation: number,
			acquiringBank: string,
			optionalData: unknown
		);
		merchantID: string;
		bakongAccountID: string;
		merchantName: string;
		merchantCity?: string;
		accountInformation?: string;
		acquiringBank: string;
		currency?: number;
		amount?: number;
		billNumber?: string;
		storeLabel?: string;
		terminalLabel?: string;
		mobileNumber?: string;
		purposeOfTransaction?: string;
		languagePreference?: string;
		merchantNameAlternateLanguage?: string;
		merchantCityAlternateLanguage?: string;
		upiMerchantAccount?: string;
	}


	export interface SourceInfo {
		appIconUrl: string;
		appName: string;
		appDeepLinkCallback: string;
	}

	export interface KHQRResponse {
		status: { code: number; errorCode: null | number; message: null | string };
		data: null | unknown;
	}

	export class BakongKHQR {
		constructor();
		generateIndividual(individualInfo: IndividualInfo): KHQRResponse;
		generateMerchant(merchantInfo: MerchantInfo): KHQRResponse;
		static generateDeepLink(url: string, qr: string, sourceInfo?: SourceInfo): Promise<KHQRResponse>;
		static verify(qr: string): { isValid: boolean };
		static decode(qr: string): KHQRResponse;
		static checkBakongAccount(url: string, accountID: string): Promise<{ bakongAccountExisted: boolean }>;
	}
}