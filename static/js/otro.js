// var data = [{
//     "agegroup": "18-24",
//         "gender": "M",
//         "group": 1,
//         "scores": 0.04,
//         "total": 1
// }, {
//     "agegroup": "45-54",
//         "gender": "F",
//         "group": 2,
//         "scores": 2.23,
//         "total": 13
// }, {
//     "agegroup": "25-34",
//         "gender": "M",
//         "group": 1,
//         "scores": 0.74,
//         "total": 6
// }, {
//     "agegroup": "25-34",
//         "gender": "M",
//         "group": 2,
//         "scores": 1.47,
//         "total": 8
// }, {
//     "agegroup": "18-24",
//         "gender": "F",
//         "group": 1,
//         "scores": 2.88,
//         "total": 7
// }, {
//     "agegroup": "35-44",
//         "gender": "F",
//         "group": 2,
//         "scores": 3.98,
//         "total": 14
// }];
var data = JSON.parse("static/data/MOCK_DATA.json");
console.log(data);
var ndx = crossfilter(data);
    var tableDim = ndx.dimension(function (d) {
        return d.gender;
    });
    
    var dataTable = dc.dataTable("#someTable");
    dataTable.width(300).height(800)
        .dimension(tableDim)
        .group(function (d) {
        return "Counts";
    })
        .columns([
    function (d) {
        return d.id;
    },
    function (d) {
        return d.first_name;
    },
    function (d) {
        return d.last_name;
    },
    function (d) {
        return d.email;
    },
    function (d) {
        return d.gender;
    },
    function (d) {
        return d.ip_address;
    }]);
    
    dc.renderAll();