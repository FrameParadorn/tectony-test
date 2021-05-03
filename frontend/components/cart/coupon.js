function Coupon({}) {

  return (
    <>
      <input type="text" placeholder="Coupon Code"/>
      <button>APPLY COUPON</button>
      <style jsx>{`
        input {
          border: none;
          border-radius: 2px;
          width: 130px;
          outline: none;
          padding: 5px 10px;
          box-shadow: 0px 0px 5px #9c9c9c;
        }

        button {
          border: 1px solid black;
          border-radius: 2px;
          background: white;
          padding: 5px 10px;
          margin-left: 10px;
        }

        button:hover {
          background: black;
          cursor: pointer;
          color: white;
        }
      `}
      </style>
    </>
  )

}


export default Coupon
