import ListItem from './list-item'

function List({}) {
  return (
    <>
      <div className="mt-5">
        <h6>My Cart</h6>
        <hr />
        <ul>
          <li>
            <ListItem />
          </li>
        </ul>
        <hr />
      </div>

      <style jsx>
        {`
          ul {
            padding-left: 0;
            font-size: 0.8rem;
            min-height: 200px; 
          }

          ul li {
            list-style: none;
          }

          ul img {
            width: 50px;
            height: 50px;
            object-fit: cover;
          }
        `}
      </style>
    </>
  );
}

export default List;
