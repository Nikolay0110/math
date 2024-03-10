import Logics from './logics'

export default class Magician extends Logics {
    constructor(distance, stoned) {
        super(distance);
        this.stoned = stoned;
    }

    get stoned() {
        return this._stoned;
    }

    set stoned(value) {
        this._stoned = value;
    }

    get attack() {
        if (this._stoned) {
            return this.dope();
        } else {
            return this.attackFinal();
        }
    }
}