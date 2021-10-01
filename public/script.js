const enterButton = document.getElementById('enter');
const input = document.getElementById('inputText');
const tableSection = document.getElementById('table-section');
const table = document.getElementById('table');
const tbody = document.getElementById('body-table');
const message = document.getElementById('message');


enterButton.addEventListener('click', (event) => {
  console.log(input.value)
  getresults(input.value);
  event.preventDefault();
});

/**
 * Llamado al backend con queryParam
 * @param {*} heightRef
 */
async function getresults(heightRef) {
  console.log(heightRef +"que ta pasandossss hpppp")
  const resp = await fetch(`api?input=${heightRef}`);
  
  const data = await resp.json();
  console.log(data)
  data.forEach((player)=>{
    const row = document.createElement('tr');
    row.innerHTML = renderTable(player);
    tbody.appendChild(row);

      
    
  });
   

  console.log('data from back', data);
  //printValues(data);
}

function renderTable(json) {
  const template =  `<tr>          
  <td>${json.first_name}  ${json.last_name} </td>
  </tr>`;
  return template;
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
