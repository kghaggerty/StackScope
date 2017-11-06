//<(^-^)>
//The goal of this exercise is take all the trees listed in FOREST--convert them into logs(4 per tree) and store them in 10 storage containers.  Each container can hold 15 logs.
//Each storage container can hold 15 logs of wood, Each tree makes 4 logs
 


//Create a generator function that calls the containers. There will be 10 available storage containers.
const treeContatinerGenerator = function* () {
    let currentContainer = 1
    const maximumContainers = 10

    while (currentContainer <= maximumContainers) {
        yield { "id": currentContainer, "type": "tree", "bushels": []}
        currentContainer ++
    }

}

//Creating an instance of the generator function
const treeContainerFactory = treeContatinerGenerator()

//Create a space to hold all of the trees
let forest = [
    {
        "type": "Oak",
        "trees": 9
    },
    {
        "type": "Pine",
        "trees": 12
    },
    {
        "type": "Ash",
        "trees": 6
    },
    {
        "type": "Balsa",
        "trees": 10
    }
]

//Creating a skope function to process each tree

const treeStackScope = function (rawTrees) {

    //Using array map() method to build a new array with the populated trees
    const processedTrees = rawTrees.map(
    
    //for each crop, return new object representing the trees to store in the containers    
    currentTree => ({
        "type": currentTree.type,
        "bushels": Math.floor(currentTree.trees * 4)

    })
    )
    //calling the function 
    return processedTrees
}
//Array to hold all of the gathered resrouces to be stored.
treeStackScope.containers = [] 

let allBushels = treeStackScope(forest)


//Opening the first container.  Defining current container to hold the logs
let currentContainer = treeContainerFactory.next().value

//Iterating over the all trees array with a for each loop

allBushels.forEach (
    //Looking deeper in the array at each specific object with a for loop
    currentBushel => {
        //for loop
        for (let index = 0; index < currentBushel.bushels; index++) {
           //Insert each object into new storage container
            const bushel = {"type": currentBushel.type}
            currentContainer.bushels.push(bushel)

            //Once the container is full, use the next storage container
            if (currentContainer.bushels.length === 15) {
                treeStackScope.containers.push(currentContainer)
                currentContainer = treeContainerFactory.next().value
            }
        }
    }

)

//If a container isn't fully filled, add it to the collection of storage containers
if (currentContainer.bushels.length > 0) {
    treeStackScope.containers.push(currentContainer)
}

//Look inside containers
console.log(treeStackScope.containers)










/*function add (a,b) {
    return a + b
}
console.log(add(1,1)) */


function add (a, b) {
    return a + b
}

console.log(add(1, 4))

