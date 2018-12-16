class Loot {

	constructor() {
		this.category = "";
		this.quality = "";	
		this.improvements = {};
		this.limit = 0;
		this.more = 0;
	}

	static generate() {
		console.log( "GENERATING LOOT!!!" );

		let generator = new Generator();
		return generator.generate();
	}
}