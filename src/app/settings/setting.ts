export class Setting {
	reference: string;
	headline: string;
	subHeadline: string;

	constructor(reference: string,
							headline: string,
							subHeadline: string = '') {
		this.reference = reference;
		this.headline = headline;
		this.subHeadline = subHeadline;
	}
}
