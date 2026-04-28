import React, { useContext } from "react";
import { CartContext } from "../CartContext";

function Dashboard() {
  const { orders } = useContext(CartContext);

  return (
    <>
      <div className="m-5 p-5">
        <h1 className="font-serif">My Orders</h1>

        <div>
          <div className="grid grid-cols-1 gap-3">
            {orders.length === 0 && (
              <p className="text-gray-500">No orders yet</p>
            )}

            {orders.map((order, index) => (
              <div
                key={index}
                className="flex flex-col justify-evenly content-center border-2 border-olive-100 rounded bg-olive-200 w-full"
              >
                {/* Top row */}
                <div className="flex flex-col sm:flex-row justify-between">
                  <div className="flex flex-wrap p-2 items-center">
                    <i className="fa-solid fa-truck text-md mt-1 ml-2 text-green-900"></i>
                    <p className="text-xl font-bold font-roboto ml-2 mr-2">
                      {order.id}
                    </p>
                    <p className="text-sm self-center text-green-900">
                      {order.date}
                    </p>
                  </div>

                  <div className="flex flex-wrap p-2 items-center gap-2 sm:justify-end">
                    <p className="rounded-full text-green-900 bg-gray-300 text-xs px-2 py-1">
                      {order.status}
                    </p>
                    <p className="text-green-900 font-bold">₹{order.total}</p>
                  </div>
                </div>

                {/* Bottom */}
                <div className="ml-5">
                  {order.items.map((item, i) => (
                    <p key={i} className="text-sm text-green-900 break-words">
                      {item.name} <i className="fa-solid fa-x"></i>{" "}
                      {item.quantity}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
