export default function AddToCart() {
  return (
    <div className="mt-5">
      <input type="number" className="input-qty text-center" defaultValue="1" />
      <button>ADD TO CART</button>
      <style jsx>
        {`
          .input-qty {
            -webkit-appearance: none;
            outline: none;
            border: none;
            border-bottom: 2px solid;
            font-size: 1.5rem;
            font-weight: bold;
            width: 100px;
          }

          button {
            background: black;
            color: white;
            border: none;
            padding: 10px 20px;
            outline: none;
            margin-left: 30px;
            position: relative;
            top: -3px;
          }

          button:active {
            background: #1f1f1f;
          }

          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
        `}
      </style>
    </div>
  );
}
