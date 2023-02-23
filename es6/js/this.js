const obj = {
    name: 'takbir',
    age: 23,
    isMarried: false,
    activities: function(){
        console.log(this.name)
    }
};
obj.activities();