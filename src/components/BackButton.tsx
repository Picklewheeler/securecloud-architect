
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  label?: string;
  className?: string;
}

const BackButton = ({ label = 'Back', className }: BackButtonProps) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Button 
      onClick={handleGoBack}
      variant="ghost"
      className={`flex items-center gap-2 ${className}`}
    >
      <ArrowLeft className="h-4 w-4" />
      {label}
    </Button>
  );
};

export default BackButton;
