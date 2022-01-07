import React, { useState, useEffect } from "react";
import { DataItem } from "./DataItem";
import { Row, Col, Button } from "react-bootstrap";
import axios from "axios";

export const DataList = () => {
  const [data, setData] = useState([]);
  const [filtData, setFiltData] = useState(data);
  const [txtSearch, setTxtSearch] = useState("");
  const handleSearch = () => {
    const filteredData = data.filter((item) =>
      item.title.toUpperCase().includes(txtSearch.toUpperCase())
    );
    txtSearch !== "" ? setFiltData(filteredData) : setFiltData(data);
  };
  const callData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setData(result.data);
  };

  useEffect(() => {
    callData();
    // axios.get("https://fakestoreapi.com/products").then((res) => {
    //   setData(res.data);
    // });
  }, []);

  useEffect(() => {
    handleSearch();
  }, [txtSearch, data]);
  // useEffect(() => {
  //   handleSearch();
  // }, [txtSearch, data]);

  return (
    <div>
      <Row>
        <Col lg={8}>
          <input
            type="text"
            onChange={(e) => setTxtSearch(e.target.value)}
            placeholder="Search..."
            style={{ width: "700px" }}
          ></input>
        </Col>
        <Col lg={2}>
          <Button onClick={handleSearch}>Search</Button>
        </Col>
      </Row>
      <Row>
        {filtData.map((item, index) => (
          <Col lg={3}>
            <DataItem item={item} index={index} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
