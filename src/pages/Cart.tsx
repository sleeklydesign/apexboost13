
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { ShoppingCart } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Cart = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [discordTicket, setDiscordTicket] = useState('');
  const [notes, setNotes] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  
  // Load cart items from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Failed to parse cart data', error);
        setCartItems([]);
      }
    }
  }, []);
  
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };
  
  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!discordTicket.trim()) {
      toast({
        title: "Discord Ticket Required",
        description: "Please enter your Discord ticket name before placing the order.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Order Placed Successfully!",
      description: "Check your email for order confirmation. We'll process your request shortly.",
    });
    
    // In a real app, you would send this data to your backend
    console.log({
      orderItems: cartItems,
      discordTicket,
      notes,
      total: calculateTotal()
    });
    
    // Clear cart and redirect
    localStorage.removeItem('cart');
    setTimeout(() => {
      navigate('/order-success');
    }, 2000);
  };
  
  const removeItem = (id: number) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
    });
  };
  
  return (
    <div className="min-h-screen bg-dark-300 text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Your <span className="apex-gradient-text">Shopping Cart</span>
          </h1>
          
          {cartItems.length > 0 ? (
            <>
              <div className="bg-dark-200 border border-gray-800 rounded-lg p-8 mb-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-4">Cart Items</h2>
                  
                  <div className="space-y-4">
                    {cartItems.map(item => (
                      <div key={item.id} className="flex justify-between items-center border-b border-gray-800 pb-4">
                        <div>
                          <h3 className="font-bold text-lg">{item.name}</h3>
                          <p className="text-gray-400">${item.price.toFixed(2)} x {item.quantity}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                          <Button 
                            variant="destructive" 
                            size="sm"
                            onClick={() => removeItem(item.id)}
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-800">
                    <span className="text-xl font-bold">Total:</span>
                    <span className="text-xl font-bold text-apex">${calculateTotal()}</span>
                  </div>
                </div>
                
                <form onSubmit={handleCheckout} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="discordTicket" className="text-sm font-medium text-gray-300">
                      Discord Ticket Name <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      id="discordTicket" 
                      value={discordTicket}
                      onChange={(e) => setDiscordTicket(e.target.value)}
                      placeholder="Enter your Discord ticket name" 
                      required 
                      className="bg-dark-300 border-gray-700 text-white" 
                    />
                    <p className="text-sm text-gray-400">
                      Please create a ticket on our Discord server before placing your order
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="notes" className="text-sm font-medium text-gray-300">
                      Notes (Optional)
                    </label>
                    <Textarea 
                      id="notes" 
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Any specific requirements or questions?" 
                      className="bg-dark-300 border-gray-700 text-white resize-none" 
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-apex hover:bg-apex-light text-white"
                  >
                    Place Order
                  </Button>
                </form>
              </div>
              
              <div className="bg-dark-200 border border-gray-800 rounded-lg p-6">
                <h2 className="text-xl font-bold mb-3">Important Instructions</h2>
                <ol className="list-decimal pl-5 text-gray-400 space-y-2">
                  <li>Create a ticket on our Discord server (ApexBoost13#1234)</li>
                  <li>Enter the ticket name in the field above</li>
                  <li>Complete your order</li>
                  <li>Our team will contact you via Discord to coordinate the service</li>
                </ol>
              </div>
            </>
          ) : (
            <div className="bg-dark-200 border border-gray-800 rounded-lg p-8 text-center">
              <div className="flex justify-center mb-6">
                <ShoppingCart className="w-16 h-16 text-gray-500" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
              <p className="text-gray-400 mb-6">Explore our services to find what you need.</p>
              <Button
                onClick={() => navigate('/services')}
                className="bg-apex hover:bg-apex-light text-white"
              >
                Browse Services
              </Button>
            </div>
          )}
          
          <div className="mt-8 flex justify-center">
            <Button
              variant="outline"
              onClick={() => navigate('/')}
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Cart;
