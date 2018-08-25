import React, { Component } from "react";
import { Link } from "react-router-dom";

class Clients extends Component {
  render() {
    const clients = [
      {
        id: "1231",
        firstName: "Kevin",
        lastName: "Malone",
        email: "kevin@dundermiflin.com",
        phone: "555-555-5555",
        balance: "30.25"
      },
      {
        id: "4131",
        firstName: "Dave",
        lastName: "Dale",
        email: "dave@dale.com",
        phone: "131-411-5325",
        balance: "5325.53"
      },
      {
        id: "1341",
        firstName: "Steve",
        lastName: "Austin",
        email: "steve@austin.com",
        phone: "232-553-5324",
        balance: "5123.98"
      },
      {
        id: "111",
        firstName: "Billy",
        lastName: "Gunn",
        email: "billy@gunn.com",
        phone: "111-111-1111",
        balance: "1312.50"
      },
      {
        id: "1",
        firstName: "The",
        lastName: "Rock",
        email: "the@rock.com",
        phone: "555-222-2455",
        balance: "15123"
      }
    ];

    if (clients) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>
                {" "}
                <i className="fas fa-users" /> Clients
              </h2>
            </div>
            <div className="col-md-6">
              <h1>total</h1>
            </div>
          </div>
          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.id}>
                  <td>
                    {client.firstName} {client.lastName}
                  </td>
                  <td>{client.email}</td>
                  <td>£{parseFloat(client.balance).toFixed(2)}</td>
                  <td>
                    <Link
                      to={`/client/${client.id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fas fa-arrow-circle-right" />
                      Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <h1>Loading</h1>;
    }
  }
}

export default Clients;
