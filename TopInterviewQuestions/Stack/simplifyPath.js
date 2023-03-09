function simplifyPath(path) {
   let parts = path.split("/")
   let stack = []
   for(let i=0;i<parts.length;i++){
    if(parts[i] == ".."){
        stack.pop()
    }else if(parts[i] !=="" && parts[i] !== "."){
        stack.push(parts[i])
    }
   }
   return "/" + stack.join("/")
  }
  path = "/home/"
  console.log(simplifyPath(path))