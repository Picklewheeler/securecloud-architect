
import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';

interface CheckoutFormProps {
  amount: number;
  currency?: string;
  description?: string;
  onSuccess?: (paymentIntent: any) => void;
  onError?: (error: any) => void;
  className?: string;
}

const CheckoutForm = ({
  amount,
  currency = 'usd',
  description = 'Payment for services',
  onSuccess,
  onError,
  className,
}: CheckoutFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // In a real application, you would call your backend to create a payment intent
  // This is simplified for demo purposes
  const createPaymentIntent = async () => {
    // Simulate a backend call - in a real app this would be an API call
    return {
      clientSecret: 'demo_secret_key',
      id: 'demo_payment_intent_id',
    };
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      return;
    }

    setIsProcessing(true);
    setErrorMessage(null);

    try {
      // In a real app, you would get this from your backend
      const paymentIntent = await createPaymentIntent();

      // This would use the real clientSecret in a production environment
      // For demo purposes, we're simulating the confirmation
      // const result = await stripe.confirmCardPayment(paymentIntent.clientSecret, {
      //   payment_method: { card: cardElement }
      // });

      // Simulate successful payment for demo
      const simulatedResult = {
        paymentIntent: {
          id: 'demo_payment_id',
          status: 'succeeded',
          amount: amount,
          currency: currency,
        },
      };

      toast({
        title: "Payment Successful!",
        description: `Payment of ${(amount / 100).toFixed(2)} ${currency.toUpperCase()} processed successfully.`,
      });

      if (onSuccess) {
        onSuccess(simulatedResult.paymentIntent);
      }
    } catch (error) {
      console.error('Payment error:', error);
      const errorMsg = error instanceof Error ? error.message : 'An unknown error occurred';
      setErrorMessage(errorMsg);
      toast({
        variant: "destructive",
        title: "Payment Failed",
        description: errorMsg,
      });
      if (onError) {
        onError(error);
      }
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cn('space-y-6', className)}>
      <div className="space-y-4">
        <div className="rounded-md border border-border p-4">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
        </div>
        
        {errorMessage && (
          <div className="text-sm text-destructive">{errorMessage}</div>
        )}
        
        <div className="pt-2">
          <Button
            type="submit"
            disabled={!stripe || isProcessing}
            className="w-full"
          >
            {isProcessing ? 'Processing...' : `Pay ${(amount / 100).toFixed(2)} ${currency.toUpperCase()}`}
          </Button>
        </div>
        
        <p className="text-xs text-muted-foreground text-center mt-4">
          This is a demo payment form. No actual payment will be processed.
        </p>
      </div>
    </form>
  );
};

export default CheckoutForm;
