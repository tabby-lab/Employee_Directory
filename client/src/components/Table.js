import React from 'react'
// import Col from './Col'
// import Row from './Row'

const Table = (props) => {
    return (
        <div className="container">
            <table className="table table-hover ">

                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">picture</th>
                        <th scope="col" onClick={()=>{
                            props.handleOnSubmit("first")
                        }}>First</th>
                        <th scope="col" onClick={()=>{
                            props.handleOnSubmit("last")
                        }}>Last</th>
                        <th scope="col">email</th>
                        {/*   <th scope ="col" onClick={()=>{
                            props.handleOnSubmit("email")
                        }}>Email</th> */}
                        <th scope="col">phone</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        props.employeeList.map((person, id) => {
                            return (
                                <tr key={id}>
                                    <td>
                                        {id}
                                    </td>
                                    <td>
                                        <img src={person.picture.thumbnail} />
                                    </td>
                                    <td>
                                        {person.name.first}
                                    </td>

                                    <td>
                                        {person.name.last}
                                    </td>

                                    <td>
                                        {person.email}
                                    </td>

                                    <td>
                                        {person.phone}
                                    </td>
                                </tr>
                            )

                        })


                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table
