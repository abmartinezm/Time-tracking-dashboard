
const Daily = document.querySelector('#daily');
const Weekly = document.querySelector('#weekly');
const Monthly = document.querySelector('#monthly');

const DailyText = document.querySelectorAll('.daily');
const WeeklyText = document.querySelectorAll('.weekly');
const MonthlyText = document.querySelectorAll('.monthly');
const Category=document.querySelectorAll('.category');

let categoriaActiva=null;

Category.forEach(category=>{

    

    category.addEventListener('click',(e)=>{
        categoriaActiva=category.dataset.categoria;

        

        // DAILY STATS
        DailyText.forEach(day => {
            
            if(day.dataset.categoria === categoriaActiva){
                day.classList.add('active');
                Daily.classList.add('activa');
            }else{
                day.classList.remove('active')
                Daily.classList.remove('activa');
            }
        });
        // WEEKLY STATS

        WeeklyText.forEach(week => {
            if(week.dataset.categoria === categoriaActiva){
                week.classList.add('active');
                Weekly.classList.add('activa');
            }else{
                week.classList.remove('active')
                Weekly.classList.remove('activa');
            }
        });

        // MONTHLY STATS
        MonthlyText.forEach(month => {
            if(month.dataset.categoria === categoriaActiva){
                month.classList.add('active');
                Monthly.classList.add('activa');
            }else{
                month.classList.remove('active')
                Monthly.classList.remove('activa');
            }
        });

    })
})

