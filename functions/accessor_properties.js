const serialNum = {

    _n : 0,

    get next() { return this._n++; },

    set next(n) {

        if(n > this._n) 
            this._n = n;
        else
            throw new Error("The value can only be greater than the previous value");
    }

};

serialNum.next = 10;
console.log(serialNum.next);
console.log(serialNum.next);