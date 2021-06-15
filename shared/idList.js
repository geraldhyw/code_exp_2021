let idList = [1, 2, 3];

export function generateId() {
  for (let i = 1; i < 100000; i ++) {
    if (!idList.includes(i)) {
      addId(i);
      return i;
    }
  }
}

function addId(id) {
  idList.push(id);
}

export function removeId(id) {
  idList.splice(idList.indexOf(id), 1);
}