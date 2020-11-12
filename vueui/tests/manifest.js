module.exports = {
  variables: {
    header: "default",
  },
  common: {
    assets: [],
    active: "view-manifest",
    uiref: "0x0000",
    title: "Crew Manifest",
    wtime: 0,
  },
  sets: [
    {
      state: {
        manifest: {
          heads: [
            { name: "Hae Su-Yeongseon", rank: "Chief Engineer", active: "Active" },
            { name: "Khaled Al-Bastaki", rank: "Head of Security", active: "Active" },
            { name: "Xiao Zemin", rank: "Research Director", active: "Active" },
          ],
          sec: [
            { name: "Yukio Takano", rank: "Security Officer", active: "Active" },
            { name: "Khaled Al-Bastaki", rank: "Head of Security", active: "Active" },
            { name: "Leah Staymates", rank: "Detective", active: "Active" },
            { name: "Tal Ravis", rank: "Forensic Technician", active: "Active" },
          ],
          eng: [
            { name: "Kaehse Aras", rank: "Station Engineer", active: "Active" },
            { name: "Naledi Ahmehlo", rank: "Atmospheric Technician", active: "Active" },
            { name: "Hae Su-Yeongseon", rank: "Chief Engineer", active: "Active" },
            { name: "Syd Robinson", rank: "Engineering Apprentice", active: "Active" },
          ],
          med: [
            { name: "Kar'skalzi Bollu", rank: "Emergency Medical Technician", active: "Active" },
            { name: "Max Shian", rank: "Medical Intern", active: "Active" },
            { name: "Monte Boer", rank: "Physician", active: "Active" },
            { name: "Mending Deep Wounds", rank: "Surgeon", active: "Active" },
          ],
          sci: [
            { name: "Craig Phinmen", rank: "Xenobotanist", active: "Active" },
            { name: "Amanda Johansson", rank: "Lab Assistant", active: "Active" },
            { name: "Xiao Zemin", rank: "Research Director", active: "Active" },
            { name: "Paul Lucy", rank: "Scientist", active: "Active" },
          ],
          car: [
            { name: "Nikita Yutani", rank: "Quartermaster", active: "Active" },
            { name: "Kazika Leazi", rank: "Drill Technician", active: "Active" },
          ],
          civ: [
            { name: "Arwa Nixon", rank: "Consular Officer", active: "Active" },
            { name: "Makjurl Hrarvahrrhaz", rank: "Visitor", active: "Active" },
            { name: "Jemuzu Yamoto", rank: "Librarian", active: "Active" },
            { name: "Valentin Greene", rank: "Bartender", active: "Active" },
            { name: "Michael Lindbergh", rank: "Corporate Liaison", active: "Active" },
            { name: "Hadriana Antonia", rank: "Assistant", active: "Active" },
          ],
          bot: [],
          misc: [],
        },
      },
    },
  ],
}
