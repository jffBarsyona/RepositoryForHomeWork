function friday13 (date1, date2) 
{
    let currentDate = new Date(date1);
    let endDate = new Date(date2);
    let countFriday13=0;

    while (currentDate<=endDate) 
    {
        if (currentDate.getDate()===13 && currentDate.getDay()===5)
        {
        countFriday13++;
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }
    return countFriday13;
}

const date1 = new Date('2000,1,1');
const date2 = new Date(Date.now());
const options = {year: 'numeric', month: 'long', day: 'numeric' };
const daysFriday13= friday13(date1, date2);
console.log(`Всего пятниц 13 с ${date1.toLocaleDateString('ru-RU', options)} по ${date2.toLocaleDateString('ru-RU', options)}: ${daysFriday13}`);