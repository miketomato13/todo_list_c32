import React from 'react'
import dateFns from 'date-fns'

const Cell = props => (
  <div className={`calendar-col cell ${
    !dateFns.isSameMonth(props.day, props.currentMonth)
      ? "disabled"
      : dateFns.isSameDay(props.day, props.currentDate) ? "current" : ""
    }`}
    id={`day-${dateFns.format(props.day, 'YYYY-MM-DD')}`}
    onClick={ () => props.handleDateClick(props.day)  }
  >
    <div className="calendar-events">
      {
        props.dailyTasks.map(task => (
          <div key={task.id} className="calendar-event">
            {
              task.completed ?
              <s>{task.description}</s> :
              task.description
            }
          </div>
        ))
      }
    </div>

    <span className="number">
      {
        dateFns.format(props.day, "D")
      }
    </span>
  </div>
)

export default Cell
