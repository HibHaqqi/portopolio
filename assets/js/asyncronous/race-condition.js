class Hewan {
    constructor(jenis, name) {
        this.jenis = jenis;
        this.name = name;

    }

    suara() {
        console.log("Meraung");
        return this;
    }
    memakan(param) {
        this.makanan = param;
        return this;
    }

    memakanWithProcessLama(param) {
        setTimeout(() => {
            this.makanan = param;
        })
        return this;

    }
    memakanWithProcessLamaCallback(param,callback) {
        setTimeout(()=>{
            this.makanan = param;
            callback(this.makanan)
        },10)
    }
    tampilkanMakanannya() {
        console.log(`${this.name} memakan ${this.makanan}`);
        return this;
    }


}

function main() {
    new Hewan("unggas", "ayam")
        .memakan("gabah")
        .tampilkanMakanannya();


    //race
    const sapi = new Hewan("mamalia", "sapi");
    sapi.memakanWithProcessLama("RUmput");
    sapi.tampilkanMakanannya();

    //fix race condition with callback
    const singa = new Hewan("Mamalia", "singa");
    singa.memakanWithProcessLamaCallback("Daging",()=>{
        singa.tampilkanMakanannya()});

}

main();