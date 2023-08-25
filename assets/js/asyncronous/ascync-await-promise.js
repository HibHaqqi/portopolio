class Burung {
    constructor(name, warna) {
        this.name = name;
        this.warna = warna;
    }

    /**
     * production code
     */
    burungTerbang() {
        const burungTakTerbang = ["bebek", "ayam"]
        return new Promise((resolve, reject) => {
            if (burungTakTerbang.includes(this.name.toLowerCase())) {
                return reject(`maaf burung ${this.name} tidak bisa terbang`)
            }

            resolve(`Burung ${this.name} sedang terbang`)
        })
    }

    async tampilkanWarna(){
        return this.warna;
    }
}

const mainPromise =  ()=>{
    const ayam = new Burung("Ayam","hitam");
    

    //consuming
    const terbang = ayam.burungTerbang()
    .then(resolve=>
        console.log("successs : " + resolve)
    )
    .catch(reject=>
        console.log("failed :" + reject)

    );
}

const main = async()=>{
  

    const kakatua = new Burung("kakatua", "biru");
    const kakaktuaTerbang = await kakatua.burungTerbang();
    try {
        console.log("successs : " + kakaktuaTerbang)
        console.log("success2 :" + await kakatua.tampilkanWarna());
    } catch (error) {
        console.log("failed :" + error)
    }

    
    
        
}




mainPromise()
main()