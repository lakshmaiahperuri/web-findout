import React, { useRef, useEffect, useState } from "react";

function ListingPageComponent({ userList }) {
  const listInnerRef = useRef();
  const [currPage, setCurrPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);
  const [lastList, setLastList] = useState(false);
  const onScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
    console.log('onscroll>>>>>>>>>>>>>>>',scrollTop+ clientHeight, scrollHeight);
    if (listInnerRef.current) {
      console.log('coming here>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.', listInnerRef);
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        console.log('pageeeeeeeeeeeeeeeeeeeeeee', currPage);
        setCurrPage(currPage + 1);
      }
    }
  };

  return (
    <div>
      <div
        onScroll={onScroll}
        ref={listInnerRef}
        style={{ height: "100vh", overflowY: "auto" }}
      >
        {userList.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                marginTop: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
              }}
            >
              <p>Name: {item.name}</p>
              <p>Trips: {item.trips}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListingPageComponent;
