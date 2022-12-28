const count = document.getElementById("viewCount");


const api = 'https://api.countapi.xyz/update/view-v/you/?amount=1'
async function getcount()
{
    const response = await fetch(api);
    const updateCount = await response.json();
    console.log(updateCount)
    count.innerHTML = updateCount.value;

  
}
getcount()
 

