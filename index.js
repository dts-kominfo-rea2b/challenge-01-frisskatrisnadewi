// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

//gender
let genderP = new Map()
genderP.set("Monica","Female");
genderP.set("Wendy","Male");
let genderWin= genderP.get("Wendy")
let genderMon= genderP.get("Monica")

//age
let Pet = ["Yes","No"]

//monica's fav color
let MonCol = new Set()
MonCol.add("Yellow");
MonCol.add("Pink");
MonCol.add("White");
MonCol.add("Purple");

//wendy's fav color
let WenCol = new Set()
WenCol.add("Blue");
WenCol.add("Black");
WenCol.add("Grey");

//favResto Monica
// let MonFood= new Set()
// MonFood.add("Bento")
// MonFood.add("Sushi")
// MonFood.add("Panecake")
// MonFood.add("Eggy")
// MonFood.add("Tempura")
// MonFood.add("Bento")
// MonFood.add("Eggy")
// MonFood.add("Padang")
// MonFood.add("Tteok")
// MonFood.add("Sushi")
// MonFood.add("Sushi")

//favResto Wendy
// let wenFood= new Set()
// wenFood.add("Tempura")
// wenFood.add("Bento")
// wenFood.add("Sushi")
// wenFood.add("Panecake")
// wenFood.add("Katsu")
// wenFood.add("Padang")
// wenFood.add("Geprek")
// wenFood.add("Panecake")
// wenFood.add("Eggy")

//education Monica
const monSD= {
    name: "SD 01", 
    city: "Jakarta", 
    graduate: "2016"
}

const monSMP= {
    name: "SMP 02", 
    city: "Jakarta", 
    graduate: "2019"
}
const monSMA= {
    name: "SMA 03", 
    city: "Tangerang"
}

// wendy edu
const wenSD={
    name: "SD 02", 
    city: "Jakarta", 
    graduate: "2010"
}
const wenSMP={
    name: "SMP 03", 
    city: "Bogor", 
    graduate: "2013"
}

const wenSMA={
    name: "SMA 01", 
    city: "Surabaya", 
    graduate: "2016"
}
const wenKul={
    name: "Universitas Maju", 
    city: "Tangerang"
}


//objects
const firstUser = {
    name: "Monica", 
    gender:genderMon,
    age: "17",
    email: "monica@dingdong.com",
    favoriteColor: MonCol,
    isHavePet: Pet[0],
    education: [monSD,monSMP,monSMA],
    favoriteRestaurant:["Bento", "sushi", "panecake", "eggy", "tempura","padang","tteok"]
};

const secondUser = {
    name: "Wendy", 
    gender:genderWin,
    age: "23",
    email: "wendy@dingdong.com",
    favoriteColor: WenCol,
    isHavePet: Pet[1],
    education: [wenSD,wenSMP,wenSMA,wenKul],
    favoriteRestaurant:["Tempura","Bento","sushi","padang","katsu","panecake","geprek","eggy"]
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser,secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};