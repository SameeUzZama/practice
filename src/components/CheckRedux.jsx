import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Row } from "react-bootstrap";

const CheckRedux = () => {
  // const selectData = useSelector((state) => state.productReducer.products);
  const dispatch = useDispatch();
  const handleClick = () => {
    //logic of dispatch
    dispatch({
      type: "ADD_PRODUCTS",
      data: ["Cat", "Bat", "Fat"],
    });
  };
  return (
    <div>
      <Button onClick={handleClick}>Dispatch me</Button>;
      {/* <Row>
        {selectData.map((item) => {
          <h1>{item}</h1>;
        })}
      </Row> */}
    </div>
  );
};
export default CheckRedux;
