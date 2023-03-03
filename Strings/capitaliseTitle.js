//Capitalize the Title

function capitaliseTitle(title){
    let res = []
    title.toLowerCase().split(' ').forEach(item => {
        if(item.length > 2) {
            res.push(item[0].toUpperCase() + item.slice(1));
        }
        else res.push(item)
    })
    return res.join(' ')
}
let title = "First leTTeR of EACH Word"
console.log(capitaliseTitle(title))