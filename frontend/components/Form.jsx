import { useConnection } from '../context/ConnectionContext';
import { useState, useEffect } from 'react';

const Form = () => {
  const { createBuyer, connectWallet, isConnected, account } = useConnection();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Connect wallet when component mounts
  useEffect(() => {
    const autoConnect = async () => {
      try {
        if (window.ethereum && !isConnected) {
          await connectWallet();
        }
      } catch (error) {
        console.error("Error auto-connecting wallet:", error);
      }
    };
    
    autoConnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Connect wallet if not already connected
      if (!isConnected) {
        await connectWallet();
      }
      
      // Create buyer
      await createBuyer({
        name: e.target.name.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        birthday: e.target.birthday.value,
        gender: e.target.gender.value,
        address: e.target.address.value,
        city: e.target.city.value,
        zipCode: e.target.zipCode.value
      });
      
      // Handle success
      alert('Buyer created successfully!');
    } catch (error) {
      // Handle error
      console.error('Error:', error);
      alert('Error creating buyer: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {isConnected ? (
        <p>Connected with account: {account}</p>
      ) : (
        <button type="button" onClick={connectWallet}>Connect Wallet</button>
      )}
      
      <form onSubmit={handleSubmit}>
        {/* Your form fields */}
        <input
          type="tel"
          name="phone"
          pattern="[0-9]{10}"
          title="Please enter a valid 10-digit phone number"
          required
          placeholder="Enter 10-digit phone number"
        />
        {/* Other form fields */}
        
        <button type="submit" disabled={isSubmitting || !isConnected}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default Form; 