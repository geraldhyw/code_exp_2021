let bulletinList = [
  {
    id: 1,
    name: "Amy",
    phone: "98765432",
    postal: "123456",
    unit: "05-05",
    items: [{
      title: "HL Milk 1L",
      quantity: "2"
    }]
  },
  {
    id: 2,
    name: "Ben",
    phone: "98769876",
    postal: "123456",
    unit: "06-06",
    items: [{
      title: "Eggs (10)",
      quantity: "1"
    }]
  },
  {
    id: 3,
    name: "Carl",
    phone: "98989898",
    postal: "123455",
    unit: "07-07",
    items: [{
      title: "Green Tea (6 Cans)",
      quantity: "1"
    }]
  },
];

export function getBulletinList() {
  return bulletinList;
}

export function addBulletinList(favor) {
  bulletinList = [...bulletinList, favor];
}

export function removeBulletinList(favor) {
  bulletinList = bulletinList.splice(bulletinList.indexOf(favor), 1);
}