import React, { useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { FaRegEye, FaRupeeSign } from "react-icons/fa6";
import Loader from "../layouts/Loader";
import { toast } from "react-toastify"; // Import toast from react-toastify
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, myOrders } from "../../actions/orderAction";
import { getRestaurants } from "../../actions/restaurantAction";
import { Link } from "react-router-dom";

const ListOrders = () => {
  const dispatch = useDispatch();
  const { loading, error, orders } = useSelector((state) => state.myOrders);
  const restaurants = useSelector((state) => state.restaurants);
  const restaurantList = Array.isArray(restaurants.restaurants)
    ? restaurants.restaurants
    : [];

  useEffect(() => {
    dispatch(myOrders());
    dispatch(getRestaurants());
    if (error) {
      toast.error(error); // Use toast for error messages
      dispatch(clearErrors());
    }
  }, [dispatch, error]);

  const setOrders = () => {
    const data = {
      columns: [
        {
          label: "Restaurant Name",
          field: "restaurant",
          sort: "asc",
        },
        {
          label: "Order items",
          field: "orderItems",
          sort: "asc",
        },
        {
          label: "Num of items",
          field: "numOfItems",
          sort: "asc",
        },
        {
          label: "Amount",
          field: "amount",
          sort: "asc",
        },
        {
          label: "Status",
          field: "status",
          sort: "asc",
        },
        {
          label: "Order Date",
          field: "orderDate",
          sort: "asc",
        },
        {
          label: "Actions",
          field: "actions",
          sort: "asc",
        },
      ],
      rows: [],
    };

    if (orders && orders.length > 0 && restaurantList.length > 0) {
      const sortedOrders = orders.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      sortedOrders.forEach((order) => {
        const orderItemNames = order.orderItems
          .map((item) => item.name)
          .join(", ");
        const restaurant = restaurantList.find(
          (restaurant) => restaurant._id.toString() === order.restaurant._id
        );

        data.rows.push({
          restaurant: restaurant?.name || "unknown Restaurant",
          numOfItems: order.orderItems.length,
          amount: (
            <span>
              <FaRupeeSign />
              {order.finalTotal}
            </span>
          ),
          status:
            order.orderStatus &&
            String(order.orderStatus).includes("Delivered") ? (
              <p style={{ color: "green" }}>{order.orderStatus}</p>
            ) : (
              <p style={{ color: "red" }}>{order.orderStatus}</p>
            ),
          orderItems: orderItemNames,
          orderDate: new Date(order.createdAt).toLocaleDateString(),
          actions: (
            <Link to={`/eats/orders/${order._id}`}>
              <FaRegEye />
            </Link>
          ),
        });
      });
    }
    return data;
  };

  return (
    <>
      <div className="cartt">
        <h1 className="my-5">My Orders</h1>
        {loading ? (
          <Loader />
        ) : (
          <MDBDataTable
            data={setOrders()}
            className="px-3"
            bordered
            striped
            hover
          />
        )}
      </div>
    </>
  );
};

export default ListOrders;
