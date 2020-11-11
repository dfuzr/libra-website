export default class Intent {
    constructor(hrp, address, subAddress, currency, amount) {
        this.hrp = hrp;
        this.address = address;
        this.subAddress = subAddress;
        this.currency = currency;
        this.amount = amount;
    }
}
