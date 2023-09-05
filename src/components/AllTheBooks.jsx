import { Component } from "react";
import Card from "react-bootstrap/Card";
import library from "../data/scifi.json";

class AllTheBooks extends Component {
  render() {
    return (
      <main className="h-100">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-between">
            {library.map((book, index) => (
              <div className="col-md-3" key={index}>
                <Card>
                  <Card.Img variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                      Genere:{book.category} - Price:{book.price} $
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }
}

export default AllTheBooks;
