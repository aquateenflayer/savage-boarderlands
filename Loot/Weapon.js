class Weapon extends Loot {

	constructor() { 
		super();

		this.model = "";
		this.brand = "";
		this.damage = null;
		this.fireType = "";
		this.rateOfFire = 0;
		this.weight = 0;
		this.clipCapacity = 0;
		this.strength = 0;
		this.aP = 0;
		this.aiming = "";
		this.bayonet = BAYONET.NONE;
		this.clipCapacityMultiplier = 1;
		this.bulletDamageLevels = null;
		this.snapfirePenalty = 0;
		this.specialDamage = null;
	}
}