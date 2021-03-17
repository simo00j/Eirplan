let companies = [
  { _id: 1, name: "Entreprise1", keywords: ["info", "elec", "matmeca"] },
  { _id: 2, name: "Entreprise2", keywords: ["matmeca"] },
  { _id: 3, name: "Entreprise3", keywords: ["info", "elec", "aerosptatial", "développement web"]  },
  { _id: 4, name: "Entreprise4", keywords: ["info", "elec", "micro-mécanique", "bordeaux"] },
  { _id: 5, name: "Entreprise5", keywords: ["elec", "info", "jeux-vidéos"] },
  { _id: 6, name: "Entreprise6", keywords: ["info", "télécommunications", "5G", "bordeaux"]  }
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

