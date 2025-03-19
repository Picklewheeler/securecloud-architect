
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

// This would be your public key in a real application
const stripePromise = loadStripe('pk_test_sample');

interface PaymentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  amount: number;
  productName: string;
  onSuccess?: (paymentIntent: any) => void;
}

const PaymentModal = ({
  open,
  onOpenChange,
  amount,
  productName,
  onSuccess,
}: PaymentModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Complete Your Payment</DialogTitle>
          <DialogDescription>
            {productName} - ${(amount / 100).toFixed(2)}
          </DialogDescription>
        </DialogHeader>
        <Elements stripe={stripePromise}>
          <CheckoutForm 
            amount={amount} 
            description={productName}
            onSuccess={onSuccess}
          />
        </Elements>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
