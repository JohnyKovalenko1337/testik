let users = [];
const n = 100;
for(let i = 0; i < n; i++) {
  const obj = {
    name: `Fake User ${i}`,
    id: i
  };
  users.push(obj);
};

  function processUser(id) {
    let random = (Math.floor(Math.random() * 10) + 1) * 100;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Waited: ', random);

        resolve(id);
      }, random);
    });
  }

  
  function startRecursive() {
    // Fetch 10 users from the array
    // Call processUser(users[i].id)
    // Process those 10 users in parallel
    // Wait for those 10 to finish processing
    // Then sum the result of the promise
    // Then recursivly run the next 10 users...
    // Until the `users` array is empty

    // Then finally spit out total collect sum .
    // Your response should be "Total: 4950"

        let Array_sum = [];
        let arr = [];

        promiseResult=(arr)=>{                      // making sum of items from promise
            return Promise.all([...arr])                 //returning sum by waiting for all promises
            .then(res => {
                return res.reduce(function(sum, current) {
                return sum + current;
                }, 0);
            });
        }

        Adding_10_id= ()=> {
            for (let i = 9; i >= 0; i--) {                        
                const user = users.splice(i, 1);                      //deleting item from data array
                arr[i] = processUser(user[0].id).then(userId => {     // starting of pending promise and returning element 
                return(userId);
                });
            }

            Array_sum = Array_sum.concat(promiseResult(arr));       //making array from sum of 10 elems
            if (users.length !== 0) {                              // if data array isnt empty
                Adding_10_id();                                    //recursivly run
            }
            else{
                return promiseResult(Array_sum);        //returns result
            }                                   
        }

    return Adding_10_id();
  }

  startRecursive().then(total => {
    console.log('Total: ', total);
  });
