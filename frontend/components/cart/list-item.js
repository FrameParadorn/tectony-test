import {useState, useEffect} from 'react';
import {GoTrashcan} from 'react-icons/go';

function ListItem({}) {
  const [qty, setQty] = useState(1);

  const increaseQty = () => {
    setQty(qty + 1);
  };

  const decreaseQty = () => {
    if(qty === 1) return
    setQty(qty - 1);
  };

  useEffect(() => {
    console.log(qty)
  }, [qty])
  


  return (
    <>
      <div className="row">
        <div className="col-2">
          <img src="https://source.unsplash.com/l8p1aWZqHvE/640x427" alt="nike" />
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-12">test</div>
            <div className="col-12">
              <div className="input-qty">
                <button type="button" onClick={decreaseQty}>
                  -
                </button>
                <input type="number" value={qty} onKeyUp={(e) => setQty(parseInt(e.target.value))}/>
                <button type="button" onClick={increaseQty}>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 text-end">
          <div className="col-12">159,000 บาท</div>
          <div className="col-12">
            <GoTrashcan />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          img {
            width: 50px;
            height: 50px;
            object-fit: cover;
          }

          .input-qty button,
          .input-qty input {
            display: inline-block;
            border-radius: 2px;
            margin-right: 1px;
            border: 1px solid #dcdcdc;
          }

          .input-qty input {
            width: 50px;
            text-align: center;
          }

          .input-qty button {
            background: white;
          }

          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
          }
        `}
      </style>
    </>
  );
}

export default ListItem;
