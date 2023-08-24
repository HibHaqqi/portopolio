const persons = [];

class Person {
    constructor(
        name,
        gender
    ) {
        this.name = name;
        this.gender = gender;
        // 1. Tambahkan di constructor untuk set value gender
    }

    setName(name){
        this.name = name ;
        return this
    }

    setGender(gender){
        const genders = ["L", "P"];
        if (genders.includes(gender)) {
            this.gender =gender;
            
        } else{
            console.error("inputan salah");
        }
        return this;
    }
    setTitle() {
        
        if (this.gender==="L") {
            this.name = "Tuan " + this.name
             
        } else {
            this.name = "Nyonya " + this.name;
        }
        // 2. tambahkan argument untuk set title, jika gender L = "Tuan " apabila P = "Nyonya", maka nilai 
            // name nya menjadi contoh, 
            // name = Tuan Jhon
    }

    static find(name) {
        return persons.find((person=>person.name ===name));
        // 6. tambahkan argument untuk pungsi pencarian dari array persons berdasarkan nama.
    } 
}

let person1 = new Person("Adam", "L"); 
person1.setTitle();
let person2 = new Person("hawa", "P"); 
person2.setTitle();
let person3 = new Person();
person3.name = "Agung"
person3.gender = "L"
person3.setTitle()

let person4 = new Person();
person4.setName("Faisal").setGender("Laki").setTitle();

// 3. buat kan 2 object person
    // 1 person laki laki
    // panggil funsi setTittle dari object person 
    // 1 person perempuan
    // panggil funsi setTittle dari object person 

persons.push(person1,person2,person3,person4);
    // 4. setiap object person nya ditambahkan ke array object persons

// 5. tampilkan object persons.
console.log(persons);

// 7. panggil fungsi Person.find(name) dan muncul kan object person berdasarkan nama yang di input.
const findPerson = Person.find("Nyonya hawa");
console.log(findPerson);
console.log(person1.name);

const siswa =[];
class Students extends Person{
    setClass(kelas){
        this.kelas = kelas 
        return this
        
    }
    setSchool(sekolah){
        this.sekolah = sekolah;
        return this

    }
}

const student1 = new Students();
const student2 = new Students();
student1.setName("jarwo").setGender("L").setClass(2).setSchool("SMP sukodadi");
student2.setName("Mona").setGender("P").setClass(2).setSchool("SMP sukodadi");
siswa.push(student1);
siswa.push(student2);

console.log(siswa);