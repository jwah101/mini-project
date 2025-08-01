import { useState } from "react";
import './Calendar.css'

function Calendar ({dateIndex, setDateIndex, selectedDate, setSelectedDate}) {
  const [startDate , setStartDate] = useState(getTodayStart());
  const dayLabels = ['일', '월', '화', '수', '목', '금', '토'];
  // 시작날짜 셋팅
  function getTodayStart() {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
  }
  //하루 단위 이동하기 -> moveDay(direction) -> direction-> -1,+1
  const moveDay = (direction)=>{
    const newStart = new Date(startDate);
    newStart.setDate(startDate.getDate() + direction)
    setStartDate(newStart);
    // 무브 데이 실행시 날짜 자동으로 값 이동
    if (selectedDate) {
      const selected = new Date(new Date().getFullYear(), selectedDate.month, selectedDate.date);
      selected.setDate(selected.getDate() + direction);
      setSelectedDate({
        month: selected.getMonth(),
        date: selected.getDate(),
        dayLabel: dayLabels[selected.getDay()]
      });
    }
  };

const getWeekDates = () => {
  const week = [];
  for (let i = 0; i < 7; i++) {
    const day = new Date(startDate);
    day.setDate(startDate.getDate() + i);
    week.push(day);
  }
  return week;
};

  const weekDates = getWeekDates();


  return(
    <div className="calendar">
      <button className="nav-button" onClick={() => moveDay(-1)}>◀</button>
      <div className="date-grid">
        {weekDates.map((date, i) => {
          const isSunday = date.getDay() === 0;
          const isSaturday = date.getDay() === 6;
          return (
            <div
              key={i} style={{cursor:'pointer'}} 
               onClick={()=>{
                setDateIndex(i)
                setSelectedDate(
                 {
                  month: date.getMonth(),
                  date: date.getDate(),
                  dayLabel: dayLabels[date.getDay()]
                  }
                );
              }} 
              className={
                `day ${isSunday ? 'sunday' : ''} 
                ${isSaturday ? 'saturday' : ''} 
                ${dateIndex === i ? 'day-selected' : ''}`
              }
            >
              <div>{date.getDate()}</div>
              <div>{dayLabels[date.getDay()]}</div>
            </div>
          );
        })}
      </div>
      <button className="nav-button" onClick={() => moveDay(1)}>▶</button>
    </div>
  )
}

export default Calendar;