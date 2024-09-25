import React, { useContext } from 'react'
import "./ExpenseDisplay.css"
import { DataContext } from '../context/context'


function ExpenseDisplay() {
    const data= useContext(DataContext);

    console.log(data.expenses)
    return (
        <div>
        {
            data.expenses.map((item, index)=>(
                <><div key={index}>
                    <div className='expenses'>
                        <span className='bold'>Expense Amount:</span> {item[0]}
                        </div>
                    <div className='expenses'>
                    <span className='bold'>Description:</span> {item[1]}
                        </div>
                    <div className='expenses'>
                    <span className='bold'>Date:</span> {item[2]}
                        </div>
                </div>
                <hr />
                </>
            ))
        }
    </div>
  )
}

export default ExpenseDisplay