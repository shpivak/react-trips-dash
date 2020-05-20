import data from '../mockData/trips_raw.json';

const getAllUsers = async (filter) => {
    console.log(filter);
    let retData = mixAndSpice(data);
    retData = filterData(retData, filter);
    return retData;
}
function mixAndSpice(_data) {
    let emps = ['בנק הפועלים', 'דיסקונט', 'לאומי'];
    for (let i = 0; i < _data.length; i++) {
        _data[i].Employer = emps[Math.floor(Math.random() * 2.2)];
    }
    return _data;
}

function filterData(_data, filter) {
    for (const key in filter) {
        _data = _data.filter((obj) => { return obj[key] === filter[key]; });
    }
    return _data;
}
export default getAllUsers;