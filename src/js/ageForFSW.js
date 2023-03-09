const csv = () => {
    fetch('csv/ageForFSW.csv').then(
        response => response.text()
    )
        .then(data => console.log(data))
        .catch(e => console.log(e))
};
export default csv

