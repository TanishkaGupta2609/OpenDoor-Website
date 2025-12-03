import React, { useState, useEffect } from 'react';

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredOrders, setFilteredOrders] = useState([]);

    const styles = {
        // Global Styles
        global: `
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }
            body {
                background: linear-gradient(135deg, #f0f7ff 0%, #e6f0ff 100%);
                color: #333;
                line-height: 1.6;
                min-height: 100vh;
            }
        `,
        
        // Search Section Styles
        searchSection: {
            background: 'white',
            padding: '30px',
            borderRadius: '15px',
            boxShadow: '0 5px 20px rgba(0, 80, 160, 0.1)',
            marginBottom: '30px'
        },
        searchBox: {
            position: 'relative',
            maxWidth: '500px',
            marginBottom: '25px'
        },
        searchInput: {
            width: '100%',
            padding: '15px 15px 15px 45px',
            border: '2px solid #e2e8f0',
            borderRadius: '10px',
            fontSize: '16px',
            transition: 'all 0.3s',
            background: '#f8fbff'
        },
        // Order Stats Styles
        orderStats: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px'
        },
        statCard: {
            background: 'linear-gradient(135deg, #f8fbff 0%, #e6f0ff 100%)',
            padding: '20px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            border: '1px solid #e2e8f0',
            transition: 'all 0.3s'
        },
        statIcon: {
            width: '50px',
            height: '50px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #0050a0, #4dabf7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '20px'
        },
        statInfo: {
            flex: '1'
        },
        // Table Styles
        tableContainer: {
            background: 'white',
            borderRadius: '15px',
            boxShadow: '0 5px 20px rgba(0, 80, 160, 0.1)',
            overflow: 'hidden'
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse'
        },
        tableHeader: {
            background: 'linear-gradient(135deg, #0050a0, #4dabf7)'
        },
        tableHeaderCell: {
            color: 'white',
            padding: '18px 15px',
            textAlign: 'left',
            fontWeight: '600',
            fontSize: '15px'
        },
        tableRow: {
            borderBottom: '1px solid #e2e8f0',
            transition: 'background-color 0.3s'
        },
        tableCell: {
            padding: '16px 15px',
            color: '#475569'
        },
        // Status Styles
        status: {
            padding: '6px 12px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
        },
        // Action Button Styles
        actionBtn: {
            padding: '6px 12px',
            border: 'none',
            borderRadius: '6px',
            fontSize: '12px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.3s',
            marginRight: '5px'
        },
        viewBtn: {
            background: '#dbeafe',
            color: '#1e40af'
        },
        cancelBtn: {
            background: '#fee2e2',
            color: '#dc2626'
        },
        // No Orders Styles
        noOrders: {
            textAlign: 'center',
            padding: '60px 20px'
        },
        browseBtn: {
            display: 'inline-block',
            padding: '12px 30px',
            background: 'linear-gradient(135deg, #0050a0, #4dabf7)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '25px',
            fontWeight: '600',
            transition: 'all 0.3s',
            boxShadow: '0 4px 15px rgba(0, 80, 160, 0.3)'
        },
        
        // Property Info Styles
        propertyInfo: {
            display: 'flex',
            flexDirection: 'column'
        },
        propertyDetails: {
            fontSize: '12px',
            color: '#64748b',
            marginTop: '4px'
        },
        // Clear Button Styles
        clearBtn: {
            background: '#fee2e2',
            color: '#dc2626',
            border: '1px solid #fecaca',
            padding: '8px 16px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px',
            marginTop: '10px',
            transition: 'all 0.3s'
        }
    };

    // Sample data for demonstration
    const sampleOrders = [
        {
            id: "ORD1234",
            property: "Modern Downtown Apartment",
            location: "Downtown",
            date: "2024-01-15",
            amount: 45000,
            status: "Confirmed",
            bedrooms: 2,
            type: "Apartment"
        },
        {
            id: "ORD1235",
            property: "Spacious Suburban House",
            location: "Suburbs",
            date: "2024-01-10",
            amount: 75000,
            status: "Pending",
            bedrooms: 4,
            type: "House"
        },
        {
            id: "ORD1236",
            property: "Luxury Waterfront Villa",
            location: "Waterfront",
            date: "2024-01-05",
            amount: 150000,
            status: "Completed",
            bedrooms: 4,
            type: "Villa"
        }
    ];

    const formatIndianCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amount);
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-IN', options);
    };

    const updateOrderStats = () => {
        const totalOrders = orders.length;
        const pendingOrders = orders.filter(order => order.status === 'Pending').length;
        const confirmedOrders = orders.filter(order => order.status === 'Confirmed').length;
        const completedOrders = orders.filter(order => order.status === 'Completed').length;
        
        return { totalOrders, pendingOrders, confirmedOrders, completedOrders };
    };

    const stats = updateOrderStats();

    const viewOrder = (orderId) => {
        const order = orders.find(o => o.id === orderId);
        if (order) {
            const orderDetails = `
Order Details:

📋 Order ID: ${order.id}
🏠 Property: ${order.property}
📍 Location: ${order.location}
📅 Order Date: ${formatDate(order.date)}
💰 Amount: ${formatIndianCurrency(order.amount)}
📊 Status: ${order.status}
{order.bedrooms ?  Bedrooms: ${order.bedrooms} : ''}
{order.type ?  Type: ${order.type} : ''}

${getStatusMessage(order.status)}
            `;
            alert(orderDetails);
        }
    };

    const getStatusMessage = (status) => {
        switch(status) {
            case 'Pending':
                return '⏳ Your order is being processed. We will contact you soon.';
            case 'Confirmed':
                return '✅ Your order has been confirmed! Our agent will reach out to you.';
            case 'Completed':
                return '🎉 Order completed! Thank you for choosing OpenDoor.';
            case 'Cancelled':
                return '❌ This order has been cancelled.';
            default:
                return '';
        }
    };

    const cancelOrder = (orderId) => {
        if (window.confirm('Are you sure you want to cancel this order?')) {
            const updatedOrders = orders.map(order => 
                order.id === orderId ? { ...order, status: 'Cancelled' } : order
            );
            setOrders(updatedOrders);
            localStorage.setItem('orders', JSON.stringify(updatedOrders));
            alert('✅ Order has been cancelled successfully.');
        }
    };

    const clearAllOrders = () => {
        if (window.confirm('Are you sure you want to clear all orders? This action cannot be undone.')) {
            const emptyOrders = [];
            setOrders(emptyOrders);
            localStorage.setItem('orders', JSON.stringify(emptyOrders));
            alert('All orders have been cleared.');
        }
    };

    const loadDemoData = () => {
        if (window.confirm('Load demo orders for testing?')) {
            setOrders(sampleOrders);
            localStorage.setItem('orders', JSON.stringify(sampleOrders));
        }
    };

    // Initialize orders from localStorage
    useEffect(() => {
        const savedOrders = localStorage.getItem('orders');
        if (savedOrders) {
            try {
                const parsedOrders = JSON.parse(savedOrders);
                setOrders(parsedOrders);
            } catch (error) {
                console.error('Error parsing orders from localStorage:', error);
                setOrders([]);
            }
        } else {
            // No orders in localStorage, set empty array
            setOrders([]);
        }
    }, []);

    // Filter orders based on search term
    useEffect(() => {
        const filtered = orders.filter(order => 
            order.property.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (order.type && order.type.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        setFilteredOrders(filtered);
    }, [searchTerm, orders]);

    const getStatusStyle = (status) => {
        const baseStyle = { ...styles.status };
        switch(status.toLowerCase()) {
            case 'pending':
                return { ...baseStyle, background: '#fef3c7', color: '#d97706' };
            case 'confirmed':
                return { ...baseStyle, background: '#d1fae5', color: '#065f46' };
            case 'completed':
                return { ...baseStyle, background: '#dbeafe', color: '#1e40af' };
            case 'cancelled':
                return { ...baseStyle, background: '#fee2e2', color: '#dc2626' };
            default:
                return { ...baseStyle, background: '#e2e8f0', color: '#475569' };
        }
    };

    const getStatIconStyle = (type) => {
        const baseStyle = { ...styles.statIcon };
        switch(type) {
            case 'pending':
                return { ...baseStyle, background: 'linear-gradient(135deg, #f59e0b, #fbbf24)' };
            case 'confirmed':
                return { ...baseStyle, background: 'linear-gradient(135deg, #10b981, #34d399)' };
            case 'completed':
                return { ...baseStyle, background: 'linear-gradient(135deg, #3b82f6, #60a5fa)' };
            default:
                return baseStyle;
        }
    };

    return (
        <div>
            <style>{styles.global}</style>
            <main style={styles.orderHistoryContainer}>
                <div style={styles.pageHeader}>
                    <h1 style={{fontSize: '36px', color: '#0050a0', marginBottom: '10px', fontWeight: '700',textAlign:'center'}}>Your Order History</h1>
                    <p style={{color: '#64748b', fontSize: '18px',textAlign:'center'}}>Track and manage all your property rental orders</p>
                </div>

                <div style={styles.searchSection}>
                    <div style={styles.searchBox}>
                        <i className="fas fa-search" style={{position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#4dabf7', fontSize: '18px'}}></i>
                        <input 
                            type="text" 
                            placeholder="Search by property name or status..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={styles.searchInput}
                        />
                    </div>
                    <div style={styles.orderStats}>
                        <div style={styles.statCard}>
                            <div style={styles.statIcon}>
                                <i className="fas fa-clipboard-list"></i>
                            </div>
                            <div style={styles.statInfo}>
                                <h3 style={{fontSize: '28px', color: '#0050a0', marginBottom: '5px'}}>{stats.totalOrders}</h3>
                                <p style={{color: '#64748b', fontSize: '14px', fontWeight: '500'}}>Total Orders</p>
                            </div>
                        </div>
                        <div style={styles.statCard}>
                            <div style={getStatIconStyle('pending')}>
                                <i className="fas fa-clock"></i>
                            </div>
                            <div style={styles.statInfo}>
                                <h3 style={{fontSize: '28px', color: '#0050a0', marginBottom: '5px'}}>{stats.pendingOrders}</h3>
                                <p style={{color: '#64748b', fontSize: '14px', fontWeight: '500'}}>Pending</p>
                            </div>
                        </div>
                        <div style={styles.statCard}>
                            <div style={getStatIconStyle('confirmed')}>
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <div style={styles.statInfo}>
                                <h3 style={{fontSize: '28px', color: '#0050a0', marginBottom: '5px'}}>{stats.confirmedOrders}</h3>
                                <p style={{color: '#64748b', fontSize: '14px', fontWeight: '500'}}>Confirmed</p>
                            </div>
                        </div>
                        <div style={styles.statCard}>
                            <div style={getStatIconStyle('completed')}>
                                <i className="fas fa-home"></i>
                            </div>
                            <div style={styles.statInfo}>
                                <h3 style={{fontSize: '28px', color: '#0050a0', marginBottom: '5px'}}>{stats.completedOrders}</h3>
                                <p style={{color: '#64748b', fontSize: '14px', fontWeight: '500'}}>Completed</p>
                            </div>
                        </div>
                    </div>
                    <div style={{display: 'flex', gap: '10px', marginTop: '10px'}}>
                        <button style={styles.clearBtn} onClick={clearAllOrders}>
                            Clear All Orders
                        </button>
                        <button style={{...styles.clearBtn, background: '#d1fae5', color: '#065f46', borderColor: '#a7f3d0'}} onClick={loadDemoData}>
                            Load Demo Data
                        </button>
                    </div>
                </div>

                <div style={styles.tableContainer}>
                    {filteredOrders.length === 0 ? (
                        <div style={{...styles.noOrders, display: 'block'}}>
                            <i className="fas fa-clipboard-list" style={{fontSize: '64px', marginBottom: '20px', color: '#4dabf7', opacity: '0.7'}}></i>
                            <h3 style={{fontSize: '24px', color: '#0050a0', marginBottom: '10px'}}>
                                {orders.length === 0 ? 'No Orders Yet' : 'No Orders Found'}
                            </h3>
                            <p style={{color: '#64748b', marginBottom: '25px', fontSize: '16px'}}>
                                {orders.length === 0 
                                    ? 'You haven\'t placed any orders. Start exploring our properties!' 
                                    : 'No orders match your search criteria. Try different keywords.'}
                            </p>
                            <a href="listing.html" style={styles.browseBtn}>Browse Properties</a>
                        </div>
                    ) : (
                        <table style={styles.table}>
                            <thead style={styles.tableHeader}>
                                <tr>
                                    <th style={styles.tableHeaderCell}>Order ID</th>
                                    <th style={styles.tableHeaderCell}>Property</th>
                                    <th style={styles.tableHeaderCell}>Location</th>
                                    <th style={styles.tableHeaderCell}>Date</th>
                                    <th style={styles.tableHeaderCell}>Amount</th>
                                    <th style={styles.tableHeaderCell}>Status</th>
                                    <th style={styles.tableHeaderCell}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredOrders.sort((a, b) => new Date(b.date) - new Date(a.date)).map(order => (
                                    <tr key={order.id} style={styles.tableRow}>
                                        <td style={styles.tableCell}><strong>{order.id}</strong></td>
                                        <td style={styles.tableCell}>
                                            <div style={styles.propertyInfo}>
                                                <strong>{order.property}</strong>
                                                {order.bedrooms && (
                                                    <div style={styles.propertyDetails}>
                                                        {order.bedrooms} Bed • {order.type}
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                        <td style={styles.tableCell}>{order.location}</td>
                                        <td style={styles.tableCell}>{formatDate(order.date)}</td>
                                        <td style={styles.tableCell}><strong>{formatIndianCurrency(order.amount)}</strong></td>
                                        <td style={styles.tableCell}>
                                            <span style={getStatusStyle(order.status)}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td style={styles.tableCell}>
                                            <button 
                                                style={{...styles.actionBtn, ...styles.viewBtn}}
                                                onClick={() => viewOrder(order.id)}
                                            >
                                                <i className="fas fa-eye"></i> View
                                            </button>
                                            {order.status === 'Pending' && (
                                                <button 
                                                    style={{...styles.actionBtn, ...styles.cancelBtn}}
                                                    onClick={() => cancelOrder(order.id)}
                                                >
                                                    <i className="fas fa-times"></i> Cancel
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </main>

            
        </div>
    );
};

export default OrderHistory