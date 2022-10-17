import { Box, Flex, Spacer } from "@chakra-ui/react";
import { greyColor } from "../../Colors/Color";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removefromcart, update, updatebill } from "../../Redux/action";

export default function CartItems(props) {
  const { dummyItems } = props;
  let { name, detail, price } = dummyItems;
  dummyItems.quantity = 1;
  let discount = 10;
  const ref = useRef(null);
  const [itemObj, SetItemObj] = useState(dummyItems);
  price = price * itemObj.quantity;
  const cartItems = useSelector((store) => store.cartItems);
  const dispatch = useDispatch();
  return (
    <Box
      ref={ref}
      style={{
        boxShadow:
          "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
      }}
      w="100%"
      p={4}
      color="black"
    >
      <Flex>
        <Box p="4" fontSize="larger">
          {name}
        </Box>
        <Spacer />
        <Box p="4">{price - (price / 100) * discount}</Box>
      </Flex>
      <Flex>
        <Box p="4" color={greyColor}>
          {detail}
        </Box>
        <Spacer />
        <Box p="4" color={greyColor}>
          MRP <span style={{ textDecoration: "line-through" }}>₹{price}</span>
        </Box>
      </Flex>
      <Flex>
        <Box
          p="4"
          style={{ cursor: "pointer" }}
          onClick={(e) => {
            console.log(ref.current);
            ref.current.visiblity = "hidden";
          }}
        >
          <div
            style={{ display: "flex", gap: "5px", cursor: "pointer" }}
            onClick={() => {
              dispatch(removefromcart(dummyItems));
              dispatch(updatebill());
            }}
          >
            <img
              src="https://img.1mg.com/images/delete_icon.svg"
              alt="delete icon"
            />
            <span>Remove</span>
          </div>
        </Box>
        <Spacer />
        <Box p="4">
          <div style={{ display: "flex" }}>
            <img
              src="https://www.1mg.com/images/minus-cart.svg"
              style={{ cursor: "pointer" }}
              onClick={() => {
                SetItemObj((dummyItems) => {
                  return {
                    ...dummyItems,
                    quantity: dummyItems.quantity - 1,
                  };
                });
                dispatch(update(itemObj));
                dispatch(updatebill());
              }}
            />
            <p style={{ marginTop: "4px" }}>{itemObj.quantity}</p>
            <img
              src="https://www.1mg.com/images/plus-cart.svg"
              style={{ cursor: "pointer" }}
              onClick={() => {
                SetItemObj((dummyItems) => {
                  return {
                    ...dummyItems,
                    quantity: dummyItems.quantity + 1,
                  };
                });
                dispatch(update(itemObj));
                dispatch(updatebill());
              }}
            />
          </div>
        </Box>
      </Flex>
    </Box>
  );
}
