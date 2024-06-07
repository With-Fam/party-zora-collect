'use client';

import { useState } from 'react';
import Button from '@/components/Button';
import Input from '@/components/Input';

const AdvancedDropdown = () => {
  const [showInputs, setShowInputs] = useState(false);
  return (
    <section className=" mx-auto">
      <div className="flex items-center justify-between">
        <Button size="sm" onClick={() => setShowInputs((prev) => !prev)}>
          <p className="text-black p-1">{showInputs ? 'Hide' : 'Show Advanced'}</p>
        </Button>
      </div>
      {showInputs && (
        <div className="flex flex-col gap-4">
          <Input placeholder="TokenID" />
          <Input type="number" placeholder="Price (ETH)" />
        </div>
      )}
    </section>
  );
};

export default AdvancedDropdown;
