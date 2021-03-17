let companies = [
  { _id: 1, name: "Entreprise1", id_floor:  1, start_hour: "12:00", end_hour: "14:00", responsable: "David", keywords: ["info", "elec", "matmeca"] },
  { _id: 2, name: "Entreprise2", id_floor:  1, start_hour: "13:00", end_hour: "17:00", responsable: "Pierre", keywords: ["matmeca"] },
  { _id: 3, name: "Entreprise3", id_floor:  1, start_hour: "8:00", end_hour: "19:00", responsable: "Jacques", keywords: ["info", "elec", "standze", "stand2", "rue", 'argent']  },
  { _id: 4, name: "Entreprise4", id_floor:  2, start_hour: "10:00", end_hour: "18:00", responsable: "Mireille", keywords: ["infoezrz", "electr", "matmecazer"] },
  { _id: 5, name: "Entreprise5", id_floor:  2, start_hour: "11:00", end_hour: "12:00", responsable: "Gus", keywords: ["matmecazz"] },
  { _id: 6, name: "Entreprise6", id_floor:  1, start_hour: "11:00", end_hour: "11:15", responsable: "Bob", keywords: ["inforr", "eleec"]  }
]

module.exports = companies;

let salon = [
  { _id: 1, name: "Ingenib" },
  { _id: 2, name: "Salon de coiffure"}
]


let floor = [
  { _id: 1, name: "Rez de chaussée", SVG_path: "./react-frontend/src/svg.js", id_salon: 1},
  { _id: 2, name: "Etage 1", id_salon: 1},
  { _id: 3, name: "Rdc", id_salon: 2}
]

