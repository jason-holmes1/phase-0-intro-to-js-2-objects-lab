const employee = {
    name: "Jason",
    streetAddress:  "111 south street"
};

function updateEmployeeWithKeyAndValue(employee,key,value){
const update = {...employee};
update[key]= value;
return update;
    }

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
employee[key]=value;
return employee;
}
function deleteFromEmployeeByKey(employee,key){
const update = {...employee}
update[key]=undefined;
return update;
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
delete employee[key];
return employee;
}