console.log('START');

function average(list) {
    let sum = 0;

    for (const item of list) {
        sum += item;
    }

    return sum / list.length;
}

const github = 'https://raw.githubusercontent.com/front-end-by-rimantas/45-grupe-fetch/master/data/marks.json';
const local = 'http://localhost:4512/data/marks.json';
const localError = 'http://localhost:4512/data/random.json';

try {
    const response = await fetch(localError);
    const data = await response.json();
    const marksAverage = average(data.marks);

    console.log(response);
    console.log(data);
    console.log('Studento vidurkis:', marksAverage);
} catch (err) {
    console.log('ERROR: kazkas blogai...');
    console.warn(err);
} finally {
    console.log('Ir cia paskutinis fetch-finally zingsnis...');
}

console.log('END');

