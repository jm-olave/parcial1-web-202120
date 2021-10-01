const { getPairsOfPlayers } = require("./controller");




    // crear tabla
    function filterPlayers(pulgadas) {
        let json= [];
        fetch(
            `https://gist.githubusercontent.com/jhonatan89/bc554ec3ded15407609714e8b7b8f1c8/raw/5ab1e3e5b45e99aabcbbdd30f55d2ae5eafb9cbe/nba-players`
        )
            .then((resp) => resp.json())
            .then((data) => {
               json =  data.data;
            });
        let hashMap = {},
        results = []

          for (let i = 0; i < json.length; i++){
              if (hashMap[json[i]]){
                  results.push([hashMap[json[i]], json[i]])
              }else{
                  hashMap[pulgadas - json[i].h_in] = json[i];
              }
            }
            if(results.length ==  0 )
            {
                return "“No matches found";
            }
            return results;
      }

      module.exports = {filterPlayers};
     



    //   function renderTable(json) {
    //     const template =  getPlayerRowTemplate(json);
    //     return template;
    //   }


    //   function addListenerSubmitButton(node,json) {
    //     node.addEventListener('click', () => {
            
    //         const inputText = document.getElementById('inputText')
    //         pulgadas = inputText.innerHTML 
            


    //       });
    //   }

