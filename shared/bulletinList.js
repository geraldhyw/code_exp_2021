let bulletinList = [
  {
    id: 1,
    name: "Amy",
    phone: "98765432",
    postal: "123456",
    unit: "05-05",
    description: "HL Milk 1L",
    tip: "1.00",
    title: "Buy me some milk"
  },
  {
    id: 2,
    name: "Ben",
    phone: "98769876",
    postal: "123456",
    unit: "06-06",
    description: "A dozen of eggs",
    tip: "2.00",
    title: "Buy me some eggs"
  },
  {
    id: 3,
    name: "Carl",
    phone: "98989898",
    postal: "123455",
    unit: "07-07",
    description: "Green Tea (6 Cans)",
    tip: "2.00",
    title: "Buy me some drinks"
  },
];

export function getBulletinList() {
  return bulletinList;
}

export function addBulletinList(favor) {
  bulletinList = [...bulletinList, favor];
}

export function removeBulletinList(favor) {
  bulletinList.splice(bulletinList.indexOf(favor), 1);
}