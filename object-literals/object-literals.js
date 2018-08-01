// Create your 'me' object literal here!
var me = {
firstName: "Carmi",
lastName: "Assaf-Shapira",
favoriteFoods: ["pizza", "pasta", "ice cream", "orange juice"],
age: 16,
picture: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg"
}
var x=JSON.stringify(me);
document.write(x);