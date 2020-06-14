const typeDefs = `
  type Query {
    getEmployees: [Employee!]!
    getEmployeeById(id: ID!): Employee
  }
  type Mutation {
    addEmployee(data: AddEmployeeInput!):Employee!
    deleteEmployee(id: ID!): [Employee!]!
    updateEmployee(id: ID!, data: UpdateEmployeeInput): Employee!
  }
  type Employee {
    id: ID!
    name: String!
    salary: String!
    position:String!
  }

  input AddEmployeeInput {
    name: String!
    position: String!
    salary: String
  }

  input UpdateEmployeeInput {
    name: String
    position: String
    salary: String
  }
`

export { typeDefs }
