"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Intent {
    constructor(hrp, address, subAddress, currency, amount) {
        this.hrp = hrp;
        this.address = address;
        this.subAddress = subAddress;
        this.currency = currency;
        this.amount = amount;
    }
}
exports.default = Intent;
