let acceptList = [];

export function getAcceptList() {
  return acceptList;
}

export function addAcceptList(favor) {
  acceptList = [...acceptList, favor];
}

export function removeAcceptList(favor) {
  acceptList.splice(acceptList.indexOf(favor), 1);
}