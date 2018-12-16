class PistolImprovements {

	improve(loot, rollValue) {
		if ( rollValue <= 20 ) { 
			this.damage();
		}
	}

	damage(loot) { console.log( "damage improvment called" ); }

	range(loot) { console.log( "range improvment called" ); }

	clipCapacity(loot) { console.log( "clipCapacity improvment called" ); }

	ap(loot) { console.log( "ap improvment called" ); }

	specialDamage(loot) { console.log( "specialDamage improvment called" ); }

	stability(loot) { console.log( "stability improvment called" ); }

	aiming(loot) { console.log( "aiming improvment called" ); }

	shootingMode(loot) { console.log( "shootingMode improvment called" ); }

	barrels(loot) { console.log( "barrels improvment called" ); }

	bayonet(loot) { console.log( "bayonet improvment called" ); }
}