(function () {
    $('section').hide();
})();

const renderEmployees = function(employeeList) {
    for (var i in employeeList) {
        const employeeName = employeeList[i].name;
        const employeeOfficeNum = employeeList[i].officeNum;
        const employeePhoneNum = employeeList[i].phoneNum;

        const employeeDiv = $('div').append(`${employeeName}<br>${employeeOfficeNum}<br>${employeePhoneNum}`)
    }
    return employeeDiv
}

const showView = function() {
    $('section').hide();
    $('#view').show();
    renderEmployees(employeeList);
};

const showAdd = function() {
    $('section').hide();
    $('#add').show();
};

const showVerify = function() {
    $('section').hide();
    $('#verify').show();
};

const displayAddedEmployeeList = function() {
    $('section').hide();
    $('#verify').show();
};


$('#viewBtn').on('click', showView);
$('#addBtn').on('click', showAdd);
$('#verifyBtn').on('click', showVerify);

$('#addEmployeeBtn').on('click', displayAddedEmployeeList);
$('#verifyEmployeeBtn').on('click', displayVerifiedEmployeeList);