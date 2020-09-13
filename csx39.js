let dataReceived; 

function ajaxSimulate(id, callback) {
  const database = ['Aaron', 'Barbara', 'Chris'];
  // Add code here
  return setTimeout(() => {callback(database[id])}, 0)
}
function storeData(data) {
  	dataReceived = data;
  	console.log(dataReceived)
}
ajaxSimulate(1, storeData)
