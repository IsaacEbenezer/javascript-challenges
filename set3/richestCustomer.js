var maximumWealth = function(accounts) {
    let all = []
    for (let i = 0; i < accounts.length; i++) {
        const sum = accounts[i].reduce((acc, curr) => acc + curr);
        all.push(sum)
    }
    return Math.max(...all)
};
accounts = [[1,5],[7,3],[3,5]]
console.log(maximumWealth(accounts))