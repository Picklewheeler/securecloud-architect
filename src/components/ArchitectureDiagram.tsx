
import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const ArchitectureDiagram = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!inView || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.scale(dpr, dpr);
      ctx.translate(0, 0);
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw architecture diagram
      drawArchitectureDiagram(ctx, rect.width, rect.height);
    };
    
    // Initial setup
    setCanvasDimensions();
    
    // Redraw on resize
    window.addEventListener('resize', setCanvasDimensions);
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, [inView]);
  
  // Draw architecture diagram
  const drawArchitectureDiagram = (
    ctx: CanvasRenderingContext2D, 
    width: number, 
    height: number
  ) => {
    // Define colors
    const colors = {
      awsBoundary: '#232F3E',
      vpcBoundary: '#FF9900',
      pciDss: '#D13212',
      privateSubnet: '#7AA116',
      publicSubnet: '#1A73E8',
      service: '#FFFFFF',
      text: '#232F3E',
      connection: '#666666',
      securityGroup: '#C7000B'
    };
    
    // Set background
    ctx.fillStyle = '#F8F9FA';
    ctx.fillRect(0, 0, width, height);
    
    // Calculate dimensions
    const margin = 20;
    const diagramWidth = width - margin * 2;
    const diagramHeight = height - margin * 2;
    
    // Draw AWS Cloud boundary
    ctx.strokeStyle = colors.awsBoundary;
    ctx.lineWidth = 2;
    roundRect(ctx, margin, margin, diagramWidth, diagramHeight, 10, false, true);
    
    // Draw "AWS Cloud" label
    ctx.fillStyle = colors.text;
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText('AWS Cloud', margin + 10, margin + 20);
    
    // Draw VPC boundary
    const vpcMargin = 40;
    const vpcWidth = diagramWidth - vpcMargin * 2;
    const vpcHeight = diagramHeight - vpcMargin * 2;
    
    ctx.strokeStyle = colors.vpcBoundary;
    roundRect(ctx, margin + vpcMargin, margin + vpcMargin, vpcWidth, vpcHeight, 8, false, true);
    
    // Draw "VPC" label
    ctx.fillStyle = colors.text;
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText('VPC', margin + vpcMargin + 10, margin + vpcMargin + 20);
    
    // Define subnet dimensions
    const subnetMargin = 60;
    const subnetWidth = (vpcWidth - subnetMargin * 3) / 2;
    const subnetHeight = vpcHeight - subnetMargin * 2;
    
    // Draw public subnet
    ctx.strokeStyle = colors.publicSubnet;
    ctx.lineWidth = 1.5;
    roundRect(
      ctx, 
      margin + vpcMargin + subnetMargin, 
      margin + vpcMargin + subnetMargin, 
      subnetWidth, 
      subnetHeight, 
      6, 
      false, 
      true
    );
    
    // Draw "Public Subnet" label
    ctx.fillStyle = colors.text;
    ctx.font = '11px sans-serif';
    ctx.fillText(
      'Public Subnet', 
      margin + vpcMargin + subnetMargin + 10, 
      margin + vpcMargin + subnetMargin + 15
    );
    
    // Draw private subnet
    ctx.strokeStyle = colors.privateSubnet;
    roundRect(
      ctx, 
      margin + vpcMargin + subnetMargin * 2 + subnetWidth, 
      margin + vpcMargin + subnetMargin, 
      subnetWidth, 
      subnetHeight, 
      6, 
      false, 
      true
    );
    
    // Draw "Private Subnet (PCI DSS Scope)" label
    ctx.fillStyle = colors.text;
    ctx.font = '11px sans-serif';
    ctx.fillText(
      'Private Subnet', 
      margin + vpcMargin + subnetMargin * 2 + subnetWidth + 10, 
      margin + vpcMargin + subnetMargin + 15
    );
    
    // Draw PCI DSS boundary
    const pciMargin = 80;
    const pciWidth = subnetWidth - pciMargin;
    const pciHeight = subnetHeight - pciMargin * 1.5;
    
    ctx.strokeStyle = colors.pciDss;
    ctx.setLineDash([5, 3]);
    roundRect(
      ctx, 
      margin + vpcMargin + subnetMargin * 2 + subnetWidth + pciMargin / 2, 
      margin + vpcMargin + subnetMargin + pciMargin / 2, 
      pciWidth, 
      pciHeight, 
      6, 
      false, 
      true
    );
    ctx.setLineDash([]);
    
    // Draw "PCI DSS Boundary" label
    ctx.fillStyle = colors.pciDss;
    ctx.font = 'bold 10px sans-serif';
    ctx.fillText(
      'PCI DSS Boundary', 
      margin + vpcMargin + subnetMargin * 2 + subnetWidth + pciMargin / 2 + 10, 
      margin + vpcMargin + subnetMargin + pciMargin / 2 + 15
    );
    
    // Draw services (simplified representation)
    const boxWidth = 80;
    const boxHeight = 40;
    const boxMargin = 20;
    
    // Public subnet services
    const publicServices = [
      { name: 'Application Load Balancer', y: 0 },
      { name: 'API Gateway', y: 1 },
      { name: 'CloudFront', y: 2 },
      { name: 'WAF', y: 3 }
    ];
    
    publicServices.forEach((service, index) => {
      const x = margin + vpcMargin + subnetMargin + (subnetWidth - boxWidth) / 2;
      const y = margin + vpcMargin + subnetMargin + boxMargin + (boxHeight + boxMargin) * index;
      
      ctx.fillStyle = colors.service;
      ctx.strokeStyle = colors.publicSubnet;
      roundRect(ctx, x, y, boxWidth, boxHeight, 4, true, true);
      
      ctx.fillStyle = colors.text;
      ctx.font = '9px sans-serif';
      const textWidth = ctx.measureText(service.name).width;
      if (textWidth > boxWidth - 10) {
        const words = service.name.split(' ');
        ctx.fillText(words[0], x + boxWidth / 2 - ctx.measureText(words[0]).width / 2, y + boxHeight / 2 - 5);
        ctx.fillText(words[1], x + boxWidth / 2 - ctx.measureText(words[1]).width / 2, y + boxHeight / 2 + 10);
      } else {
        ctx.fillText(service.name, x + boxWidth / 2 - textWidth / 2, y + boxHeight / 2 + 4);
      }
    });
    
    // Private subnet services (PCI)
    const privateServices = [
      { name: 'Payment Service', y: 0 },
      { name: 'RDS (Encrypted)', y: 1 },
      { name: 'KMS', y: 2 }
    ];
    
    privateServices.forEach((service, index) => {
      const x = margin + vpcMargin + subnetMargin * 2 + subnetWidth + (subnetWidth - boxWidth) / 2;
      const y = margin + vpcMargin + subnetMargin + boxMargin + (boxHeight + boxMargin) * index;
      
      ctx.fillStyle = colors.service;
      ctx.strokeStyle = colors.privateSubnet;
      roundRect(ctx, x, y, boxWidth, boxHeight, 4, true, true);
      
      ctx.fillStyle = colors.text;
      ctx.font = '9px sans-serif';
      const textWidth = ctx.measureText(service.name).width;
      if (textWidth > boxWidth - 10) {
        const words = service.name.split(' ');
        ctx.fillText(words[0], x + boxWidth / 2 - ctx.measureText(words[0]).width / 2, y + boxHeight / 2 - 5);
        ctx.fillText(words[1], x + boxWidth / 2 - ctx.measureText(words[1]).width / 2, y + boxHeight / 2 + 10);
      } else {
        ctx.fillText(service.name, x + boxWidth / 2 - textWidth / 2, y + boxHeight / 2 + 4);
      }
    });
    
    // Draw connections
    ctx.strokeStyle = colors.connection;
    ctx.lineWidth = 1;
    
    // Connect ALB to Payment Service
    const albX = margin + vpcMargin + subnetMargin + boxWidth;
    const albY = margin + vpcMargin + subnetMargin + boxMargin + boxHeight / 2;
    
    const paymentServiceX = margin + vpcMargin + subnetMargin * 2 + subnetWidth;
    const paymentServiceY = margin + vpcMargin + subnetMargin + boxMargin + boxHeight / 2;
    
    drawArrow(ctx, albX, albY, paymentServiceX, paymentServiceY);
    
    // Connect Payment Service to RDS
    const paymentX = margin + vpcMargin + subnetMargin * 2 + subnetWidth + boxWidth / 2;
    const paymentY = margin + vpcMargin + subnetMargin + boxMargin + boxHeight;
    
    const rdsX = margin + vpcMargin + subnetMargin * 2 + subnetWidth + boxWidth / 2;
    const rdsY = margin + vpcMargin + subnetMargin + boxMargin * 2 + boxHeight * 1.5;
    
    drawArrow(ctx, paymentX, paymentY, rdsX, rdsY - boxHeight / 2);
    
    // Draw legends
    const legendItems = [
      { color: colors.pciDss, name: 'PCI DSS Boundary' },
      { color: colors.privateSubnet, name: 'Private Subnet' },
      { color: colors.publicSubnet, name: 'Public Subnet' },
      { color: colors.awsBoundary, name: 'AWS Boundary' }
    ];
    
    const legendX = margin + 10;
    const legendY = height - margin - legendItems.length * 20;
    
    legendItems.forEach((item, index) => {
      const y = legendY + index * 20;
      
      ctx.fillStyle = item.color;
      ctx.fillRect(legendX, y, 15, 15);
      
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 0.5;
      ctx.strokeRect(legendX, y, 15, 15);
      
      ctx.fillStyle = colors.text;
      ctx.font = '10px sans-serif';
      ctx.fillText(item.name, legendX + 20, y + 11);
    });
  };
  
  // Helper function to draw rounded rectangles
  const roundRect = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
    fill: boolean,
    stroke: boolean
  ) => {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    
    if (fill) {
      ctx.fill();
    }
    
    if (stroke) {
      ctx.stroke();
    }
  };
  
  // Helper function to draw arrows
  const drawArrow = (
    ctx: CanvasRenderingContext2D,
    fromX: number,
    fromY: number,
    toX: number,
    toY: number
  ) => {
    const headLength = 10;
    const angle = Math.atan2(toY - fromY, toX - fromX);
    
    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.stroke();
    
    // Arrow head
    ctx.beginPath();
    ctx.moveTo(toX, toY);
    ctx.lineTo(
      toX - headLength * Math.cos(angle - Math.PI / 6),
      toY - headLength * Math.sin(angle - Math.PI / 6)
    );
    ctx.lineTo(
      toX - headLength * Math.cos(angle + Math.PI / 6),
      toY - headLength * Math.sin(angle + Math.PI / 6)
    );
    ctx.closePath();
    ctx.fillStyle = ctx.strokeStyle;
    ctx.fill();
  };
  
  return (
    <div ref={ref} className="w-full h-[500px] p-2 rounded-lg border border-border">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full" 
        style={{ display: 'block' }}
      />
    </div>
  );
};

export default ArchitectureDiagram;
