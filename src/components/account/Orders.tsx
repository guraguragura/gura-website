
import React, { useState } from 'react';
import { Clock, Package, CheckCircle, Truck, XCircle } from 'lucide-react';

// Define the possible order statuses
export type OrderStatus = 'pending' | 'processing' | 'out_for_delivery' | 'delivered' | 'canceled';

// Define the order interface
interface Order {
  id: string;
  display_id: number;
  status: OrderStatus;
  date: string;
  total: number;
  items: number;
}

// Status configuration with icons and colors
const statusConfig: Record<OrderStatus, { icon: React.ReactNode; color: string; label: string }> = {
  pending: { 
    icon: <Clock className="h-5 w-5" />, 
    color: 'text-yellow-500', 
    label: 'Pending' 
  },
  processing: { 
    icon: <Package className="h-5 w-5" />, 
    color: 'text-blue-500', 
    label: 'Processing' 
  },
  out_for_delivery: { 
    icon: <Truck className="h-5 w-5" />, 
    color: 'text-indigo-500', 
    label: 'Out for Delivery' 
  },
  delivered: { 
    icon: <CheckCircle className="h-5 w-5" />, 
    color: 'text-green-500', 
    label: 'Delivered' 
  },
  canceled: { 
    icon: <XCircle className="h-5 w-5" />, 
    color: 'text-red-500', 
    label: 'Canceled' 
  }
};

// Mock orders data for development
const mockOrders: Order[] = [
  {
    id: 'ord_1234',
    display_id: 1234,
    status: 'pending',
    date: '2023-11-01',
    total: 124.99,
    items: 2
  },
  {
    id: 'ord_2345',
    display_id: 2345,
    status: 'processing',
    date: '2023-10-27',
    total: 79.95,
    items: 1
  },
  {
    id: 'ord_3456',
    display_id: 3456,
    status: 'out_for_delivery',
    date: '2023-10-20',
    total: 249.50,
    items: 3
  },
  {
    id: 'ord_4567',
    display_id: 4567,
    status: 'delivered',
    date: '2023-10-15',
    total: 54.99,
    items: 1
  },
  {
    id: 'ord_5678',
    display_id: 5678,
    status: 'canceled',
    date: '2023-10-10',
    total: 199.99,
    items: 2
  }
];

export const Orders = () => {
  const [orders] = useState<Order[]>(mockOrders);

  // If you have no orders
  if (orders.length === 0) {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Orders</h2>
          <p className="text-gray-500 mt-1">View and track your orders</p>
        </div>
        
        <div className="border rounded-lg p-6 text-center py-12">
          <p className="text-gray-500">You haven't placed any orders yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Orders</h2>
        <p className="text-gray-500 mt-1">View and track your orders</p>
      </div>
      
      <div className="border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">#{order.display_id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{order.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`flex items-center text-sm ${statusConfig[order.status].color}`}>
                      {statusConfig[order.status].icon}
                      <span className="ml-1.5">{statusConfig[order.status].label}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">${order.total.toFixed(2)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{order.items}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
