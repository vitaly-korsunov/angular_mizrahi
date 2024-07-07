module.exports = function () {
    var data = {
        students: [
            
            { id: 1, name: "Soccer Ball", department: 1, bdate:'2013-10-23',gender:"Male",active:true,level: 19.50 },
            { id: 2, name: "Corner Flags", department: 2, bdate:'2022-09-13',gender:"Female",active:true,level: 42.60 }  ,
            { id: 3, name: "Corner Flags", department: 3, bdate:'2023-10-09',gender:"Female",active:true,level: 49.50 }      
        ],
        departments: [
            { id: 1, department: "Soccer" },
            { id: 2,  department: "Chess" } ,
            { id: 3,  department: "Tenis" }   			
        ]
    }
    return data
}
 