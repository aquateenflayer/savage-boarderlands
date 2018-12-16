class WeaponDamage {

    constructor(diceRolled = 0 , diceSided = 0 , modifier = 0) {
        this.diceRolled = diceRolled;
        this.diceSides = diceSided;
        this.modifier = modifier;
        this.element = "";
    }

    toString() {
        return this.diceRolled + "d" + this.diceSides + this.getModifier();
    }

    getModifier() {
        if (this.modifier > 0) {
            return '+' + this.modifier.toString();
        } else if (this.modifier < 0) {
            return this.modifier.toString();
        }

        return '';
    }
}