
export default class DnKvsMap {

    static map2Valve = new Map();
    static map3Valve = new Map();

    static getDnKvsMap(valveAmount) {
        valveAmount = parseInt(valveAmount, 10);
        if (valveAmount === 2) {
            if (this.map2Valve.size === 0) {
                this.map2Valve.set('DN15', ['1', '1.6', '2.5', '4', '6.3', '10']);
                this.map2Valve.set('DN20', ['4', '6.3', '10']);
                this.map2Valve.set('DN25', ['6.3', '10', '16']);
                this.map2Valve.set('DN32', ['10', '16', '25']);
                this.map2Valve.set('DN40', ['16', '25', '40']);
                this.map2Valve.set('DN50', ['25', '40', '63']);
            }
            return this.map2Valve;
        } else if (valveAmount === 3) {
            if (this.map3Valve.size === 0) {
                this.map3Valve.set('DN15', ['1.6', '2.5', '4', '6.3']);
                this.map3Valve.set('DN20', ['4', '6.3']);
                this.map3Valve.set('DN25', ['10']);
                this.map3Valve.set('DN32', ['16']);
                this.map3Valve.set('DN40', ['25']);
                this.map3Valve.set('DN50', ['40']);
            }
            return this.map3Valve;
        }
    }

}