export default class Logics {
	constructor(distance) {
		this.distance = distance;
		this.firstAttack = 100;
	}

	get attack() {
        return this.attackFinal();
    }

	distanceAttack(distance) {
		return 1 - (distance - 1) * 0.1;
	}

	attackFinal() {
		return this.firstAttack * this.distanceAttack(this.distance);
	}

	dope() {
		let dopeDrope = (this.attackFinal() - Math.log2(this.distance) * 5).toFixed(0);
		return parseInt(dopeDrope);
	}
}

