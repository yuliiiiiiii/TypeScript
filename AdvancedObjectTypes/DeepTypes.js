"use strict";
class OneSeries {
    constructor(props) {
        this.about = props;
    }
    ;
    getRobotId() {
        return `ID: ${this.about.general.id}`;
    }
}
const newBot = new OneSeries({ general: { id: 3, name: 'Otto' } });
console.log(newBot.getRobotId());
