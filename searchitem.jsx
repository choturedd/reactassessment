import React, { useState } from "react";

const Searching = () => {
    const data = [
        { id: 1, name: "indra", age: 20, dept: "csm" },
        { id: 2, name: "rajesh", age: 24, dept: "cse" },
        { id: 3, name: "mani", age: 25, dept: "ece" },
        { id: 4, name: "nikhil", age: 27, dept: "IT" },
        { id: 5, name: "vishnu", age: 39, dept: "civil" },
        { id: 6, name: "prabath", age: 29, dept: "mech" },
        { id: 7, name: "abhinav", age: 20, dept: "csc" },
        { id: 8, name: "teja", age: 19, dept: "Aid" },
        { id: 9, name: "sanjay", age: 20, dept: "csd" },
        { id: 10, name: "surya", age: 26, dept: "eee" }
    ];
    const [searchdata, setsearchdata] = useState("");

    const handleChange = (event) => {
        setsearchdata(event.target.value);
    };

    const filtereddata = data.filter((item) =>
        item.name.toLowerCase().includes(searchdata.toLowerCase())
    );
    return (
        <>
            <div>
                <input type="text" id="search"
                    name="search"
                    placeholder="Search By Name"
                    value={searchdata}
                    onChange={handleChange} style={{ marginLeft: "0px", textAlign: "left" }} />
                <table border="2px">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Department</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtereddata.map((data1) => (
                            <tr>
                                <td>{data1.id}</td>
                                <td>{data1.name}</td>
                                <td>{data1.age}</td>
                                <td>{data1.dept}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Searching;