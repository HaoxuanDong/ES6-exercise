function fetchData(url, callback) {
    console.log(`Fetching data from ${url}...`);

    setTimeout(() => {
        const data = `Data from ${url}`;
        callback(data);
    }, 2000); // simulate 2-second delay
}

// Example usage:
fetchData("https://catfact.ninja/fact", (data) => {
    console.log("Callback received:", data);
});


function fetchData(url) {
    return new Promise((resolve, reject) => {
        if (!url) {
            reject("Invalid URL");
            return;
        }

        console.log(`Fetching data from ${url}...`);

        setTimeout(() => {
            const data = `Data from ${url}`;
            resolve(data);
        }, 2000);
    });
}


fetchData("https://catfact.ninja/fact")
    .then((data) => {
        console.log("Promise resolved:", data);
    })
    .catch((error) => {
        console.error("Promise rejected:", error);
    });


    async function loadData(url) {
    try {
        const data = await fetchData(url); // fetchData from Part 2
        console.log("Async/Await received:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}


loadData("https://catfact.ninja/fact");
loadData(""); 
