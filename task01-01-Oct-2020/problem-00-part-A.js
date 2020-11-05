// Playing with JSON object’s Values:
// Fluffy sorry, Fluffyy is my fav cat and it has 2 catFriends
// Write a code to get the below details of Fluffyy so that
// I can take him to vet.
var cat = {
    name: "Fluffy",
    activities: ["play", "eat cat food"],
    catFriends: [
        {
            name: "bar",
            activities: ["be grumpy", "eat bread omblet"],
            weight: 8,
            furcolor: "white"
        },
        {
            name: "foo",
            activities: ["sleep", "pre-sleep naps"],
            weight: 3
        }
    ]
}


// Add height and weight to Fluffy
cat.height = 1;
cat.weight = 5;

// Fluffy name is spelled wrongly.Update it to Fluffyy
cat.name = "Fluffyy";

//List all the activities of Fluffyy’s catFriends.
cat.catFriends.forEach(x=>{console.log(...x.activities)});

//Print the catFriends names.
cat.catFriends.forEach(x => { console.log(`name : ${x.name}`)});

//Print the total weight of catFriends
const totalWeight = cat.catFriends.reduce((acc,cur)=>acc+cur.weight,0);
// const totalWeight = cat.catFriends.reduce((a, b) => a.weight + b.weight);

console.log(`Total weight of catFriends: ${totalWeight}`);

//Print the total activities of all cats (op:6)

//Add 2 more activities to bar & foo cats
cat.catFriends[0].activities.push("drink milk");
cat.catFriends[1].activities.push("drink honey");

console.log(cat.catFriends)

//Update the fur color of bar
cat.catFriends[0].furcolor="orange";
console.log(cat.catFriends[0].furcolor) //orange

