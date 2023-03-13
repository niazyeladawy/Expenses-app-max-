import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

const Expenses = ({expenses}) => {
    return (
        <div className='expenses'>
            {
                expenses?.map(({ title, id, date, price }) => {
                    return <ExpenseItem key={id} title={title} price={price} date={date} />
                })
            }
        </div>
    )
}

export default Expenses