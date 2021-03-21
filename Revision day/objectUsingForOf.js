var city = {
    1: "Delhi",
    "b": "Mumbai",
    key: "chennai"
};

for (var i of Object.keys(city)) {
    console.log(i + " = " + city[i])
}