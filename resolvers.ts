import { employees } from './employees.ts'
import { v4 } from "https://deno.land/std/uuid/mod.ts";


const resolvers = {
  Query: {
    getEmployees: () => {
      return employees
    },
    getEmployeeById: (_ : any, { id }: any) => {
      const employee = employees.find(e => {
        return e.id === id
      })

      if(employee) {
        return employee
      } else {
        return 'No employee found'
      }
    }
  },
  Mutation: {
    addEmployee: (_ : any, { data }: any) => {
      const newEmployee = data;
      newEmployee.id = v4.generate();
      employees.push(newEmployee)
      return newEmployee
    },
    updateEmployee: (_: any, {id, data}: any) => {
      let updatedEmployeeIndex = employees.findIndex(e =>  e.id === id)
      employees[updatedEmployeeIndex] = { ...employees[updatedEmployeeIndex], ...data}
      return employees[updatedEmployeeIndex]
    },
    deleteEmployee: (_ : any, { id }: any) => {
      const empIndex = employees.findIndex(e => e.id === id)
      employees.splice(empIndex, 1)
      return employees
    }
  }
}

export { resolvers }