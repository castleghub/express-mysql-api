import { pool } from "../db.js";

//export const getEmployees = (req, res) => res.send("obteniendo empleados");
export const getEmployees = async (req, res) => {
    //throw new Error('My Error')
        //throw new Error('DB Error')
        const [rows] = await pool.query("SELECT * FROM employees");

  try {

  res.json(rows);

  } catch (error) {
    
    res.status(500).json({
        "message": "Something goes wrong",
        "Error": error
    })
  }
};

export const getEmployee = async (req, res) => {
  //console.log(req.params.id)
  //res.send("Obteniendo Empleado")

  const id = parseInt(req.params.id);
  // Falta verificar cuando id===NaN o Try/Catch

  try {

    const [rows] = await pool.query("SELECT * FROM employees WHERE id=?", [id]);
    //console.log(rows)
  
  if (rows.length <= 0)
    return res.status(404).json({
      message: "Employee not Found",
    });

  res.send(rows[0]);
    
  } catch (error) {
    
    res.status(500).json({
      "message": "Something goes wrong",
      "Error": error
  })
  }

   
};

export const createEmployee = async (req, res) => {
  const { name, salary } = req.body;
  const [rows] = await pool.query(
    "INSERT INTO employees(name, salary) VALUES(?, ?)",
    [name, salary]
  );
  //console.log(req.body)
  //res.send({rows})
  res.send({
    id: rows.insertId,
    name,
    salary,
  });
  //res.send('Post success')
};

export const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { name, salary } = req.body;
  //console.log(id,name,salary)
  const [result] = await pool.query(
    "UPDATE employees set name = IFNULL(?,name), salary = IFNULL(?, salary) WHERE id=?",
    [name, salary, id]
  );
  //console.log(result)
  if (result.affectedRows === 0)
    return res.status(404).json({
      message: "Employee not found.",
    });

  const [rows] = await pool.query("SELECT * FROM employees WHERE id=?", [id]);
  //console.log(rows)

  res.json(rows[0]);
};

export const deleteEmployee = async (req, res) => {
  const [result] = await pool.query("DELETE FROM employees WHERE id=?", [
    req.params.id,
  ]);
  //console.log(result);

  if (result.affectedRows <= 0)
    return res.status(404).json({
      message: " Employee not found.",
    });
  res.sendStatus(204);
};
