let requestList = [];

export function getRequestList() {
  return requestList;
}

export function addRequestList(favor) {
  requestList = [...requestList, favor];
}

export function removeRequestList(favor) {
  requestList = requestList.splice(requestList.indexOf(favor), 1);
}