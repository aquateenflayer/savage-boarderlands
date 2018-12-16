class Generator {

	generate() { 

		this.loot = new Loot();
		this.improvementType; 
		this.generateCategory();
		this.generateQuality();

		switch(this.loot.category) { 

			case(CATEGORY.PISTOL): { 
				this.generatePistol();
				break;
			}

			default: break;
		}

		this.generateQuality();
		this.generateImprovements();

		return this.loot;
	}

	static roll(dx) {
		var result = Math.floor((Math.random()*dx)+1);
		return result;
	}

	generatePistol() { 
		this.improvements = new PistolImprovements();
	}	

	generateCategory() {
		this.loot.category = CATEGORY.PISTOL;
	}

	generateQuality() { 
		let roll = Generator.roll(20);

		if ( roll <= 12 ) { this.loot.quality = QUALITY.GREEN; }
		else if ( roll <= 17 ) { this.loot.quality = QUALITY.BLUE; }
		else if ( roll <= 19 ) { this.loot.quality = QUALITY.PURPLE; }
		else { this.loot.quality = QUALITY.ORANGE; }
	}

	generateImprovements() {
		let roll = Generator.roll(20);
		this.improvements.improve(this.loot, roll);
	}
}